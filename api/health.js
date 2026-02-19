module.exports = async function handler(req, res) {
  const stripeKey = process.env.STRIPE_SECRET_KEY || process.env.STRIPE_SECRET || "";
  const priceId = process.env.STRIPE_PRICE_ID || process.env.IDENTIFIANT_PRIX_BANDE || "";
  const hasStripe = !!stripeKey;
  const hasPrice = !!priceId;
  const hasRedisUrl = !!(process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL);
  const hasRedisToken = !!(process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN);
  const hasAppBase = !!process.env.APP_BASE_URL;

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
      app_base_url: hasAppBase
    })
  );
};
