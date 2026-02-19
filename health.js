async function stripeCheck(secretKey, priceId) {
  if (!secretKey || !priceId) {
    return { stripe_api_ok: false, stripe_price_exists: false, stripe_error: "missing_key_or_price" };
  }

  try {
    const meResp = await fetch("https://api.stripe.com/v1/account", {
      method: "GET",
      headers: { Authorization: `Bearer ${secretKey}` }
    });
    const meRaw = await meResp.text();
    let me = {};
    try { me = meRaw ? JSON.parse(meRaw) : {}; } catch (e) {}
    if (!meResp.ok) {
      const msg = (me && me.error && me.error.message) || `stripe_account_http_${meResp.status}`;
      return { stripe_api_ok: false, stripe_price_exists: false, stripe_error: msg };
    }

    const priceResp = await fetch(`https://api.stripe.com/v1/prices/${encodeURIComponent(priceId)}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${secretKey}` }
    });
    const priceRaw = await priceResp.text();
    let price = {};
    try { price = priceRaw ? JSON.parse(priceRaw) : {}; } catch (e) {}
    if (!priceResp.ok) {
      const msg = (price && price.error && price.error.message) || `stripe_price_http_${priceResp.status}`;
      return { stripe_api_ok: true, stripe_price_exists: false, stripe_error: msg };
    }

    return {
      stripe_api_ok: true,
      stripe_price_exists: true,
      stripe_price_active: !!price.active,
      stripe_price_type: price && price.type ? price.type : "unknown",
      stripe_price_recurring: !!(price && price.recurring)
    };
  } catch (e) {
    return {
      stripe_api_ok: false,
      stripe_price_exists: false,
      stripe_error: (e && e.message) || "stripe_check_failed"
    };
  }
}

module.exports = async function handler(req, res) {
  const stripeKey = process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET || "";
  const priceId = process.env.STRIPE_PRICE_ID || process.env.IDENTIFIANT_PRIX_BANDE || "";
  const hasStripe = !!stripeKey;
  const hasPrice = !!priceId;
  const hasRedisUrl = !!(process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL);
  const hasRedisToken = !!(process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN);
  const hasAppBase = !!process.env.APP_BASE_URL;
  const stripe = await stripeCheck(stripeKey, priceId);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      ok: hasStripe && hasPrice && hasRedisUrl && hasRedisToken,
      stripe_secret: hasStripe,
      stripe_secret_format: /^sk_(test|live)_/.test(String(stripeKey)),
      stripe_price: hasPrice,
      stripe_price_format: /^price_/.test(String(priceId)),
      redis_url: hasRedisUrl,
      redis_token: hasRedisToken,
      app_base_url: hasAppBase,
      ...stripe
    })
  );
};
