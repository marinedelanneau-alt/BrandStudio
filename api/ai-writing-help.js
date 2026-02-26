function firstNonEmpty(values) {
  for (var i = 0; i < values.length; i++) {
    var v = values[i];
    if (v != null && String(v).trim()) return String(v).trim();
  }
  return "";
}

function sanitizeText(input, maxLen) {
  var t = String(input || "").replace(/\s+/g, " ").trim();
  if (!t) return "";
  if (t.length <= maxLen) return t;
  return t.slice(0, maxLen);
}

function uniqueSuggestions(list) {
  var out = [];
  var seen = {};
  for (var i = 0; i < list.length; i++) {
    var t = sanitizeText(list[i], 280);
    if (!t) continue;
    var key = t.toLowerCase();
    if (seen[key]) continue;
    seen[key] = true;
    out.push(t);
    if (out.length >= 3) break;
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

  var apiKey = firstNonEmpty([process.env.OPENAI_API_KEY]);
  if (!apiKey) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: false, error: "OPENAI_API_KEY manquant" }));
    return;
  }

  var model = firstNonEmpty([process.env.OPENAI_WRITING_MODEL, "gpt-4o-mini"]);

  var body = req.body || {};
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch (e) {
      body = {};
    }
  }

  var prompt = sanitizeText(body.prompt, 320);
  var current = sanitizeText(body.current, 900);
  var page = sanitizeText(body.page, 120);
  var code = sanitizeText(body.code, 40);
  var context = Array.isArray(body.context) ? body.context : [];
  var cleanContext = [];
  for (var i = 0; i < context.length; i++) {
    var entry = sanitizeText(context[i], 220);
    if (entry) cleanContext.push(entry);
    if (cleanContext.length >= 8) break;
  }

  if (!prompt) {
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: false, error: "prompt manquant" }));
    return;
  }

  var systemMsg =
    "Tu es un coach de marque francophone. " +
    "Donne exactement 3 propositions courtes, concretes et actionnables, en francais. " +
    "Adapte le style au contexte client. Pas de markdown, pas de liste numerotee.";

  var userMsg =
    "Question du client: " + prompt + "\n" +
    "Reponse actuelle: " + (current || "(vide)") + "\n" +
    "Contexte de la page: " + (page || "(inconnu)") + "\n" +
    "Code espace: " + (code || "(inconnu)") + "\n" +
    "Elements de contexte: " + (cleanContext.length ? cleanContext.join(" | ") : "(aucun)") + "\n\n" +
    "Reponds uniquement en JSON strict avec ce schema: " +
    "{\"suggestions\":[\"...\",\"...\",\"...\"]}";

  try {
    var resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + apiKey
      },
      body: JSON.stringify({
        model: model,
        temperature: 0.7,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: systemMsg },
          { role: "user", content: userMsg }
        ]
      })
    });

    var raw = await resp.text();
    if (!resp.ok) {
      res.statusCode = 502;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ ok: false, error: "OpenAI error", details: raw || ("HTTP " + resp.status) }));
      return;
    }

    var data = {};
    try {
      data = JSON.parse(raw);
    } catch (e) {
      data = {};
    }

    var content =
      data &&
      data.choices &&
      data.choices[0] &&
      data.choices[0].message &&
      data.choices[0].message.content
        ? String(data.choices[0].message.content)
        : "";

    var parsed = {};
    try {
      parsed = JSON.parse(content);
    } catch (e) {
      parsed = {};
    }

    var suggestions = uniqueSuggestions(parsed && parsed.suggestions ? parsed.suggestions : []);
    if (!suggestions.length) {
      res.statusCode = 502;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ ok: false, error: "Aucune suggestion exploitable" }));
      return;
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: true, suggestions: suggestions }));
  } catch (err) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ ok: false, error: "Generation impossible", details: (err && err.message) || "unknown" }));
  }
};
