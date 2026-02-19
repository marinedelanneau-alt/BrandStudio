function firstNonEmpty(values) {
  for (const v of values) {
    if (v != null && String(v).trim()) return String(v).trim();
  }
  return "";
}

function looksLikeModeMismatch(message) {
  const m = String(message || "").toLowerCase();
  return (
    m.includes("recurring") ||
    m.includes("one-time") ||
    m.includes("one time") ||
    m.includes("subscription") ||
    m.includes("mode")
  );
}

async function stripeRequest({ method, path, secretKey, form }) {
  const url = `https://api.stripe.com${path}`;
  const headers = { Authorization: `Bearer ${secretKey}` };
  const options = { method, headers };

  if (form && method !== "GET") {
    headers["Content-Type"] = "application/x-www-form-urlencoded";
    options.body = new URLSearchParams(form).toString();
  }

  const resp = await fetch(url, options);
  const raw = await resp.text();
  let data = {};
  try {
    data = raw ? JSON.parse(raw) : {};
  } catch (e) {
    data = { raw };
  }

  if (!resp.ok) {
    const errObj = data && data.error ? data.error : {};
    const err = new Error(errObj.message || `Stripe HTTP ${resp.status}`);
    err.type = errObj.type || "stripe_error";
    err.code = errObj.code || String(resp.status);
    err.raw = errObj;
    throw err;
  }

  return data;
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const secretKey = firstNonEmpty([process.env.STRIPE_SECRET_KEY, process.env.STRIPE_SECRET]);
  const priceId = firstNonEmpty([process.env.STRIPE_PRICE_ID, process.env.IDENTIFIANT_PRIX_BANDE]);
  const appBaseUrl = firstNonEmpty([process.env.APP_BASE_URL]);

  if (!secretKey || !priceId) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Stripe non configure", details: "Missing STRIPE_SECRET_KEY or STRIPE_PRICE_ID" }));
    return;
  }

  if (!/^sk_(test|live)_/.test(secretKey)) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Stripe non configure", details: "STRIPE_SECRET_KEY must start with sk_test_ or sk_live_" }));
    return;
  }

  if (!/^price_/.test(priceId)) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Stripe non configure", details: "STRIPE_PRICE_ID must start with price_" }));
    return;
  }

  try {
    const baseUrlRaw = req.headers.origin || appBaseUrl || "";
    const baseUrl = String(baseUrlRaw).replace(/\/+$/, "");
    if (!/^https?:\/\//.test(baseUrl)) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Base URL invalide", details: "Set APP_BASE_URL to a full URL" }));
      return;
    }

    const successUrl = `${baseUrl}/success.html?session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl = `${baseUrl}/index.html?checkout=cancel`;

    let preferredMode = firstNonEmpty([process.env.STRIPE_CHECKOUT_MODE]).toLowerCase();
    if (preferredMode !== "payment" && preferredMode !== "subscription") {
      preferredMode = "payment";
      try {
        const price = await stripeRequest({
          method: "GET",
          path: `/v1/prices/${encodeURIComponent(priceId)}`,
          secretKey
        });
        if (price && price.recurring) preferredMode = "subscription";
      } catch (e) {}
    }

    const form = (mode) => ({
      mode,
      "line_items[0][price]": priceId,
      "line_items[0][quantity]": "1",
      success_url: successUrl,
      cancel_url: cancelUrl,
      billing_address_collection: "auto",
      allow_promotion_codes: "true"
    });

    let chosenMode = preferredMode;
    let session = null;
    let retried = false;

    try {
      session = await stripeRequest({
        method: "POST",
        path: "/v1/checkout/sessions",
        secretKey,
        form: form(chosenMode)
      });
    } catch (err) {
      const fallbackMode = preferredMode === "payment" ? "subscription" : "payment";
      if (looksLikeModeMismatch(err.message)) {
        retried = true;
        chosenMode = fallbackMode;
        session = await stripeRequest({
          method: "POST",
          path: "/v1/checkout/sessions",
          secretKey,
          form: form(chosenMode)
        });
      } else {
        throw err;
      }
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ url: session.url, mode: chosenMode, retried }));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({
      error: "Creation checkout impossible",
      details: (err && err.message) || "unknown",
      type: (err && err.type) || "unknown",
      code: (err && err.code) || "unknown"
    }));
  }
};
