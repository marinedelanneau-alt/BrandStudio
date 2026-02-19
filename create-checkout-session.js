const Stripe = require("stripe");

function firstNonEmpty(values) {
  for (const v of values) {
    if (v != null && String(v).trim()) return String(v).trim();
  }
  return "";
}

function looksLikeModeMismatch(err) {
  const msg = String((err && err.message) || "").toLowerCase();
  const raw = String((err && err.raw && err.raw.message) || "").toLowerCase();
  const all = `${msg} ${raw}`;
  return (
    all.includes("recurring") ||
    all.includes("one-time") ||
    all.includes("one time") ||
    all.includes("mode") ||
    all.includes("subscription") ||
    all.includes("payment mode")
  );
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  // Support current env names + legacy names used earlier in the project.
  const secretKey = firstNonEmpty([
    process.env.STRIPE_SECRET_KEY,
    process.env.STRIPE_SECRET
  ]);
  const priceId = firstNonEmpty([
    process.env.STRIPE_PRICE_ID,
    process.env.IDENTIFIANT_PRIX_BANDE
  ]);
  const appBaseUrl = firstNonEmpty([
    process.env.APP_BASE_URL
  ]);

  if (!secretKey || !priceId) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
      error: "Stripe non configure",
      details: "Missing STRIPE_SECRET_KEY or STRIPE_PRICE_ID"
    }));
    return;
  }

  if (!/^sk_(test|live)_/.test(secretKey)) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
      error: "Stripe non configure",
      details: "STRIPE_SECRET_KEY must start with sk_test_ or sk_live_"
    }));
    return;
  }

  if (!/^price_/.test(priceId)) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
      error: "Stripe non configure",
      details: "STRIPE_PRICE_ID must start with price_"
    }));
    return;
  }

  const stripe = new Stripe(secretKey);

  try {
    const baseUrlRaw = req.headers.origin || appBaseUrl || "";
    const baseUrl = String(baseUrlRaw).replace(/\/+$/, "");
    if (!/^https?:\/\//.test(baseUrl)) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({
        error: "Base URL invalide",
        details: "Set APP_BASE_URL to a full URL, e.g. https://brand-studio-formation.vercel.app"
      }));
      return;
    }

    const successUrl = `${baseUrl}/success.html?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${baseUrl}/index.html?checkout=cancel`;

    let preferredMode = firstNonEmpty([process.env.STRIPE_CHECKOUT_MODE]).toLowerCase();
    if (preferredMode !== "payment" && preferredMode !== "subscription") {
      preferredMode = "payment";
      try {
        const price = await stripe.prices.retrieve(priceId);
        if (price && price.recurring) preferredMode = "subscription";
      } catch (priceErr) {
        // Ignore read-permission errors and fall back to runtime retry below.
      }
    }

    const fallbackMode = preferredMode === "payment" ? "subscription" : "payment";
    let chosenMode = preferredMode;
    let session = null;
    let firstError = null;

    try {
      session = await stripe.checkout.sessions.create({
        mode: chosenMode,
        line_items: [{ price: priceId, quantity: 1 }],
        success_url: successUrl,
        cancel_url: cancelUrl,
        billing_address_collection: "auto",
        allow_promotion_codes: true
      });
    } catch (err) {
      firstError = err;
      if (looksLikeModeMismatch(err)) {
        chosenMode = fallbackMode;
        session = await stripe.checkout.sessions.create({
          mode: chosenMode,
          line_items: [{ price: priceId, quantity: 1 }],
          success_url: successUrl,
          cancel_url: cancelUrl,
          billing_address_collection: "auto",
          allow_promotion_codes: true
        });
      } else {
        throw err;
      }
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        url: session.url,
        mode: chosenMode,
        retried: !!firstError && chosenMode !== preferredMode
      })
    );
  } catch (err) {
    console.error("Stripe checkout error:", err);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        error: "Creation checkout impossible",
        details: (err && err.raw && err.raw.message) || (err && err.message) || "unknown",
        type: (err && err.type) || "unknown",
        code: (err && err.code) || "unknown"
      })
    );
  }
};
