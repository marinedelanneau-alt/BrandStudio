function firstNonEmpty(values) {
  for (var i = 0; i < values.length; i++) {
    var v = values[i];
    if (v != null && String(v).trim()) return String(v).trim();
  }
  return "";
}

function getRedisConfig() {
  var url = firstNonEmpty([process.env.UPSTASH_REDIS_REST_URL, process.env.KV_REST_API_URL]).replace(/\/+$/, "");
  var token = firstNonEmpty([process.env.UPSTASH_REDIS_REST_TOKEN, process.env.KV_REST_API_TOKEN]);
  if (!url || !token) return null;
  return { url: url, token: token };
}

function safeParseJson(raw) {
  if (raw == null) return null;
  if (typeof raw !== "string") return raw;
  try {
    return JSON.parse(raw);
  } catch (e) {
    return raw;
  }
}

async function redisCommand(redis, args, method) {
  var path = args.map(function (part) {
    return encodeURIComponent(String(part));
  }).join("/");
  var resp = await fetch(redis.url + "/" + path, {
    method: method || "GET",
    headers: { Authorization: "Bearer " + redis.token }
  });
  if (!resp.ok) {
    var raw = await resp.text();
    throw new Error("Redis command failed (" + resp.status + "): " + (raw || "unknown"));
  }
  var data = await resp.json();
  return data ? data.result : null;
}

async function redisGet(redis, key) {
  return redisCommand(redis, ["get", key], "GET");
}

async function redisDel(redis, key) {
  return redisCommand(redis, ["del", key], "POST");
}

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: false, error: "Method not allowed" }));
    return;
  }

  var redis = getRedisConfig();
  if (!redis) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: false, error: "Redis non configure" }));
    return;
  }

  var body = req.body || {};
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch (e) {
      body = {};
    }
  }

  var code = String(body.code || "").trim().toUpperCase();
  var clientId = String(body.client_id || "").trim();
  if (!code || !clientId) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: false, error: "code ou client_id manquant" }));
    return;
  }

  try {
    var key = "active_session:" + code;
    var existingRaw = await redisGet(redis, key);
    var existing = safeParseJson(existingRaw);
    if (existing && existing.client_id === clientId) {
      await redisDel(redis, key);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ ok: true, released: true }));
      return;
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: true, released: false }));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: false, error: "release impossible", details: (err && err.message) || "unknown" }));
  }
};
