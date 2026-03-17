(function () {
  var AUTH_KEY = "brandstudio_access_granted";
  var USER_CODE_KEY = "brandstudio_user_code_v1";
  var STATE_KEY = "brandstudio_mvp_state_v1";
  var ROOT = document.querySelector("[data-brand-app]");
  var ROUTE = document.body.getAttribute("data-route") || "dashboard";
  var INACTIVITY_MS = 180000;
  var DELETE_LIMIT = 3;
  var TOAST_ID = 0;

  if (!ROOT) return;

  function hasAccess() {
    try {
      return localStorage.getItem(AUTH_KEY) === "1" && !!localStorage.getItem(USER_CODE_KEY);
    } catch (err) {
      return false;
    }
  }

  if (!hasAccess()) {
    window.location.replace("/index.html");
    return;
  }

  var routes = [
    { id: "dashboard", path: "/parcours/", title: "Parcours", kind: "dashboard", duration: 5, deps: [] },
    { id: "diagnostic", path: "/parcours/diagnostic/", title: "Diagnostic", kind: "module", duration: 10, deps: [] },
    { id: "cible", path: "/parcours/cible/", title: "Cible ideale", kind: "module", duration: 10, deps: [] },
    { id: "probleme", path: "/parcours/probleme/", title: "Probleme client", kind: "module", duration: 10, deps: ["cible"] },
    { id: "promesse", path: "/parcours/promesse/", title: "Promesse", kind: "module", duration: 15, deps: ["cible", "probleme"] },
    { id: "offre", path: "/parcours/offre/", title: "Offre principale", kind: "module", duration: 10, deps: ["promesse"] },
    { id: "livrables", path: "/parcours/livrables/", title: "Livrables", kind: "module", duration: 10, deps: ["promesse", "offre"] },
    { id: "couleurs", path: "/parcours/couleurs/", title: "Couleurs", kind: "module", duration: 10, deps: ["promesse"] },
    { id: "typographie", path: "/parcours/typographie/", title: "Typographie", kind: "module", duration: 5, deps: ["couleurs"] },
    { id: "brand-card", path: "/parcours/brand-card/", title: "Brand Card", kind: "brand-card", duration: 5, deps: ["promesse", "livrables"] },
    { id: "merci", path: "/merci/", title: "Merci", kind: "merci", duration: 3, deps: ["promesse"] }
  ];

  var paletteUniverses = [
    { id: "trust", title: "Confiance et expertise", hint: "Bleus, gris chauds, repere structure.", palettes: [["#534AB7", "#C7C3EF", "#F8F7F4", "#2C2C2A"], ["#3A5BA9", "#AFC3E7", "#F3F1EB", "#38404A"], ["#475B7A", "#C6D0DD", "#FBF8F1", "#2C2C2A"]] },
    { id: "energy", title: "Creativite et energie", hint: "Coraux, oranges, jaunes, elan visible.", palettes: [["#E06F43", "#F2C46D", "#F9F1E4", "#3F3F49"], ["#D95A4E", "#F7B267", "#FFF4E8", "#343748"], ["#F08F42", "#F4D06F", "#FFF8EC", "#2C2C2A"]] },
    { id: "warmth", title: "Proximite et chaleur", hint: "Terres, ocres, verts doux, relation humaine.", palettes: [["#B86B35", "#DDB892", "#F8F1E7", "#3F3F49"], ["#9F6F52", "#D8B08C", "#FAF4EC", "#2C2C2A"], ["#C27C4A", "#C8D5B9", "#FBF7F0", "#3D3A36"]] },
    { id: "minimal", title: "Clarte et minimalisme", hint: "Blancs casses, gris, accents sobres.", palettes: [["#3F3F49", "#C9CDD6", "#F8F7F4", "#888780"], ["#534AB7", "#D9D7EF", "#FCFBF8", "#2C2C2A"], ["#575757", "#DAD6D0", "#FFFDF9", "#2C2C2A"]] },
    { id: "nature", title: "Nature et authenticite", hint: "Verts, bruns, beiges, ancrage doux.", palettes: [["#6E7C4A", "#C8D5B9", "#F7F3EC", "#3D3A36"], ["#7C8B5D", "#E0D8C5", "#FBF7F0", "#3F3F49"], ["#556B5D", "#C9CBA3", "#F8F7F4", "#2C2C2A"]] },
    { id: "premium", title: "Premium et distinction", hint: "Noirs, ors, bordeaux, impact maitrise.", palettes: [["#2C2C2A", "#8C6A43", "#F4E9D8", "#F8F7F4"], ["#5A2234", "#D1A054", "#FAF5ED", "#2C2C2A"], ["#34252F", "#C7A86A", "#F8F5EE", "#44404A"]] }
  ];

  var fontChoices = [
    { id: "inter", name: "Inter", mood: "Moderne et epure", href: "https://fonts.google.com/specimen/Inter" },
    { id: "lora", name: "Lora", mood: "Serieux et etabli", href: "https://fonts.google.com/specimen/Lora" },
    { id: "nunito", name: "Nunito", mood: "Accessible et humain", href: "https://fonts.google.com/specimen/Nunito" },
    { id: "playfair", name: "Playfair Display", mood: "Elegant et premium", href: "https://fonts.google.com/specimen/Playfair+Display" },
    { id: "ibm-plex", name: "IBM Plex Sans", mood: "Technique et precis", href: "https://fonts.google.com/specimen/IBM+Plex+Sans" },
    { id: "dm-sans", name: "DM Sans", mood: "Doux et creatif", href: "https://fonts.google.com/specimen/DM+Sans" }
  ];

  var diagnosticQuestions = [
    { key: "diagnostic_clarity_offer", label: "Quand tu presentes ton activite, c'est clair en une phrase.", dimension: "clarity" },
    { key: "diagnostic_clarity_target", label: "Tu sais exactement a qui tu t'adresses en priorite.", dimension: "clarity" },
    { key: "diagnostic_consistency_supports", label: "Tes supports donnent la meme impression d'une page a l'autre.", dimension: "consistency" },
    { key: "diagnostic_difference", label: "Tu sais ce qui te distingue des autres options de ta cible.", dimension: "difference" },
    { key: "diagnostic_message", label: "Ton site, ton LinkedIn et tes offres racontent la meme histoire.", dimension: "consistency" }
  ];

  var strategicCopy = {
    cible: "Definir sa cible, c'est souvent l'etape qui fait le plus peur. La bonne nouvelle : plus c'est precis, plus ca attire.",
    probleme: "Le probleme client devient plus simple quand tu quittes le jargon et que tu reprends les mots reels de ta cible.",
    promesse: "Cette etape est souvent la plus difficile du parcours - et c'est normal. Ce n'est pas un signe que tu ne connais pas ton activite."
  };

  var state = readState();
  var activeRoute = routeById(ROUTE);

  guardRoute(activeRoute);
  activeRoute = routeById(ROUTE);
  state.currentRoute = activeRoute.id;
  state.updatedAt = Date.now();
  persistState();
  render();

  function readState() {
    try {
      var raw = JSON.parse(localStorage.getItem(STATE_KEY) || "null");
      if (!raw || typeof raw !== "object") throw new Error("empty");
      return {
        currentRoute: raw.currentRoute || "dashboard",
        startedAt: raw.startedAt || Date.now(),
        updatedAt: raw.updatedAt || Date.now(),
        answers: raw.answers && typeof raw.answers === "object" ? raw.answers : {},
        ui: raw.ui && typeof raw.ui === "object" ? raw.ui : { deletions: {}, completionShown: {} }
      };
    } catch (err) {
      return { currentRoute: "dashboard", startedAt: Date.now(), updatedAt: Date.now(), answers: {}, ui: { deletions: {}, completionShown: {} } };
    }
  }

  function persistState() {
    try {
      localStorage.setItem(STATE_KEY, JSON.stringify(state));
    } catch (err) {
      showToast("Le stockage local commence a saturer. Copie tes livrables par securite.");
    }
  }

  function routeById(id) {
    return routes.find(function (route) { return route.id === id; }) || routes[0];
  }

  function routeIndex(id) {
    return routes.findIndex(function (route) { return route.id === id; });
  }

  function textValue(key) {
    var value = state.answers[key];
    return typeof value === "string" ? value.trim() : "";
  }

  function writeAnswer(key, value) {
    state.answers[key] = value;
    state.updatedAt = Date.now();
    persistState();
  }

  function genericTarget(value) {
    return /(tout le monde|les entreprises|les independants|les entrepreneurs|les pme)/i.test(value || "");
  }

  function genericProblem(value) {
    return /(qualite|service personnalise|positionnement strategique)/i.test(value || "");
  }

  function wordCount(value) {
    return String(value || "").trim().split(/\s+/).filter(Boolean).length;
  }

  function sharedWord(a, b) {
    var wordsA = String(a || "").toLowerCase().split(/\W+/).filter(function (word) { return word.length > 4; });
    var wordsB = String(b || "").toLowerCase().split(/\W+/).filter(function (word) { return word.length > 4; });
    return wordsA.some(function (word) { return wordsB.indexOf(word) >= 0; });
  }

  function isRouteComplete(id) {
    if (id === "diagnostic") return diagnosticQuestions.every(function (item) { return !!state.answers[item.key]; });
    if (id === "cible") return textValue("target_primary").length > 14 && textValue("target_problem_now").length > 9;
    if (id === "probleme") return textValue("problem_primary").length > 9 && textValue("problem_client_words").length > 9;
    if (id === "promesse") return textValue("promise_final").length > 9;
    if (id === "offre") return textValue("offer_description").length > 14;
    if (id === "livrables") return textValue("deliverable_positioning").length > 14 && textValue("deliverable_bio").length > 20;
    if (id === "couleurs") return !!textValue("palette_choice") || hasCustomPalette();
    if (id === "typographie") return !!textValue("typography_choice");
    if (id === "brand-card") return isRouteComplete("promesse") && isRouteComplete("livrables");
    return false;
  }

  function hasCustomPalette() {
    return ["custom_hex_1", "custom_hex_2", "custom_hex_3"].every(function (key) {
      return /^#?[0-9a-fA-F]{6}$/.test(textValue(key));
    });
  }

  function progressPercent() {
    var ids = ["diagnostic", "cible", "probleme", "promesse", "offre", "livrables", "couleurs", "typographie", "brand-card"];
    var done = ids.filter(function (id) { return isRouteComplete(id); }).length;
    return Math.round((done / ids.length) * 100);
  }

  function completedModules() {
    return ["diagnostic", "cible", "probleme", "promesse", "offre", "livrables", "couleurs", "typographie", "brand-card"].filter(function (id) {
      return isRouteComplete(id);
    }).length;
  }

  function remainingMinutes() {
    return routes.filter(function (route) {
      return route.kind !== "dashboard" && route.kind !== "merci" && !isRouteComplete(route.id);
    }).reduce(function (sum, route) {
      return sum + route.duration;
    }, 0) || 5;
  }

  function resumeRoute() {
    return routes.filter(function (route) {
      return route.kind !== "dashboard" && route.kind !== "merci";
    }).find(function (route) {
      return !isRouteComplete(route.id);
    }) || routeById("brand-card");
  }

  function promiseAutoDraft() {
    var target = textValue("target_primary");
    var problem = textValue("problem_client_words");
    var diff = textValue("promise_differentiator");
    if (!target || !problem) return "";
    return "J'aide " + target + " a " + problem + (diff ? " grace a " + diff : " grace a une approche claire et applicable");
  }

  function promiseVariants() {
    var target = textValue("target_primary") || "les independants qui avancent sans repere clair";
    var problem = textValue("problem_client_words") || "mettre des mots simples sur ce qu'ils font";
    return [
      "J'aide " + target + " a " + problem + " avec une structure claire et directement exploitable.",
      "Je t'aide a clarifier ce que tu fais, pour qui et pourquoi ca compte vraiment.",
      "J'aide " + target + " a transformer un message flou en promesse lisible, credible et utilisable des demain."
    ];
  }

  function buildPositioning() {
    var title = textValue("business_title") || "consultante";
    var target = textValue("target_primary") || "ta cible ideale";
    var problem = textValue("problem_client_words") || "ce qui bloque vraiment aujourd'hui";
    var diff = textValue("promise_differentiator") || "une approche claire et structurante";
    return "Je suis " + title + " qui aide " + target + " a " + problem + " grace a " + diff + ".";
  }

  function buildBio() {
    var target = textValue("target_primary") || "les entrepreneurs qui veulent clarifier leur marque";
    var problem = textValue("problem_client_words") || "ne savent plus quoi dire sur eux";
    var promise = textValue("promise_final") || "une promesse plus claire";
    var offer = textValue("offer_description") || "un cadre concret pour transformer une idee floue en message utilisable";
    return "Tu aides " + target + " qui " + problem + ". Ton travail rend leur positionnement plus clair, plus credible et plus simple a utiliser partout. Tu proposes " + offer + ". Resultat : " + promise + ".";
  }

  function buildOfferSummary() {
    var target = textValue("target_primary") || "ta cible ideale";
    var promise = textValue("promise_final") || "ta promesse de marque";
    var offer = textValue("offer_description") || "une offre principale qui transforme ta promesse en action concrete";
    return "Pour " + target + ", cette offre rend concretement possible " + promise + ". Elle prend la forme de " + offer + ".";
  }

  function ensureGeneratedLivrables() {
    if (!textValue("promise_final")) return;
    if (!textValue("deliverable_positioning")) writeAnswer("deliverable_positioning", buildPositioning());
    if (!textValue("deliverable_bio")) writeAnswer("deliverable_bio", buildBio());
    if (!textValue("deliverable_offer")) writeAnswer("deliverable_offer", buildOfferSummary());
  }

  function levelFromScore(score, max) {
    if (score <= Math.ceil(max * 0.4)) return "faible";
    if (score <= Math.ceil(max * 0.75)) return "moyen";
    return "fort";
  }

  function diagnosticResults() {
    var score = { clarity: 0, consistency: 0, difference: 0 };
    diagnosticQuestions.forEach(function (question) {
      score[question.dimension] += Number(state.answers[question.key] || 0);
    });
    var levels = {
      clarity: levelFromScore(score.clarity, 8),
      consistency: levelFromScore(score.consistency, 8),
      difference: levelFromScore(score.difference, 4)
    };
    var weakest = Object.keys(levels).sort(function (a, b) {
      return ({ faible: 0, moyen: 1, fort: 2 }[levels[a]]) - ({ faible: 0, moyen: 1, fort: 2 }[levels[b]]);
    })[0];
    return {
      levels: levels,
      angle: {
        clarity: "Ton activite est surement solide, mais le message manque encore d'un fil clair.",
        consistency: "Tes supports ne racontent pas encore exactement la meme histoire.",
        difference: "Ce que tu apportes est la, mais ta difference ne ressort pas encore assez vite."
      }[weakest],
      recommendation: weakest === "clarity" ? routeById("cible") : (weakest === "consistency" ? routeById("offre") : routeById("promesse"))
    };
  }

  function getPaletteColors() {
    if (hasCustomPalette()) {
      return ["custom_hex_1", "custom_hex_2", "custom_hex_3", "custom_hex_4"].map(function (key) {
        var value = textValue(key) || "#F8F7F4";
        return value.charAt(0) === "#" ? value : "#" + value;
      });
    }
    var selectedUniverse = textValue("palette_universe") || paletteUniverses[0].id;
    var universe = paletteUniverses.find(function (item) { return item.id === selectedUniverse; }) || paletteUniverses[0];
    var choice = textValue("palette_choice");
    var index = Number((choice.split("-")[1]) || 0);
    return universe.palettes[index] || universe.palettes[0];
  }

  function guardRoute(route) {
    if (route.id === "dashboard" || route.id === "merci" || route.id === "diagnostic") return;
    var missing = (route.deps || []).find(function (dep) { return !isRouteComplete(dep); });
    if (!missing) return;
    sessionStorage.setItem("brandstudio_guard_message", "Pour construire cette etape, commence par " + routeById(missing).title.toLowerCase() + ".");
    window.location.replace(routeById(missing).path);
  }

  function consumeGuardMessage() {
    var message = sessionStorage.getItem("brandstudio_guard_message") || "";
    if (message) sessionStorage.removeItem("brandstudio_guard_message");
    return message;
  }

  function showToast(message) {
    var current = document.querySelector(".bs-toast");
    if (current) current.remove();
    var node = document.createElement("div");
    node.className = "bs-toast";
    node.textContent = message;
    document.body.appendChild(node);
    window.setTimeout(function () { node.remove(); }, 4200);
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatDate(date) {
    return date.toLocaleDateString("fr-FR", { day: "2-digit", month: "long", year: "numeric" });
  }

  function miniStat(label, value) {
    return '<div class="bs-mini-stat"><span class="bs-status">' + escapeHtml(label) + '</span><strong>' + escapeHtml(String(value)) + "</strong></div>";
  }

  function renderTextField(key, label, placeholder) {
    var value = state.answers[key];
    return '<div class="bs-field"><label for="' + key + '">' + escapeHtml(label) + '</label><input type="text" id="' + key + '" name="' + key + '" placeholder="' + escapeHtml(placeholder || "") + '" value="' + escapeHtml(typeof value === "string" ? value : "") + '"></div>';
  }

  function renderTextarea(key, label, placeholder) {
    var value = state.answers[key];
    var note = "";
    if (["target_primary", "problem_primary", "problem_client_words", "promise_final", "offer_description"].indexOf(key) >= 0 && value && wordCount(value) < 10) {
      note = '<div class="bs-inline-note">Tu peux continuer, mais une phrase un peu plus developpee te donnera un meilleur livrable derriere.</div>';
    }
    return '<div class="bs-field"><label for="' + key + '">' + escapeHtml(label) + '</label><textarea id="' + key + '" name="' + key + '" placeholder="' + escapeHtml(placeholder || "") + '">' + escapeHtml(typeof value === "string" ? value : "") + "</textarea>" + note + "</div>";
  }

  function renderOutputCard(title, key, fallback) {
    var value = textValue(key) || fallback || "";
    return [
      '<article class="bs-output-card">',
      '<h3 class="bs-card-title" style="font-size:1.24rem;">' + escapeHtml(title) + "</h3>",
      '<p class="bs-output-copy" style="margin-top:10px;">Est-ce que ta cible se reconnaitrait dans cette formulation ? Est-ce que quelqu\'un qui ne te connait pas comprend tout de suite ?</p>',
      '<div class="bs-field" style="margin-top:14px; padding:0; border:0; background:transparent; box-shadow:none;">',
      '<textarea name="' + key + '">' + escapeHtml(value) + "</textarea>",
      "</div>",
      '<div class="bs-actions" style="margin-top:12px;"><button class="bs-output-copy" data-copy-field="' + key + '">Copier</button></div>',
      "</article>"
    ].join("");
  }

  function renderNavigation(previousId, nextId) {
    return '<div class="bs-actions">' +
      (previousId ? '<a class="bs-link-btn bs-link-btn-secondary" href="' + routeById(previousId).path + '">Retour</a>' : "") +
      (nextId ? '<a class="bs-link-btn bs-link-btn-primary" href="' + routeById(nextId).path + '">Continuer</a>' : "") +
      "</div>";
  }

  function renderPalettePreview(colors) {
    return '<div class="bs-preview-surface"><div class="bs-label">Apercu</div><div class="bs-swatches">' + colors.map(function (color) { return '<span class="bs-swatch" style="background:' + color + '"></span>'; }).join("") + '</div><div class="bs-card" style="padding:18px; border-radius:20px; background:' + colors[2] + ';"><h3 style="color:' + colors[0] + '; margin:0 0 8px;">Exemple de Brand Card</h3><p style="margin:0; color:' + colors[3] + ';">Une application sobre du systeme choisi avant validation finale.</p></div></div>';
  }

  function renderPaletteBrandCard(colors) {
    return '<div class="bs-swatches">' + colors.map(function (color) { return '<span class="bs-swatch" style="background:' + color + '"></span>'; }).join("") + '</div><div class="bs-muted">' + colors.join(" · ") + "</div>";
  }

  function renderBrandSection(title, body) {
    return '<section class="bs-brand-section"><h4>' + escapeHtml(title) + "</h4><div>" + body + "</div></section>";
  }

  function renderVoiceSection() {
    var says = ["Clair, concret, utilisable des demain", "On va rendre tout ca plus lisible", "Tu repars avec quelque chose de vraiment utilisable"];
    var avoids = ["Optimise tes synergies de marque", "Un accompagnement holistique premium", "Une transformation paradigmique"];
    return '<div class="bs-voice-grid"><div><h4 style="margin:0 0 8px; color:#4d6a34;">On dit</h4><p>' + escapeHtml(says.join("\n")) + '</p></div><div><h4 style="margin:0 0 8px; color:#9a3030;">On evite</h4><p>' + escapeHtml(avoids.join("\n")) + "</p></div></div>";
  }

  function renderTypographyNote() {
    var font = fontChoices.find(function (item) { return item.id === textValue("typography_choice"); });
    if (!font) return '<div class="bs-note is-soft" style="margin-top:18px;">Selectionne une typographie pour voir le repere de coherence.</div>';
    var universe = textValue("palette_universe");
    var mismatch = (font.id === "playfair" && universe === "energy") || (font.id === "ibm-plex" && universe === "warmth");
    return '<div class="bs-note ' + (mismatch ? 'is-warm' : 'is-soft') + '" style="margin-top:18px;">' + escapeHtml(mismatch ? "Ta typographie et ta palette envoient des signaux un peu differents. Si ce n'est pas intentionnel, essaie une option plus alignee." : "La combinaison actuelle raconte deja quelque chose de coherent : garde-la si elle te ressemble.") + "</div>";
  }

  function renderSidebar() {
    var next = resumeRoute();
    return [
      '<aside class="bs-sidebar">',
      '<section class="bs-panel bs-sidebar-brand"><div class="bs-panel-body"><img src="/LAB_(17).png" alt="Brand Studio"><div class="bs-label">Brand Studio</div><h1>Ton studio de marque</h1><p class="bs-sidebar-copy">Un cadre plus concret, plus progressif et moins intimidant que le statu quo.</p></div></section>',
      '<section class="bs-panel"><div class="bs-panel-body"><div class="bs-progress-row"><span class="bs-label">Progression</span><strong class="bs-progress-value">' + progressPercent() + '%</strong></div><div class="bs-progress-track"><div class="bs-progress-bar" style="width:' + progressPercent() + '%"></div></div><p class="bs-panel-copy">' + completedModules() + '/9 etapes avec un livrable qui avance en continu.</p></div></section>',
      '<section class="bs-panel"><div class="bs-panel-body"><div class="bs-label">Reprendre</div><h3 class="bs-panel-title" style="margin-top:12px;">' + escapeHtml(next.title) + '</h3><p class="bs-panel-copy">Le prochain bloc utile pour ne jamais repartir les mains vides.</p><div class="bs-actions" style="margin-top:14px;"><a class="bs-link-btn bs-link-btn-primary" href="' + next.path + '">Reprendre</a></div></div></section>',
      '<nav class="bs-panel"><div class="bs-panel-body"><div class="bs-label">Parcours</div><div class="bs-nav-list" style="margin-top:16px;">',
      routes.filter(function (route) { return route.id !== "merci"; }).map(function (route, index) {
        var status = isRouteComplete(route.id) ? "Termine" : (route.id === activeRoute.id ? "En cours" : "A faire");
        var statusClass = isRouteComplete(route.id) ? "is-done" : (route.id === activeRoute.id ? "is-current" : "");
        return '<button class="bs-nav-item ' + (route.id === activeRoute.id ? 'is-active' : '') + '" data-nav="' + route.id + '"><div class="bs-nav-top"><span class="bs-index">' + (index + 1) + '</span><span class="bs-status ' + statusClass + '">' + status + '</span></div><div class="bs-card-title" style="font-size:1.06rem;">' + escapeHtml(route.title) + "</div></button>";
      }).join(""),
      '</div></div></nav></aside>'
    ].join("");
  }

  function renderTopbar() {
    return '<div class="bs-topbar"><div><div class="bs-breadcrumbs"><span>Brand Studio</span><span>/</span><span>Parcours</span><span>/</span><strong>' + escapeHtml(activeRoute.title) + '</strong></div><div class="bs-chip-row" style="margin-top:10px;"><span class="bs-chip">' + remainingMinutes() + ' min restants</span><span class="bs-chip">' + (9 - completedModules()) + ' etapes a finir</span></div></div><div class="bs-actions"><button class="bs-btn bs-btn-secondary" data-copy-promise="1">Copier la promesse</button></div></div>';
  }

  function renderHero() {
    var copyMap = {
      dashboard: "Un parcours guide, concret et reutilisable pour transformer tes idees en vrais livrables de marque.",
      diagnostic: "5 questions simples pour identifier l'angle mort principal sans te noyer dans un audit interminable.",
      cible: "Plus c'est precis, plus ca attire. Ici, on sort du flou sans tomber dans la caricature.",
      probleme: "Le probleme doit etre dit comme ta cible le dirait elle-meme, pas comme une presentation de service.",
      promesse: "La promesse est le coeur du parcours : elle doit etre claire, memorisable et deja utilisable des cette etape.",
      offre: "Ton offre doit delivrer concretement ce que ta promesse annonce. On aligne enfin les deux.",
      livrables: "Ici, tu repars avec des formulations reutilisables des demain sur LinkedIn, ton site ou un devis.",
      couleurs: "On choisit une direction de couleur par intention, pas par jargon. Tu vois tout de suite le rendu.",
      typographie: "La typographie doit confirmer ce que ta palette raconte, pas envoyer un signal oppose.",
      "brand-card": "Ta Brand Card assemble tout ce qui est deja bon, clair et partageable dans une page unique.",
      merci: "Ton travail de marque a maintenant une forme claire, partageable et utilisable."
    };
    return '<section class="bs-card bs-main-hero"><div><div class="bs-label">' + escapeHtml(activeRoute.title) + '</div><h2>' + escapeHtml(activeRoute.title) + '</h2><p class="bs-main-copy">' + escapeHtml(copyMap[activeRoute.id] || "") + '</p></div><div><img src="/elements_nouvelle_comm_main.png" alt="Brand Studio"></div></section>';
  }

  function renderDashboard() {
    var next = resumeRoute();
    return '<section class="bs-card"><div class="bs-card-body"><div class="bs-label">Reprendre le parcours</div><h3 class="bs-card-title" style="margin-top:12px;">' + escapeHtml(next.title) + '</h3><p class="bs-card-copy">Module actuel, etape, temps restant : tout est deja resume pour reprendre sans friction.</p><div class="bs-resume-stats">' + miniStat("Module actuel", next.title) + miniStat("Etape", routeIndex(next.id) + " / 9") + miniStat("Temps restant", "Env. " + remainingMinutes() + " min") + '</div><div class="bs-actions" style="margin-top:16px;"><a class="bs-link-btn bs-link-btn-primary" href="' + next.path + '">Continuer -></a></div></div></section>' +
      '<section class="bs-card"><div class="bs-card-body"><div class="bs-label">Modules</div><h3 class="bs-card-title" style="margin-top:12px;">Le parcours complet</h3><p class="bs-card-copy">Un ordre clair, des livrables visibles et une progression qui evite l\'effet mur de texte.</p><div class="bs-card-grid is-two" style="margin-top:18px;">' +
      routes.filter(function (route) { return route.kind !== "dashboard" && route.kind !== "merci"; }).map(function (route, index) {
        var status = isRouteComplete(route.id) ? "Termine" : (route.id === next.id ? "En cours" : "A ouvrir");
        var statusClass = isRouteComplete(route.id) ? "is-done" : (route.id === next.id ? "is-current" : "");
        return '<article class="bs-module-card"><div class="bs-card-body"><div class="bs-nav-top"><span class="bs-index">' + (index + 1) + '</span><span class="bs-status ' + statusClass + '">' + status + '</span></div><h3 style="font-size:1.26rem; line-height:1.05; margin-top:8px;">' + escapeHtml(route.title) + '</h3><p class="bs-card-copy" style="margin-top:10px;">' + route.duration + ' minutes estimees pour produire un resultat concret.</p><div class="bs-actions" style="margin-top:14px;"><a class="bs-link-btn bs-link-btn-secondary" href="' + route.path + '">Ouvrir</a></div></div></article>';
      }).join("") + '</div></div></section>' +
      '<section class="bs-card"><div class="bs-card-body"><div class="bs-label">Contenu pedagogique</div><h3 class="bs-card-title" style="margin-top:12px;">Script video introductive</h3><div class="bs-card-grid is-two" style="margin-top:18px;"><div class="bs-card" style="padding:0;"><img src="/elements_nouvelle_comm_main.png" alt="Script video" style="width:100%; display:block; max-height:420px; object-fit:contain; padding:18px;"></div><div class="bs-note">Ce document va devenir la reference de toute ta communication. L\'objectif est simple : t\'aider a creer une marque plus claire, plus credible et plus simple a faire vivre dans le temps. Prends les modules dans l\'ordre, avance a ton rythme, et garde en tete qu\'ici tu produis des livrables utilisables des demain.</div></div></div></section>';
  }

  function renderDiagnostic() {
    var ready = isRouteComplete("diagnostic");
    var result = ready ? diagnosticResults() : null;
    return '<section class="bs-card"><div class="bs-card-body"><div class="bs-label">Diagnostic</div><h3 class="bs-card-title" style="margin-top:12px;">5 questions pour savoir ou ca bloque vraiment</h3><p class="bs-card-copy">On regarde seulement trois dimensions : clarte, coherence, differentiation. Pas plus de deux problemes a la fois.</p><div class="bs-form-stack" style="margin-top:18px;">' +
      diagnosticQuestions.map(function (question) {
        return '<fieldset class="bs-field"><legend>' + escapeHtml(question.label) + '</legend><div class="bs-fieldset-grid">' + ["Jamais", "Parfois", "Souvent", "Toujours"].map(function (label, idx) {
          var value = String(idx + 1);
          return '<label class="bs-radio-card"><input type="radio" name="' + question.key + '" value="' + value + '"' + (String(state.answers[question.key] || "") === value ? " checked" : "") + '><span><strong>' + label + '</strong><br><span class="bs-muted">Reponse simple, sans sur-analyse.</span></span></label>';
        }).join("") + "</div></fieldset>";
      }).join("") +
      (ready ? '<section class="bs-card"><div class="bs-card-body"><div class="bs-label">Resultat</div><h3 class="bs-card-title" style="margin-top:12px;">Ton angle mort principal</h3><div class="bs-inline-stats" style="margin-top:18px;">' + miniStat("Clarte", result.levels.clarity) + miniStat("Coherence", result.levels.consistency) + miniStat("Differenciation", result.levels.difference) + '</div><div class="bs-note is-soft" style="margin-top:16px;">' + escapeHtml(result.angle) + '</div><div class="bs-note" style="margin-top:14px;">Commence par le module <strong>' + escapeHtml(result.recommendation.title) + '</strong> : c\'est la priorite la plus rentable pour toi maintenant.</div><div class="bs-actions" style="margin-top:16px;"><a class="bs-link-btn bs-link-btn-primary" href="' + result.recommendation.path + '">Commencer ici</a></div></div></section>' : '<div class="bs-note is-soft">Tu verras ici ton angle mort principal et la prochaine etape recommandee des que les 5 reponses seront posees.</div>') +
      '</div></div></section>';
  }

  function renderTarget() {
    var primary = textValue("target_primary");
    var showPrecision = primary.length < 15 || genericTarget(primary);
    var deleteNote = Number(state.ui.deletions.cible || 0) >= DELETE_LIMIT ? '<div class="bs-note is-soft">' + strategicCopy.cible + ' Plus c\'est precis, plus ca attire - ca n\'exclut pas, ca selectionne.</div>' : "";
    return '<section class="bs-card"><div class="bs-card-body"><div class="bs-label">Cible ideale</div><h3 class="bs-card-title" style="margin-top:12px;">Decris en quelques mots la personne a qui tu t\'adresses en priorite.</h3><p class="bs-card-copy">Plus c\'est precis, plus ca attire. Ici, on sort du flou sans tomber dans la caricature.</p></div></section>' +
      '<section class="bs-card"><div class="bs-card-body"><div class="bs-form-stack">' +
      renderTextarea("target_primary", "Decris en quelques mots la personne a qui tu t'adresses en priorite.", "Exemple : consultantes independantes en transition de positionnement") +
      (showPrecision ? renderTextarea("target_exact_type", "Quel type exactement ?", "Exemple : consultantes B2B qui vendent deja mais n'osent pas se specialiser") : "") +
      (showPrecision ? renderTextarea("target_stage", "A quel stade de leur activite ?", "Exemple : 12 a 24 mois d'activite, deja quelques clients, message encore flou") : "") +
      renderTextarea("target_problem_now", "Quel est leur probleme principal en ce moment ?", "Exemple : elles savent ce qu'elles font mais ne savent pas comment le dire clairement") +
      (genericTarget(primary) ? '<div class="bs-note is-warm">Les termes trop larges comme "les entreprises" ou "les independants" rassurent sur le moment, mais ils n\'aident pas a se faire choisir.</div>' : "") +
      deleteNote +
      '</div></div></section>' + renderNavigation("diagnostic", "probleme");
  }

  function renderProblem() {
    var deleteNote = Number(state.ui.deletions.probleme || 0) >= DELETE_LIMIT ? '<div class="bs-note is-soft">' + strategicCopy.probleme + "</div>" : "";
    return '<section class="bs-card"><div class="bs-card-body"><div class="bs-label">Probleme client</div><h3 class="bs-card-title" style="margin-top:12px;">Le probleme doit etre formule dans les mots que ta cible utilise elle-meme.</h3><p class="bs-card-copy">Pas de jargon metier ici : on cherche une phrase qu\'un client pourrait vraiment dire.</p></div></section>' +
      '<section class="bs-card"><div class="bs-card-body"><div class="bs-note">Cible definie : <strong>' + escapeHtml(textValue("target_primary") || "Commence par clarifier ta cible.") + '</strong></div><div class="bs-form-stack" style="margin-top:18px;">' +
      renderTextarea("problem_primary", "Quel est le probleme principal que tu resolves pour cette cible ?", "Exemple : elles savent ce qu'elles font mais ne savent pas comment se presenter sans se diluer") +
      renderTextarea("problem_client_words", "Maintenant reformule avec les mots que ta cible dirait elle-meme.", "Exemple : je ne sais jamais quoi dire sur moi sans avoir l'impression de me repeter") +
      (genericProblem(textValue("problem_client_words")) ? '<div class="bs-note is-warm">Formulation encore un peu generique. Essaie une phrase plus concrete, entendue mot pour mot chez un client.</div>' : "") +
      deleteNote +
      '</div></div></section>' + renderNavigation("cible", "promesse");
  }

  function renderPromise() {
    var current = textValue("promise_final") || promiseAutoDraft();
    var deleteNote = Number(state.ui.deletions.promesse || 0) >= DELETE_LIMIT ? '<div class="bs-note is-soft">' + strategicCopy.promesse + ' Essaie de repartir d\'un meilleur client et de ce qu\'il dit deja de toi.</div>' : "";
    return '<section class="bs-card"><div class="bs-card-body"><div class="bs-label">Promesse de marque</div><h3 class="bs-card-title" style="margin-top:12px;">La promesse doit etre claire, memorisable et deja exportable ici.</h3><p class="bs-card-copy">Tu ne repars pas les mains vides : des cette etape, ta promesse devient copiable et reutilisable.</p></div></section>' +
      '<section class="bs-card"><div class="bs-card-body"><div class="bs-note">Structure pre-remplie : <strong>' + escapeHtml(promiseAutoDraft() || "J'aide [cible] a [probleme] grace a [differenciateur].") + '</strong></div><div class="bs-form-stack" style="margin-top:18px;">' +
      renderTextarea("promise_differentiator", "Quel est le differentiator qui rend ta promesse credible ?", "Exemple : une methode concrete, un cadre editorial, un regard exterieur structure") +
      renderTextarea("promise_final", "Ta promesse de marque", "Tu peux partir de la structure pre-remplie puis la simplifier.") +
      (current && wordCount(current) > 25 ? '<div class="bs-note is-warm">Ta promesse est un peu longue pour etre memorisable. Essaie de la dire d\'une traite sans reprendre ton souffle.</div>' : "") +
      '<div class="bs-card-grid is-two">' + promiseVariants().map(function (variant, index) {
        return '<button class="bs-choice-card" type="button" data-variant="' + index + '"><h3>Variante ' + (index + 1) + '</h3><p class="bs-card-copy" style="margin-top:10px;">' + escapeHtml(variant) + '</p></button>';
      }).join("") + '</div><div class="bs-note is-soft">Question test : une personne qui ne te connait pas comprendrait-elle immediatement ce que tu fais et pour qui ?</div>' + deleteNote + '<div class="bs-actions"><button class="bs-btn bs-btn-secondary" data-copy-field="promise_final">Copier la promesse</button></div></div></div></section>' + renderNavigation("probleme", "offre");
  }

  function renderOffer() {
    var offer = textValue("offer_description");
    var mismatch = offer && textValue("promise_final") && !sharedWord(offer, textValue("promise_final")) && !sharedWord(offer, textValue("target_primary"));
    return '<section class="bs-card"><div class="bs-card-body"><div class="bs-label">Offre principale</div><h3 class="bs-card-title" style="margin-top:12px;">L\'offre doit delivrer concretement ce que ta promesse annonce.</h3><p class="bs-card-copy">On verifie ici que ta promesse et ton offre parlent vraiment de la meme chose.</p></div></section>' +
      '<section class="bs-card"><div class="bs-card-body"><div class="bs-note">Ta promesse : <strong>' + escapeHtml(textValue("promise_final") || "Commence par clarifier ta promesse.") + '</strong></div><div class="bs-form-stack" style="margin-top:18px;">' +
      renderTextField("offer_name", "Nom de l'offre principale", "Exemple : Sprint Clarite de marque") +
      renderTextarea("offer_description", "Decris ton offre principale en quelques lignes.", "En quoi ton offre delivre-t-elle concretement cette promesse ?") +
      (mismatch ? '<div class="bs-note is-warm">Ta description d\'offre et ta promesse semblent parler de choses differentes. Est-ce intentionnel ?</div>' : "") +
      '</div></div></section>' + renderNavigation("promesse", "livrables");
  }

  function renderDeliverables() {
    ensureGeneratedLivrables();
    return '<section class="bs-card"><div class="bs-card-body"><div class="bs-label">Livrables textuels</div><h3 class="bs-card-title" style="margin-top:12px;">Des formulations deja utilisables</h3><p class="bs-card-copy">Chaque livrable reste editable en ligne et copiable individuellement.</p><div class="bs-output-grid" style="margin-top:18px;">' +
      renderOutputCard("Phrase de positionnement", "deliverable_positioning", buildPositioning()) +
      renderOutputCard("Bio courte", "deliverable_bio", buildBio()) +
      renderOutputCard("Description de l'offre", "deliverable_offer", buildOfferSummary()) +
      "</div></div></section>" + renderNavigation("offre", "couleurs");
  }

  function renderColors() {
    var selectedUniverse = textValue("palette_universe") || paletteUniverses[0].id;
    var currentUniverse = paletteUniverses.find(function (item) { return item.id === selectedUniverse; }) || paletteUniverses[0];
    var selectedPalette = textValue("palette_choice");
    return '<section class="bs-card"><div class="bs-card-body"><div class="bs-label">Palette de couleurs</div><h3 class="bs-card-title" style="margin-top:12px;">Choisis une intention avant de choisir des HEX</h3><div class="bs-palette-grid" style="margin-top:18px;">' +
      paletteUniverses.map(function (item) {
        return '<button class="bs-choice-card ' + (item.id === selectedUniverse ? 'is-selected' : '') + '" type="button" data-universe="' + item.id + '"><h3>' + escapeHtml(item.title) + '</h3><p class="bs-card-copy" style="margin-top:10px;">' + escapeHtml(item.hint) + '</p></button>';
      }).join("") +
      '</div><div class="bs-note is-soft" style="margin-top:16px;">Univers choisi : <strong>' + escapeHtml(currentUniverse.title) + '</strong></div><div class="bs-palette-grid" style="margin-top:18px;">' +
      currentUniverse.palettes.map(function (palette, index) {
        var choiceId = currentUniverse.id + "-" + index;
        return '<button class="bs-palette-card ' + (selectedPalette === choiceId ? 'is-selected' : '') + '" type="button" data-palette="' + choiceId + '"><h3>Palette ' + (index + 1) + '</h3><div class="bs-swatches">' + palette.map(function (hex) { return '<span class="bs-swatch" style="background:' + hex + '"></span>'; }).join("") + '</div><p class="bs-card-copy">' + palette.join(" · ") + '</p></button>';
      }).join("") +
      '</div><div class="bs-field" style="margin-top:18px;"><label>Option : j\'ai deja mes couleurs</label><div class="bs-card-grid is-two">' +
      renderTextField("custom_hex_1", "HEX 1", "#534AB7") +
      renderTextField("custom_hex_2", "HEX 2", "#F8F7F4") +
      renderTextField("custom_hex_3", "HEX 3", "#2C2C2A") +
      renderTextField("custom_hex_4", "HEX 4", "#C96F2B") +
      "</div></div>" + renderPalettePreview(getPaletteColors()) + "</div></section>" + renderNavigation("livrables", "typographie");
  }

  function renderTypography() {
    var selected = textValue("typography_choice");
    return '<section class="bs-card"><div class="bs-card-body"><div class="bs-label">Typographie</div><h3 class="bs-card-title" style="margin-top:12px;">Choisis une famille qui confirme ton univers</h3><div class="bs-font-grid" style="margin-top:18px;">' +
      fontChoices.map(function (font) {
        return '<button class="bs-font-card ' + (selected === font.id ? 'is-selected' : '') + '" type="button" data-font="' + font.id + '"><h3>' + escapeHtml(font.mood) + '</h3><p class="bs-card-copy" style="margin-top:10px; font-family:' + escapeHtml(font.name) + ', Arial, sans-serif;">Lea Martin Conseil - Consultante en organisation</p><p class="bs-muted" style="margin-top:12px;"><strong>' + escapeHtml(font.name) + '</strong><br><span>' + escapeHtml(font.href) + '</span></p></button>';
      }).join("") +
      '</div>' + renderTypographyNote() + '</div></section>' + renderNavigation("couleurs", "brand-card");
  }

  function renderBrandCard() {
    ensureGeneratedLivrables();
    var palette = getPaletteColors();
    var font = fontChoices.find(function (item) { return item.id === textValue("typography_choice"); }) || fontChoices[0];
    return '<section class="bs-brand-card" id="brand-card-print"><div class="bs-brand-header" style="border-color:' + palette[1] + ';"><div><div class="bs-label" style="background:rgba(83,74,183,0.12); color:' + palette[0] + ';">Brand Card</div><h3 style="margin-top:14px; font-size:2rem;">' + escapeHtml(textValue("brand_name") || textValue("business_name") || "Ton activite") + '</h3></div><div class="bs-muted">' + escapeHtml(formatDate(new Date())) + '</div></div><div class="bs-brand-grid">' +
      renderBrandSection("Promesse de marque", '<div class="bs-brand-promise">' + escapeHtml(textValue("promise_final") || "Ta promesse apparaitra ici des qu'elle sera finalisee.") + '</div>') +
      renderBrandSection("Cible ideale", escapeHtml(textValue("target_primary") || "Ta cible apparaitra ici.")) +
      renderBrandSection("Probleme client", escapeHtml(textValue("problem_client_words") || "Ton probleme client apparaitra ici.")) +
      renderBrandSection("Offre principale", escapeHtml(textValue("offer_description") || "La description de ton offre apparaitra ici.")) +
      renderBrandSection("Bio courte", escapeHtml(textValue("deliverable_bio") || buildBio())) +
      renderBrandSection("Palette de couleurs", renderPaletteBrandCard(palette)) +
      renderBrandSection("Typographie principale", escapeHtml(font.name) + '<br><a href="' + escapeHtml(font.href) + '" target="_blank" rel="noopener">Voir sur Google Fonts</a>') +
      renderBrandSection("Ton de voix", renderVoiceSection()) +
      '</div><div class="bs-actions" style="margin-top:22px;"><button class="bs-btn bs-btn-primary" data-export-pdf="1">Telecharger en PDF</button><button class="bs-btn bs-btn-secondary" data-copy-brandcard="1">Copier les livrables</button></div><div class="bs-note is-soft" style="margin-top:18px;">Si le PDF rencontre un probleme technique, tu peux toujours copier chaque livrable juste en dessous.</div><div class="bs-output-grid" style="margin-top:18px;">' +
      renderOutputCard("Promesse", "promise_final", textValue("promise_final")) +
      renderOutputCard("Bio courte", "deliverable_bio", textValue("deliverable_bio")) +
      renderOutputCard("Description d'offre", "deliverable_offer", textValue("deliverable_offer")) +
      "</div></section>" + renderNavigation("typographie", "merci");
  }

  function renderThankYou() {
    var checklist = [
      "Mets a jour ta bio LinkedIn avec ta nouvelle promesse",
      "Envoie ta Brand Card a la personne qui gere ton site ou ton graphisme",
      "Utilise ta description d'offre dans ton prochain email de prospection",
      "Remplace la couleur aleatoire de ton profil par ta couleur primaire",
      "Lis ta promesse a voix haute - si tu hesites, affine encore"
    ];
    return '<section class="bs-card"><div class="bs-card-body"><div class="bs-label">Termine</div><h3 class="bs-card-title" style="margin-top:12px;">Ta promesse est enfin mise en valeur seule</h3><div class="bs-note is-soft" style="margin-top:16px; font-size:1.15rem; line-height:1.7;"><strong>' + escapeHtml(textValue("promise_final") || "Ta promesse apparaitra ici.") + '</strong></div><div class="bs-card-grid is-two" style="margin-top:18px;"><div class="bs-card"><div class="bs-card-body"><h3 class="bs-card-title" style="font-size:1.25rem;">Rappel Brand Card</h3><p class="bs-card-copy" style="margin-top:10px;">' + escapeHtml(textValue("deliverable_bio") || buildBio()) + '</p></div></div><div class="bs-card"><div class="bs-card-body"><h3 class="bs-card-title" style="font-size:1.25rem;">Dans les 7 prochains jours</h3><div class="bs-form-stack" style="margin-top:12px;">' + checklist.map(function (item) { return '<label class="bs-checkline"><input type="checkbox"><span>' + escapeHtml(item) + '</span></label>'; }).join("") + '</div></div></div></div><div class="bs-actions" style="margin-top:18px;"><a class="bs-link-btn bs-link-btn-primary" href="/parcours/brand-card/">Voir la Brand Card</a></div></div></section>';
  }

  function renderMain() {
    if (activeRoute.id === "dashboard") return renderDashboard();
    if (activeRoute.id === "diagnostic") return renderDiagnostic();
    if (activeRoute.id === "cible") return renderTarget();
    if (activeRoute.id === "probleme") return renderProblem();
    if (activeRoute.id === "promesse") return renderPromise();
    if (activeRoute.id === "offre") return renderOffer();
    if (activeRoute.id === "livrables") return renderDeliverables();
    if (activeRoute.id === "couleurs") return renderColors();
    if (activeRoute.id === "typographie") return renderTypography();
    if (activeRoute.id === "brand-card") return renderBrandCard();
    if (activeRoute.id === "merci") return renderThankYou();
    return '<section class="bs-card"><div class="bs-card-body"><h3 class="bs-card-title">Page introuvable</h3></div></section>';
  }

  function renderAside() {
    var next = resumeRoute();
    var palette = getPaletteColors();
    return '<aside class="bs-panel-stack"><section class="bs-panel"><div class="bs-panel-body"><div class="bs-label">Apercu rapide</div><h3 class="bs-panel-title" style="margin-top:12px;">' + escapeHtml(textValue("promise_final") || "Ta promesse apparaitra ici tres vite") + '</h3><p class="bs-panel-copy" style="margin-top:10px;">Premiere valeur visible : un resultat deja formulable et partageable.</p></div></section><section class="bs-panel"><div class="bs-panel-body"><div class="bs-label">Focus du moment</div><h3 class="bs-panel-title" style="margin-top:12px;">' + escapeHtml(next.title) + '</h3><p class="bs-panel-copy" style="margin-top:10px;">C\'est la prochaine etape la plus utile pour faire avancer la Brand Card.</p><div class="bs-actions" style="margin-top:14px;"><a class="bs-link-btn bs-link-btn-secondary" href="' + next.path + '">Ouvrir</a></div></div></section><section class="bs-panel"><div class="bs-panel-body"><div class="bs-label">Progression globale</div><div class="bs-progress-row" style="margin-top:12px;"><strong class="bs-progress-value">' + progressPercent() + '%</strong><span class="bs-muted">' + remainingMinutes() + ' min</span></div><div class="bs-progress-track"><div class="bs-progress-bar" style="width:' + progressPercent() + '%"></div></div><div class="bs-preview-surface"><div class="bs-swatches">' + palette.map(function (color) { return '<span class="bs-swatch" style="background:' + color + '"></span>'; }).join("") + '</div><p class="bs-muted" style="margin:0;">Ta direction visuelle commence a se construire en meme temps que ton message.</p></div></div></section></aside>';
  }

  function renderMobileNav() {
    var items = [{ id: "dashboard", label: "Accueil" }, { id: "diagnostic", label: "Parcours" }, { id: "brand-card", label: "Brand Card" }, { id: "merci", label: "Profil" }];
    return '<div class="bs-mobile-nav">' + items.map(function (item) { return '<button data-nav="' + item.id + '" class="' + (activeRoute.id === item.id ? "is-active" : "") + '">' + item.label + '</button>'; }).join("") + "</div>";
  }

  function render() {
    ensureGeneratedLivrables();
    var guardMessage = consumeGuardMessage();
    ROOT.innerHTML = '<div class="bs-app">' + renderSidebar() + '<main class="bs-main">' + renderTopbar() + renderHero() + (guardMessage ? '<div class="bs-note is-warm">' + escapeHtml(guardMessage) + '</div>' : "") + '<div class="bs-main-stack">' + renderMain() + '</div></main>' + renderAside() + '</div>' + renderMobileNav();
    bindEvents();
    startInactivityTimer();
  }

  function startInactivityTimer() {
    if (window.__brandStudioInactivityTimer) {
      window.clearTimeout(window.__brandStudioInactivityTimer);
    }
    if (["cible", "probleme", "promesse", "offre"].indexOf(activeRoute.id) === -1) return;
    window.__brandStudioInactivityTimer = window.setTimeout(function () {
      var message = strategicCopy[activeRoute.id] || "Tu peux reprendre a ton rythme. Le plus utile, c'est d'avancer d'une phrase concrete a la fois.";
      showToast(message);
    }, INACTIVITY_MS);
  }

  function bindEvents() {
    ROOT.onclick = function (event) {
      var navButton = event.target.closest("[data-nav]");
      if (navButton) {
        var navRoute = routeById(navButton.getAttribute("data-nav"));
        window.location.href = navRoute.path;
        return;
      }

      var variantButton = event.target.closest("[data-variant]");
      if (variantButton) {
        writeAnswer("promise_final", promiseVariants()[Number(variantButton.getAttribute("data-variant"))] || promiseAutoDraft());
        render();
        return;
      }

      var universeButton = event.target.closest("[data-universe]");
      if (universeButton) {
        writeAnswer("palette_universe", universeButton.getAttribute("data-universe"));
        writeAnswer("palette_choice", "");
        render();
        return;
      }

      var paletteButton = event.target.closest("[data-palette]");
      if (paletteButton) {
        writeAnswer("palette_choice", paletteButton.getAttribute("data-palette"));
        render();
        return;
      }

      var fontButton = event.target.closest("[data-font]");
      if (fontButton) {
        writeAnswer("typography_choice", fontButton.getAttribute("data-font"));
        render();
        return;
      }

      var copyFieldButton = event.target.closest("[data-copy-field]");
      if (copyFieldButton) {
        copyText(textValue(copyFieldButton.getAttribute("data-copy-field")));
        return;
      }

      var copyBrandCardButton = event.target.closest("[data-copy-brandcard]");
      if (copyBrandCardButton) {
        copyText(brandCardPlainText());
        return;
      }

      var exportPdfButton = event.target.closest("[data-export-pdf]");
      if (exportPdfButton) {
        copyText(brandCardPlainText());
        showToast("Le PDF n'est pas encore actif dans cette passe. Tes livrables ont ete copies en texte brut.");
      }
    };

    ROOT.oninput = function (event) {
      var field = event.target.getAttribute("data-field");
      if (!field) return;
      var previous = String(state.answers[field] || "");
      var next = event.target.value;
      if (next.length < previous.length) {
        state.ui.deletions[activeRoute.id] = Number(state.ui.deletions[activeRoute.id] || 0) + 1;
      } else if (next.length > previous.length && state.ui.deletions[activeRoute.id]) {
        state.ui.deletions[activeRoute.id] = Math.max(0, Number(state.ui.deletions[activeRoute.id]) - 1);
      }
      writeAnswer(field, next);

      if ((field === "target_primary" || field === "problem_client_words" || field === "promise_differentiator") && !textValue("promise_final")) {
        writeAnswer("promise_final", promiseAutoDraft());
      }

      if (activeRoute.id === "livrables") {
        writeAnswer("deliverable_positioning", textValue("deliverable_positioning") || buildPositioning());
        writeAnswer("deliverable_bio", textValue("deliverable_bio") || buildBio());
        writeAnswer("deliverable_offer", textValue("deliverable_offer") || buildOfferSummary());
      }

      if (isRouteComplete(activeRoute.id) && !state.ui.completionShown[activeRoute.id]) {
        state.ui.completionShown[activeRoute.id] = true;
        persistState();
        showToast("Module complete. Tu repars deja avec quelque chose d'utilisable.");
      }

      startInactivityTimer();

      var key = field;
      var selectionStart = typeof event.target.selectionStart === "number" ? event.target.selectionStart : null;
      var selectionEnd = typeof event.target.selectionEnd === "number" ? event.target.selectionEnd : null;
      render();
      window.requestAnimationFrame(function () {
        var replacement = ROOT.querySelector('[data-field="' + key + '"]');
        if (!replacement) return;
        replacement.focus();
        if (selectionStart !== null && selectionEnd !== null && typeof replacement.setSelectionRange === "function") {
          replacement.setSelectionRange(selectionStart, selectionEnd);
        }
      });
    };

    ROOT.onchange = function (event) {
      if (event.target.matches('input[type="radio"]')) {
        writeAnswer(event.target.name, event.target.value);
        if (isRouteComplete(activeRoute.id) && !state.ui.completionShown[activeRoute.id]) {
          state.ui.completionShown[activeRoute.id] = true;
          persistState();
          showToast("Diagnostic complete. La prochaine priorite est prete.");
        }
        render();
      }
    };
  }

  function copyText(value) {
    var text = String(value || "").trim();
    if (!text) {
      showToast("Rien a copier pour l'instant.");
      return;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        showToast("Texte copie.");
      }).catch(function () {
        showToast("Copie impossible pour le moment. Selectionne le texte a la main si besoin.");
      });
      return;
    }

    var helper = document.createElement("textarea");
    helper.value = text;
    document.body.appendChild(helper);
    helper.select();
    try {
      document.execCommand("copy");
      showToast("Texte copie.");
    } catch (err) {
      showToast("Copie impossible pour le moment. Selectionne le texte a la main si besoin.");
    }
    document.body.removeChild(helper);
  }

  function brandCardPlainText() {
    var palette = getPaletteColors();
    var font = fontChoices.find(function (item) { return item.id === textValue("typography_choice"); }) || fontChoices[0];
    return [
      (textValue("brand_name") || textValue("business_name") || "Brand Card"),
      formatDate(new Date()),
      "",
      "PROMESSE DE MARQUE",
      textValue("promise_final") || promiseAutoDraft(),
      "",
      "CIBLE IDEALE",
      textValue("target_primary"),
      "",
      "PROBLEME CLIENT",
      textValue("problem_client_words") || textValue("problem_primary"),
      "",
      "OFFRE PRINCIPALE",
      textValue("offer_name"),
      textValue("offer_description"),
      "",
      "BIO COURTE",
      textValue("deliverable_bio") || buildBio(),
      "",
      "PALETTE",
      palette.join(" / "),
      "",
      "TYPOGRAPHIE",
      font.name + " - " + font.href,
      "",
      "TON DE VOIX",
      "On dit : concret, clair, utilisable des demain",
      "On evite : jargon, promesses vagues, formulations floues"
    ].filter(Boolean).join("\n");
  }
})();
