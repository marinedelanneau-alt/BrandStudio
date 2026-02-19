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
  if (!resp.ok) throw new Error(`Redis get failed: ${resp.status}`);
  const data = await resp.json();
  return data ? data.result : null;
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: "Method not allowed" }));
    return;
  }

  const redis = getRedisConfig();
  if (!redis) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ valid: false, error: "Redis non configure" }));
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

  const code = String(body.code || "").trim().toUpperCase();
  if (!code) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ valid: false, error: "Code manquant" }));
    return;
  }

  try {
    const data = await redisGet(redis, `code:${code}`);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ valid: !!data }));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ valid: false, error: "Validation impossible", details: (err && err.message) || "unknown" }));
  }
};
