function firstNonEmpty(values) {
  for (const v of values) {
    if (v != null && String(v).trim()) return String(v).trim();
  }
  return "";
}

function getRedisConfig() {
  const url = firstNonEmpty([process.env.UPSTASH_REDIS_REST_URL, process.env.KV_REST_API_URL]).replace(/\/+$/, "");
  const token = firstNonEmpty([process.env.UPSTASH_REDIS_REST_TOKEN, process.env.KV_REST_API_TOKEN]);
  if (!url || !token) return null;
  return { url, token };
}

async function redisGet(redis, key) {
  const resp = await fetch(`${redis.url}/get/${encodeURIComponent(key)}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${redis.token}` }
  });
  const data = await resp.json();
  const raw = data ? data.result : null;
  if (raw == null) return null;
  if (typeof raw !== "string") return raw;
  try {
    return JSON.parse(raw);
  } catch (e) {
    return raw;
  }
}

async function redisSet(redis, key, value) {
  const raw = typeof value === "string" ? value : JSON.stringify(value);
  const resp = await fetch(`${redis.url}/set/${encodeURIComponent(key)}/${encodeURIComponent(raw)}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${redis.token}` }
  });
  if (!resp.ok) throw new Error(`Redis set failed: ${resp.status}`);
}

function randomCode() {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let s = "BS-";
  for (let i = 0; i < 10; i++) {
    s += alphabet[Math.floor(Math.random() * alphabet.length)];
    if (i === 4) s += "-";
  }
  return s;
}

async function stripeGetSession(secretKey, sessionId) {
  const resp = await fetch(`https://api.stripe.com/v1/checkout/sessions/${encodeURIComponent(sessionId)}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${secretKey}` }
  });
  const data = await resp.json();
  if (!resp.ok) {
    const msg = data && data.error && data.error.message ? data.error.message : `Stripe HTTP ${resp.status}`;
    const err = new Error(msg);
    err.type = data && data.error && data.error.type ? data.error.type : "stripe_error";
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
  if (!secretKey) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Stripe non configure" }));
    return;
  }

  const redis = getRedisConfig();
  if (!redis) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Redis non configure" }));
    return;
  }

  let body = req.body || {};
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch (e) {
      body = {};
    }
  }

  const sessionId = body.session_id;
  if (!sessionId) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "session_id manquant" }));
    return;
  }

  try {
    const session = await stripeGetSession(secretKey, sessionId);
    const isPaid = session && (session.payment_status === "paid" || session.status === "complete");
    if (!isPaid) {
      res.statusCode = 402;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ error: "Paiement non confirme" }));
      return;
    }

    const existing = await redisGet(redis, `session:${sessionId}`);
    if (existing) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ code: existing, existing: true }));
      return;
    }

    let code = randomCode();
    for (let i = 0; i < 6; i++) {
      const exists = await redisGet(redis, `code:${code}`);
      if (!exists) break;
      code = randomCode();
    }

    const payload = {
      code,
      session_id: sessionId,
      email: session && session.customer_details && session.customer_details.email ? session.customer_details.email : "",
      created_at: new Date().toISOString()
    };

    await redisSet(redis, `code:${code}`, payload);
    await redisSet(redis, `session:${sessionId}`, code);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ code, existing: false }));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Generation code impossible", details: (err && err.message) || "unknown" }));
  }
};
