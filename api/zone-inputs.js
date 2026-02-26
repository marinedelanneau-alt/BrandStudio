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
    return null;
  }
}

function toSafePath(input) {
  var p = String(input || "").trim();
  if (!p) return "";
  if (p.length > 260) return "";
  return p;
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

async function redisSet(redis, key, value) {
  var raw = typeof value === "string" ? value : JSON.stringify(value);
  return redisCommand(redis, ["set", key, raw], "POST");
}

function cleanZoneData(raw) {
  if (!raw || typeof raw !== "object") return {};
  var out = {};
  var keys = Object.keys(raw);
  for (var i = 0; i < keys.length; i++) {
    var k = String(keys[i] || "");
    if (!k || k.length > 80) continue;
    var v = String(raw[k] == null ? "" : raw[k]);
    if (v.length > 6000) v = v.slice(0, 6000);
    out[k] = v;
    if (Object.keys(out).length >= 800) break;
  }
  return out;
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

  var action = String(body.action || "").trim().toLowerCase();
  var code = String(body.code || "").trim().toUpperCase();
  var path = toSafePath(body.path);
  if (!action || !code || !path) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: false, error: "action, code ou path manquant" }));
    return;
  }

  try {
    var codeExists = await redisGet(redis, "code:" + code);
    if (!codeExists) {
      res.statusCode = 403;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ ok: false, error: "Code invalide" }));
      return;
    }

    var key = "zone_inputs:" + code + ":" + path;

    if (action === "load") {
      var raw = await redisGet(redis, key);
      var parsed = safeParseJson(raw);
      var data = cleanZoneData(parsed);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ ok: true, data: data }));
      return;
    }

    if (action === "save") {
      var payload = {
        updated_at: new Date().toISOString(),
        data: cleanZoneData(body.data)
      };
      await redisSet(redis, key, payload);
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ ok: true }));
      return;
    }

    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: false, error: "action invalide" }));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: false, error: "Erreur zone-inputs", details: (err && err.message) || "unknown" }));
  }
};
