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

function toPositiveInt(value, fallback) {
  var n = Number.parseInt(String(value == null ? "" : value), 10);
  return Number.isFinite(n) && n > 0 ? n : fallback;
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

async function redisSetNxEx(redis, key, value, ttlSeconds) {
  var raw = typeof value === "string" ? value : JSON.stringify(value);
  return redisCommand(redis, ["set", key, raw, "EX", String(ttlSeconds), "NX"], "POST");
}

async function redisSetEx(redis, key, value, ttlSeconds) {
  var raw = typeof value === "string" ? value : JSON.stringify(value);
  return redisCommand(redis, ["set", key, raw, "EX", String(ttlSeconds)], "POST");
}

async function redisTtl(redis, key) {
  var ttl = await redisCommand(redis, ["ttl", key], "GET");
  var n = Number(ttl);
  return Number.isFinite(n) ? n : -1;
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
  const clientId = String(body.client_id || "").trim();
  const ttlSeconds = toPositiveInt(process.env.ACCESS_SESSION_TTL_SECONDS, 7200);
  if (!code) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ valid: false, error: "Code manquant" }));
    return;
  }

  try {
    const data = await redisGet(redis, "code:" + code);
    if (!data) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ valid: false, reason: "invalid_code" }));
      return;
    }

    if (!clientId) {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ valid: false, error: "client_id manquant" }));
      return;
    }

    var lockKey = "active_session:" + code;
    var now = new Date().toISOString();
    var existingRaw = await redisGet(redis, lockKey);
    var existing = safeParseJson(existingRaw);

    if (!existing || !existing.client_id) {
      var newLock = {
        code: code,
        client_id: clientId,
        acquired_at: now,
        last_seen_at: now
      };
      var setResult = await redisSetNxEx(redis, lockKey, newLock, ttlSeconds);
      if (setResult === "OK") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ valid: true, reason: "session_acquired", expires_in: ttlSeconds }));
        return;
      }
      existingRaw = await redisGet(redis, lockKey);
      existing = safeParseJson(existingRaw);
    }

    if (existing && existing.client_id === clientId) {
      var refreshed = {
        code: code,
        client_id: clientId,
        acquired_at: existing.acquired_at || now,
        last_seen_at: now
      };
      await redisSetEx(redis, lockKey, refreshed, ttlSeconds);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ valid: true, reason: "session_refreshed", expires_in: ttlSeconds }));
      return;
    }

    var remaining = await redisTtl(redis, lockKey);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        valid: false,
        reason: "session_active_elsewhere",
        retry_after_seconds: remaining > 0 ? remaining : ttlSeconds
      })
    );
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ valid: false, error: "Validation impossible", details: (err && err.message) || "unknown" }));
  }
};
