module.exports = async function handler(req, res) {
  const hasStripe = !!process.env.STRIPE_SECRET_KEY;
  const hasPrice = !!process.env.STRIPE_PRICE_ID;
  const hasRedisUrl = !!(process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL);
  const hasRedisToken = !!(process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      ok: hasStripe && hasPrice && hasRedisUrl && hasRedisToken,
      stripe_secret: hasStripe,
      stripe_price: hasPrice,
      redis_url: hasRedisUrl,
      redis_token: hasRedisToken
    })
  );
};
