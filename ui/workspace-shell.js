(function () {
  var MODULES = [
    { href: "Qui te propose cette offre 295057792efe81ffa620f0a50d9b1a35.html", title: "Qui te propose cette offre ?" },
    { href: "Vision & marque 295057792efe81b4ac90f13958e3abad.html", title: "Vision & Marque" },
    { href: "Positionnement 295057792efe810e98f4ffd60c74fad4.html", title: "Positionnement" },
    { href: "Personnalit\u00e9 & ton de marque 295057792efe81e6be2be44f4963e114.html", title: "Personnalit\u00e9 & ton de marque" },
    { href: "Cr\u00e9ation du document, \u00e0 toi de jouer ! 2ee057792efe80899ba8ef2c7e90fe6e.html", title: "Cr\u00e9ation du document, \u00e0 toi de jouer !" },
    { href: "SUPPORTS BONUS 2fe057792efe801c9accfc2deb83190e.html", title: "Supports bonus" }
  ];
  var MENU_URL = "En%20route%20vers%20ta%20nouvelle%20strat%C3%A9gie%20de%20marque%20295057792efe80aabdfeebdd4704fcac.html";
  var LOGO_SRC = "LAB_(17).png";
  var COLLAGE_MAIN = "Elments_nouvelle_comm.png";
  var USER_CODE_KEY = "brandstudio_user_code_v1";
  var LAST_MODULE_KEY = "brandstudio_last_module_v1";
  var PAGE_META = {
    "Qui te propose cette offre 295057792efe81ffa620f0a50d9b1a35.html": {
      description: "Pose le cadre du parcours avec une pr\u00e9sentation claire de l'accompagnement et de sa valeur."
    },
    "Vision & marque 295057792efe81b4ac90f13958e3abad.html": {
      description: "Clarifie l'ADN de ta marque pour ancrer chaque choix visuel dans une intention forte."
    },
    "Positionnement 295057792efe810e98f4ffd60c74fad4.html": {
      description: "Affirme ta diff\u00e9rence, ta cible et ta promesse pour rendre ta marque lisible et d\u00e9sirable."
    },
    "Personnalit\u00e9 & ton de marque 295057792efe81e6be2be44f4963e114.html": {
      description: "Cadre la voix, les codes visuels et les r\u00e9f\u00e9rences de marque pour garder une expression coh\u00e9rente."
    },
    "Cr\u00e9ation du document, \u00e0 toi de jouer ! 2ee057792efe80899ba8ef2c7e90fe6e.html": {
      description: "Rassemble les \u00e9l\u00e9ments essentiels et transforme-les en livrable final clair, complet et pr\u00eat \u00e0 l'emploi."
    },
    "SUPPORTS BONUS 2fe057792efe801c9accfc2deb83190e.html": {
      description: "Prolonge le travail avec des ressources compl\u00e9mentaires, des exemples et des rep\u00e8res d'application."
    },
    "En route vers ta nouvelle strat\u00e9gie de marque 295057792efe80aabdfeebdd4704fcac.html": {
      description: "Retrouve le parcours complet dans une interface de travail homog\u00e8ne, guid\u00e9e et exploitable."
    }
  };
  var AUDIO_SOURCE_OVERRIDES = {
    "Personnalité & ton de marque 295057792efe81e6be2be44f4963e114.html": {
      "2ee05779-2efe-8005-a550-e54f811fccfe": "Notes vocales/note-vocale-marque-personne.mp4"
    }
  };
  var TEXT_REPLACEMENTS = [
    [/STUDIO NOTE/gi, "BRAND STUDIO"],
    [/\bVotre\b/g, "Ta"],
    [/\bvotre\b/g, "ta"],
    [/\bVos\b/g, "Tes"],
    [/\bvos\b/g, "tes"],
    [/\bVous\b/g, "Tu"],
    [/\bvous\b/g, "tu"],
    [/\bPrésentez\b/g, "Présente"],
    [/\bTravaillez\b/g, "Travaille"],
    [/\bComplétez\b/g, "Complète"],
    [/Complète la phrase\s*:/g, "Complète la phrase suivante :"],
    [/Réponds pour chacune\s*:/g, "Réponds aux questions suivantes :"],
    [/Travaillez votre [^:.]+:/g, "Travaille maintenant ta version finale :"],
    [/\bparle t-elle\b/gi, "parle-t-elle"],
    [/\bd[ée]gage t-elle\b/gi, "d\u00e9gage-t-elle"],
    [/\bquelle energie\b/gi, "quelle \u00e9nergie"],
    [/\bremplie le tableau\b/gi, "remplis le tableau"],
    [/\bTu ne doit pas\b/g, "Tu ne dois pas"],
    [/\bmilles mots\b/gi, "mille mots"],
    [/\btu ne pas seulement\b/gi, "tu ne vas pas seulement"],
    [/\bdes typo\b/gi, "des typographies"],
    [/\bPublicit\u00e9 PRINT\b/g, "Publicit\u00e9 print"],
    [/\bUtilise le\b/g, "Utilise-le"],
    [/\bExploitons la\b/g, "Exploitons-la"],
    [/\bd\u00e9crirais tu\b/gi, "d\u00e9crirais-tu"],
    [/\bA toi de jouer\b/g, "\u00c0 toi de jouer"],
    [/\btacible\b/gi, "ta cible"],
    [/\bt\u2019adresses tu\b/gi, "t\u2019adresses-tu"],
    [/\boccupera t-elle\b/gi, "occupera-t-elle"],
    [/\btu travaillera\b/gi, "tu travailleras"],
    [/\bD\u00e9finissons tes couleurs\s+/g, "D\u00e9finissons tes couleurs"],
    [/\bSynthe[seè] de marque\b/g, "Synth\u00e8se de marque"],
    [/\bSynthese strategique\b/g, "Synth\u00e8se strat\u00e9gique"],
    [/\bDocument genere le\b/g, "Document g\u00e9n\u00e9r\u00e9 le"],
    [/\breponses client prioritaires\b/g, "r\u00e9ponses client prioritaires"],
    [/\bBlocs de synthese\b/g, "Blocs de synth\u00e8se"],
    [/\[Zone de texte\]/g, ""]
  ];

  function norm(value) {
    try {
      return decodeURIComponent(value || "");
    } catch (err) {
      return value || "";
    }
  }

  function currentPath() {
    return norm(location.pathname.split("/").pop());
  }

  function currentIndex() {
    var path = currentPath();
    for (var i = 0; i < MODULES.length; i += 1) {
      if (MODULES[i].href === path) return i;
    }
    return -1;
  }

  function isHomePage() {
    return currentPath() === norm(MENU_URL);
  }

  function textOf(el) {
    return ((el && el.textContent) || "").replace(/\s+/g, " ").trim();
  }

  function getPageMeta() {
    return PAGE_META[currentPath()] || null;
  }

  function getModuleMeta(href) {
    return PAGE_META[href] || null;
  }

  function getLastVisitedModuleIndex() {
    var lastPath = "";
    try {
      lastPath = norm(localStorage.getItem(LAST_MODULE_KEY) || "");
    } catch (err) {
      lastPath = "";
    }
    for (var i = 0; i < MODULES.length; i += 1) {
      if (MODULES[i].href === lastPath) return i;
    }
    return 0;
  }

  function rememberCurrentModule(idx) {
    if (idx < 0 || idx >= MODULES.length) return;
    try {
      localStorage.setItem(LAST_MODULE_KEY, MODULES[idx].href);
    } catch (err) {}
  }

  function getJourneyState(idx) {
    var activeIndex = idx >= 0 ? idx : getLastVisitedModuleIndex();
    if (activeIndex < 0) activeIndex = 0;
    if (activeIndex >= MODULES.length) activeIndex = MODULES.length - 1;
    var completedCount = Math.max(0, activeIndex);
    var percent = Math.round((completedCount / MODULES.length) * 100);
    var remainingCount = Math.max(1, MODULES.length - completedCount);
    return {
      activeIndex: activeIndex,
      currentModule: MODULES[activeIndex],
      completedCount: completedCount,
      remainingCount: remainingCount,
      percent: percent,
      remainingMinutes: remainingCount * 15
    };
  }

  function getAudioOverride(figureId) {
    var pageMap = AUDIO_SOURCE_OVERRIDES[currentPath()] || null;
    if (!pageMap) return "";
    return pageMap[figureId] || "";
  }

  function previousMeaningfulSibling(node) {
    var current = node ? node.previousElementSibling : null;
    while (current) {
      if (textOf(current)) return current;
      current = current.previousElementSibling;
    }
    return null;
  }

  function nextMeaningfulSibling(node) {
    var current = node ? node.nextElementSibling : null;
    while (current) {
      if (textOf(current)) return current;
      current = current.nextElementSibling;
    }
    return null;
  }

  function detectCalloutTone(text) {
    var value = (text || "").toLowerCase();
    if (!value) return "";
    if (/\u26a0|important|attention|a eviter|a \u00e9viter|vigilance/.test(value)) return "warning";
    if (/\ud83d\udc49|conseil|astuce|tip|bon reflexe|bon r\u00e9flexe|coach/.test(value)) return "tip";
    if (/exemple|par exemple|inspiration/.test(value)) return "example";
    if (/exercice|a toi|\u00e0 toi|pratique|atelier/.test(value)) return "exercise";
    if (/test|verifie|v\u00e9rifie|rappel|checkpoint/.test(value)) return "test";
    return "";
  }

  function detectHeadingTone(text) {
    var value = (text || "").toLowerCase();
    if (!value) return "";
    if (/insight|intention|cap|vision|essentiel|adn/.test(value)) return "insight";
    if (/exemple|fictif|inspiration|reference|r\u00e9f\u00e9rence/.test(value)) return "example";
    if (/exercice|a toi|\u00e0 toi|formulation|atelier|travail/.test(value)) return "exercise";
    if (/checklist|avant publication|nouveau support/.test(value)) return "checklist";
    if (/synthese|synth\u00e8se|resume|r\u00e9sum\u00e9|recap|r\u00e9cap/.test(value)) return "summary";
    if (/conseil|astuce|coach|note vocale|audio/.test(value)) return "tip";
    return "";
  }

  function isFieldNode(node) {
    return !!(
      node &&
      node.matches &&
      node.matches(
        ".to-do-list, ul.bulleted-list, ol.numbered-list, figure.callout, details, .column-list, table, .bs-table-wrap, figure.image, figure.brand-upload-slot"
      )
    );
  }

  function sectionKindFromSection(section) {
    if (!section || !section.querySelector) return "";
    var heading = section.querySelector(".bs-heading-exercise, .bs-heading-example, .bs-heading-insight, .bs-heading-checklist, .bs-heading-summary, .bs-heading-tip");
    if (heading) {
      if (heading.classList.contains("bs-heading-exercise")) return "exercise";
      if (heading.classList.contains("bs-heading-example")) return "example";
      if (heading.classList.contains("bs-heading-insight")) return "insight";
      if (heading.classList.contains("bs-heading-checklist")) return "checklist";
      if (heading.classList.contains("bs-heading-summary")) return "summary";
      if (heading.classList.contains("bs-heading-tip")) return "tip";
    }
    if (section.querySelector(".bs-audio-note")) return "tip";
    if (section.querySelector(".bs-checklist-list, .to-do-list")) return "checklist";
    if (section.querySelector(".bs-work-table, textarea, .brand-zone-block")) return "exercise";
    if (section.querySelector(".bs-resource-card, .bs-nav-card")) return "example";
    if (section.querySelector("blockquote, figure.callout")) return "insight";
    return "";
  }

  function create(tag, className, text) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    if (typeof text === "string") el.textContent = text;
    return el;
  }

  function setTextById(id, value) {
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  function setHtmlById(id, value) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = value;
  }

  function removeBlockById(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var parent = el.parentElement;
    if (parent && parent.style && parent.style.display === "contents") {
      parent.remove();
      return;
    }
    el.remove();
  }

  function injectPageOverrideStyle(id, css) {
    if (document.getElementById(id)) return;
    var style = document.createElement("style");
    style.id = id;
    style.textContent = css;
    document.head.appendChild(style);
  }

  function addCheckboxMarker(node) {
    if (!node || node.dataset.bsCheckboxApplied === "1") return;
    node.dataset.bsCheckboxApplied = "1";
    node.classList.add("bs-checkbox-label");
  }

  function applyHomeFinalAdjustments(article) {
    if (!article || !isHomePage()) return;

    var title = article.querySelector(".page-title");
    if (title) title.textContent = "En route vers ta nouvelle identité de marque";

    setHtmlById("30505779-2efe-80a0-9ef3-f598e802788a", "<span class=\"bs-home-pretitle\">En route vers ta nouvelle identité de marque</span>");
    setTextById("2ee05779-2efe-8060-82a3-e1a38a03f3e3", "BRAND STUDIO");
    setTextById("2f105779-2efe-80cd-896a-fb6cce1fd6d5", "Hello, ça y est, c’est le grand moment ! Je te remercie encore d’avoir choisi ce pack pour t’accompagner dans la belle mission de structurer ton identité de marque.");
    setTextById("2ee05779-2efe-8039-8594-fb584c35549b", "Es-tu prêt à entrer dans la peau d’un Directeur Artistique ?");
    setTextById("2ee05779-2efe-80af-b71c-f2250f658e20", "Ce guide est le document de référence de ton identité, un kit clé en main pour poser les bases d’une marque forte.");
    setTextById("2ee05779-2efe-805a-bf59-c852e5a0922f", "");
    setTextById("29505779-2efe-8198-9bdc-f19ce12ad42c", "Modules");

    injectPageOverrideStyle("bs-home-final-style", ".bs-home-pretitle{display:inline-block;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:#8e6134;font-weight:700}.bs-page-home .bs-topbar,.bs-page-home .bs-bottom-bar{display:none!important}");
  }

  function applyVisionFinalAdjustments(article) {
    if (!article || currentPath() !== "Vision & marque 295057792efe81b4ac90f13958e3abad.html") return;

    var title = article.querySelector(".page-title");
    if (title) title.textContent = "Vision & Marque";

    setHtmlById("29505779-2efe-81ae-ba49-fbe556fd9383", "L’ADN de marque, quésaco ?");
    setTextById("2ee05779-2efe-80e5-89b7-db2ac448ccfa", "Prends maintenant le temps de poser une base simple, claire et honnête avant de travailler la suite.");
    setTextById("30505779-2efe-80c9-8210-de72a1057622", "Bases de départ");
    setTextById("2ee05779-2efe-80e6-b210-fff3552c7e5f", "Prends le temps de répondre avec des mots simples, concrets et sincères. Plus cette base est juste, plus les sections suivantes seront faciles à construire.");

    setTextById("2ee05779-2efe-80b6-814d-e3b3a060b62f", "Réponds aux questions suivantes :");
    setTextById("2ee05779-2efe-8003-9526-c3e442a8b036", "Complète la phrase suivante :");
    setTextById("2ee05779-2efe-80e6-997e-d735fbce754e", "Travaille maintenant ta version finale :");
    setTextById("30505779-2efe-8098-bdd0-ef4b6ae5d032", "Version explicative (3-4 lignes)");
    setTextById("30505779-2efe-807b-aad3-fc976ef01d1d", "Version synthétique (1 phrase)");
    setTextById("30505779-2efe-80c4-8a94-c04e6f588be9", "Transformation, la phrase essentielle");
    setTextById("30505779-2efe-8033-86cf-e7829f3d719d", "Version synthétique (1 phrase)");
    setTextById("30505779-2efe-8004-86fc-ea6905bd30eb", "Traduire les valeurs en actions");
    setTextById("30505779-2efe-8027-b8a7-d3455582bb79", "Promesse VS Mission VS Baseline");
    setTextById("30505779-2efe-804c-bb74-ca14433343a9", "Exercice : Avant / après");
    setTextById("30505779-2efe-80f9-a835-d499382e4072", "Promesse tangible VS promesse vague");
    setTextById("30505779-2efe-8090-8c71-f89f8d29d260", "Complète les phrases suivantes :");
    setTextById("30505779-2efe-802b-bee5-f3c5f7c63118", "Clarifie les rôles :");
    setTextById("30505779-2efe-8024-9c14-c7667c54c993", "Pour chaque valeur retenue, complète :");
    setTextById("30505779-2efe-8035-b837-d122f411880b", "Travaille maintenant ta version finale :");
    setTextById("30505779-2efe-80da-8a5c-f36c78fdbd93", "Une formulation intégrée naturellement dans ton discours.");
    setTextById("30505779-2efe-809a-b297-d6c644dd4fbd", "C’est ce que ton client peut attendre de toi, de manière fiable et constante.");
    setTextById("30505779-2efe-80fa-9756-d285d38e982a", "Sinon, il faut reformuler.");
    setTextById("30505779-2efe-806f-a40d-cf0710648f56", "Ta promesse :");

    removeBlockById("2ee05779-2efe-803e-ac68-f875659a4e52");

    Array.prototype.slice.call(article.querySelectorAll("p, h3, h2, blockquote, li")).forEach(function (node) {
      var value = textOf(node);
      if (!value) return;
      if (/STUDIO PROMPT/i.test(value)) {
        removeBlockById(node.id);
      }
      if (/^\[Zone de texte\]$/.test(value) || /\[Zone de texte\]/.test(value)) {
        var label = previousMeaningfulSibling(node);
        if (label) addCheckboxMarker(label);
      }
      if (/^Valeur\s*:\s*\[Zone de texte\]$/i.test(value)) addCheckboxMarker(node);
      if (/Cela signifie que je \[Zone de texte\]/i.test(value)) addCheckboxMarker(node);
      if (/Concrètement, cela se traduit par \[Zone de texte\]/i.test(value)) addCheckboxMarker(node);
      if (/Dans ma communication, cela donne \[Zone de texte\]/i.test(value)) addCheckboxMarker(node);
    });

    Array.prototype.slice.call(article.querySelectorAll("figure.callout, blockquote")).forEach(function (node) {
      node.classList.add("bs-vision-field");
    });

    injectPageOverrideStyle("bs-vision-final-style", ".bs-page-vision figure.callout,.bs-page-vision blockquote{width:100%!important;max-width:none!important;margin-left:0!important;margin-right:0!important;border-radius:24px!important;background:#fffdf9!important;border:1px solid #e7ddd2!important;box-shadow:none!important}.bs-page-vision figure.callout>div:first-child,.bs-page-vision .callout .icon{display:none!important}.bs-page-vision .column-list{grid-template-columns:1fr!important}.bs-page-vision .bs-checkbox-label{display:flex!important;align-items:flex-start;gap:10px}.bs-page-vision .bs-checkbox-label::before{content:'';display:inline-block;width:18px;height:18px;flex:0 0 18px;border:1px solid #d6c8b8;border-radius:6px;background:#fff;margin-top:.12em}.bs-page-vision figure.callout textarea.brand-zone-block,.bs-page-vision blockquote textarea.brand-zone-block{width:100%!important;max-width:none!important}.bs-page-vision #30505779-2efe-801d-bbc3-e98d8d9f3f68,.bs-page-vision #30505779-2efe-807a-a0f2-d399c65f8dbd{grid-template-columns:1fr!important}.bs-page-vision #30505779-2efe-8066-a532-e74a56c944b7,.bs-page-vision #30505779-2efe-807f-b0a6-f7886daa3061,.bs-page-vision #30505779-2efe-809b-b414-cb7c87a4dd23{width:100%!important}.bs-page-vision #30505779-2efe-8094-8104-ccd7b42f7ba4{background:#fff7ee!important;border:1px solid #e7ddd2!important;border-radius:24px!important;padding:18px!important}.bs-page-vision #30505779-2efe-8094-8104-ccd7b42f7ba4 p{font-weight:700;color:#3f3f49!important}");
  }

  function shouldSkipTextNode(node) {
    if (!node || !node.parentElement) return true;
    var tag = node.parentElement.tagName;
    return tag === "SCRIPT" || tag === "STYLE" || tag === "TEXTAREA" || tag === "INPUT" || tag === "CODE" || tag === "PRE";
  }

  function repairCopy(root) {
    if (!root || root.dataset.bsCopyFixed === "1") return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var node;
    while ((node = walker.nextNode())) {
      if (shouldSkipTextNode(node)) continue;
      var value = node.nodeValue;
      var nextValue = value;
      TEXT_REPLACEMENTS.forEach(function (entry) {
        nextValue = nextValue.replace(entry[0], entry[1]);
      });
      nextValue = nextValue.replace(/[ \t]{2,}/g, " ").replace(/ +([:;!?])/g, " $1");
      if (nextValue !== value) node.nodeValue = nextValue;
    }
    root.dataset.bsCopyFixed = "1";
  }

  function setPageDescription(article) {
    if (!article) return;
    var description = article.querySelector(".page-description");
    var meta = getPageMeta();
    if (!description || !meta || textOf(description)) return;
    description.textContent = meta.description;
  }

  function normalizeTables(root) {
    if (!root || root.dataset.bsTablesNormalized === "1") return;
    Array.prototype.slice.call(root.querySelectorAll("table")).forEach(function (table) {
      ["thead", "tbody", "tfoot"].forEach(function (tagName) {
        Array.prototype.slice.call(table.querySelectorAll(tagName)).forEach(function (section) {
          Array.prototype.slice.call(section.children).forEach(function (child) {
            if (child.tagName !== "DIV") return;
            while (child.firstChild) {
              section.insertBefore(child.firstChild, child);
            }
            child.remove();
          });
        });
      });

      if (!table.querySelector("thead")) {
        var firstRow = table.querySelector("tbody tr, tr");
        if (!firstRow) return;
        var cells = Array.prototype.slice.call(firstRow.children);
        var headerLike = cells.length && cells.every(function (cell) {
          return cell.tagName === "TH" || !/\[Zone de texte\]/i.test(textOf(cell));
        });
        if (headerLike) {
          var thead = document.createElement("thead");
          thead.appendChild(firstRow);
          table.insertBefore(thead, table.firstChild);
        }
      }
    });
    root.dataset.bsTablesNormalized = "1";
  }

  function zoneStorageKey(node, suffix) {
    var base = node && node.id ? node.id : "zone";
    return "brandstudio:fallback:" + currentPath() + ":" + base + ":" + (suffix || "0");
  }

  function autosizeTextarea(field) {
    if (!field || field.tagName !== "TEXTAREA") return;
    field.style.height = "auto";
    field.style.height = Math.max(field.scrollHeight, 132) + "px";
  }

  function buildInlineZone(storageKey, placeholder) {
    var zone = create("span", "brand-zone brand-zone-inline");
    zone.contentEditable = "true";
    zone.setAttribute("role", "textbox");
    zone.setAttribute("data-placeholder", placeholder || "Ta réponse");
    zone.setAttribute("spellcheck", "true");
    try {
      zone.textContent = localStorage.getItem(storageKey) || "";
    } catch (err) {}
    zone.addEventListener("input", function () {
      try {
        localStorage.setItem(storageKey, zone.textContent.trim());
      } catch (err) {}
    });
    return zone;
  }

  function buildBlockZone(storageKey, placeholder) {
    var zone = document.createElement("textarea");
    zone.className = "brand-zone brand-zone-block";
    zone.placeholder = placeholder || "Écris ici";
    zone.rows = 4;
    try {
      zone.value = localStorage.getItem(storageKey) || "";
    } catch (err) {}
    autosizeTextarea(zone);
    zone.addEventListener("input", function () {
      autosizeTextarea(zone);
      try {
        localStorage.setItem(storageKey, zone.value);
      } catch (err) {}
    });
    return zone;
  }

  function replaceInlineTokens(node, tokenText) {
    if (!node || !tokenText || node.dataset.bsInlineTokensMounted === "1") return false;
    var raw = node.textContent || "";
    if (raw.indexOf(tokenText) === -1) return false;
    node.dataset.bsInlineTokensMounted = "1";
    var parts = raw.split(tokenText);
    node.textContent = "";
    parts.forEach(function (part, index) {
      if (part) node.appendChild(document.createTextNode(part));
      if (index < parts.length - 1) {
        node.appendChild(buildInlineZone(zoneStorageKey(node, "inline-" + index), "Compléter"));
      }
    });
    return true;
  }

  function mountFallbackFields(root) {
    if (!root || root.dataset.bsFallbackFieldsMounted === "1") return;
    var token = "[Zone de texte]";

    Array.prototype.slice.call(root.querySelectorAll("figure.callout, blockquote, td, th, p, li, h2, h3, h4")).forEach(function (node) {
      if (node.querySelector && node.querySelector("textarea, .brand-zone-inline, [contenteditable='true']")) return;
      var text = textOf(node);
      if (!text || text.indexOf(token) === -1) return;

      if (text === token && /^(P|DIV|BLOCKQUOTE|TD|TH)$/i.test(node.tagName)) {
        node.textContent = "";
        node.appendChild(buildBlockZone(zoneStorageKey(node, "block"), "Écris ici"));
        return;
      }

      if (/^(H2|H3|H4|P|LI|BLOCKQUOTE|TD|TH)$/i.test(node.tagName)) {
        replaceInlineTokens(node, token);
      }
    });

    Array.prototype.slice.call(root.querySelectorAll("p, li, blockquote, td, th, h2, h3, h4")).forEach(function (node) {
      if (node.querySelector && node.querySelector("textarea, .brand-zone-inline, [contenteditable='true']")) return;
      if ((node.textContent || "").indexOf(token) !== -1) {
        node.textContent = (node.textContent || "").replace(/\[Zone de texte\]/g, "").replace(/\s{2,}/g, " ").trim();
      }
    });

    Array.prototype.slice.call(root.querySelectorAll("p, div")).forEach(function (node) {
      if (textOf(node) === "* * *") {
        var divider = document.createElement("hr");
        divider.className = "bs-divider";
        node.replaceWith(divider);
      }
    });

    root.dataset.bsFallbackFieldsMounted = "1";
  }

  function normalizeLinks(root) {
    if (!root || root.dataset.bsLinksNormalized === "1") return;
    Array.prototype.slice.call(root.querySelectorAll("a[href]")).forEach(function (anchor) {
      var href = (anchor.getAttribute("href") || "").trim();
      if (!href) return;
      var text = textOf(anchor);
      href = href.replace(/\.frr\/?$/i, ".fr/");
      href = href.replace(/^([^\]]+)\]\((https?:\/\/[^)]+)\)$/i, "$2");
      href = href.replace(/^https?:\/\/([^/\]]+)\]\((https?:\/\/[^)]+)\)$/i, "$2");
      anchor.setAttribute("href", href);
      if (!anchor.classList.contains("bookmark") && (/^\s*https?:\/\/[^/\]]+\]\(https?:\/\/.+\)\s*$/i.test(text) || /\.frr\/?$/i.test(text))) {
        anchor.textContent = href;
      }
      if (anchor.classList.contains("bookmark")) {
        var hrefNode = anchor.querySelector(".bookmark-href");
        if (hrefNode) hrefNode.textContent = href;
        var titleNode = anchor.querySelector(".bookmark-title");
        if (titleNode && !textOf(titleNode)) {
          try {
            titleNode.textContent = new URL(href).hostname.replace(/^www\./, "");
          } catch (err) {}
        }
      }
    });
    root.dataset.bsLinksNormalized = "1";
  }

  function mountUploadSlots(root) {
    if (!root) return;
    Array.prototype.slice.call(root.querySelectorAll("figure.bs-placeholder-media")).forEach(function (figure, index) {
      if (figure.dataset.bsUploadMounted === "1") return;
      figure.dataset.bsUploadMounted = "1";
      figure.classList.add("brand-upload-slot");

      var titleSource = previousMeaningfulSibling(figure);
      var slotLabel = textOf(titleSource) || "Visuel de r\u00e9f\u00e9rence";
      var storageKey = "brandstudio:upload:" + (figure.id || "slot-" + index);

      figure.innerHTML = "";

      var box = create("div", "brand-upload-box");
      var kicker = create("div", "bs-focus-kicker", "R\u00e9f\u00e9rence visuelle");
      var title = create("strong", "brand-upload-title", slotLabel);
      var hint = create("p", "brand-upload-hint", "Ajoute une image pour illustrer ce bloc, nourrir ton moodboard ou garder un rep\u00e8re concret dans le parcours.");
      var controls = create("div", "brand-upload-controls");
      var input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.hidden = true;
      var addBtn = create("button", "bs-pill-btn bs-secondary-btn", "Ajouter une image");
      addBtn.type = "button";
      var removeBtn = create("button", "bs-pill-btn bs-secondary-btn", "Retirer");
      removeBtn.type = "button";
      removeBtn.hidden = true;
      var preview = create("img", "brand-upload-preview");
      preview.alt = slotLabel;
      preview.hidden = true;

      function applyPreview(dataUrl) {
        var hasImage = !!dataUrl;
        box.classList.toggle("has-image", hasImage);
        preview.hidden = !hasImage;
        preview.src = hasImage ? dataUrl : "";
        removeBtn.hidden = !hasImage;
        hint.hidden = hasImage;
      }

      addBtn.addEventListener("click", function () {
        input.click();
      });

      removeBtn.addEventListener("click", function () {
        try {
          localStorage.removeItem(storageKey);
        } catch (err) {}
        input.value = "";
        applyPreview("");
      });

      input.addEventListener("change", function () {
        var file = input.files && input.files[0];
        if (!file) return;
        var reader = new FileReader();
        reader.onload = function () {
          var result = typeof reader.result === "string" ? reader.result : "";
          if (!result) return;
          try {
            localStorage.setItem(storageKey, result);
          } catch (err) {}
          applyPreview(result);
        };
        reader.readAsDataURL(file);
      });

      controls.appendChild(addBtn);
      controls.appendChild(removeBtn);
      box.appendChild(kicker);
      box.appendChild(title);
      box.appendChild(hint);
      box.appendChild(preview);
      box.appendChild(controls);
      box.appendChild(input);
      figure.appendChild(box);

      try {
        applyPreview(localStorage.getItem(storageKey) || "");
      } catch (err) {
        applyPreview("");
      }
    });
  }

  function decorateBodyContent(body) {
    if (!body || body.dataset.bsDecorated === "1") return;

    body.classList.add("bs-reading-flow");

    Array.prototype.slice.call(body.querySelectorAll(".column-list")).forEach(function (row) {
      row.classList.add("bs-columns");
    });

    Array.prototype.slice.call(body.querySelectorAll(".column-list .column")).forEach(function (column) {
      column.classList.add("bs-column");
    });

    Array.prototype.slice.call(body.querySelectorAll("figure.image")).forEach(function (figure) {
      if (figure.querySelector("figcaption")) figure.classList.add("bs-figure-story");
      if (!figure.querySelector("figcaption")) figure.classList.add("bs-figure-plain");
      if (figure.querySelector("img[src='https://www.notion.so']")) {
        figure.classList.add("bs-placeholder-media");
      }
    });

    Array.prototype.slice.call(body.querySelectorAll("figure .source")).forEach(function (source) {
      var figure = source.closest("figure");
      if (!figure) return;
      figure.classList.add("bs-resource-card");
      var anchor = source.querySelector("a");
      var href = (anchor && anchor.getAttribute("href")) || "";
      var previous = previousMeaningfulSibling(figure);
      var previousText = textOf(previous);
      var audioOverride = getAudioOverride(figure.id);
      if (audioOverride) {
        source.textContent = "";
        var player = document.createElement("audio");
        player.controls = true;
        player.preload = "none";
        player.src = audioOverride;
        player.className = "bs-audio-player";
        var link = create("a", "bs-audio-link", "Ouvrir la note vocale");
        link.href = audioOverride;
        link.target = "_blank";
        link.rel = "noopener";
        source.appendChild(player);
        source.appendChild(link);
        figure.classList.add("bs-audio-note", "has-audio-player");
        if (previous && previous.matches && previous.matches("p")) previous.classList.add("bs-audio-label");
        return;
      }
      if (/soundefined/i.test(href)) {
        source.textContent = "Ressource en cours de connexion";
        if (anchor) anchor.removeAttribute("href");
      }
      if (/soundefined/i.test(href) || /note vocale|audio|podcast|ecoute|\u00e9coute|\ud83c\udf99\ufe0f/i.test(previousText)) {
        figure.classList.add("bs-audio-note");
        if (previous && previous.matches && previous.matches("p")) previous.classList.add("bs-audio-label");
      }
    });

    Array.prototype.slice.call(body.querySelectorAll("figure.link-to-page")).forEach(function (figure) {
      figure.classList.add("bs-nav-card");
    });

    Array.prototype.slice.call(body.querySelectorAll("ul.bulleted-list")).forEach(function (list) {
      list.classList.add("bs-bulleted-list");
      var items = Array.prototype.slice.call(list.children);
      if (
        items.length &&
        items.every(function (item) {
          return /^[\u2610\u2611\u2713]/.test(textOf(item));
        })
      ) {
        list.classList.add("bs-checklist-list");
        items.forEach(function (item) {
          var cleaned = textOf(item).replace(/^[\u2610\u2611\u2713]\s*/, "");
          if (!cleaned) return;
          item.textContent = "";
          item.appendChild(create("span", "bs-checklist-copy", cleaned));
        });
      }
    });

    Array.prototype.slice.call(body.querySelectorAll("ol.numbered-list")).forEach(function (list) {
      list.classList.add("bs-numbered-list");
    });

    Array.prototype.slice.call(body.querySelectorAll("details")).forEach(function (details) {
      details.classList.add("bs-fold-section");
    });

    Array.prototype.slice.call(body.querySelectorAll("table")).forEach(function (table) {
      table.classList.add("bs-data-table");
      if (/\[Zone de texte\]/i.test(textOf(table))) table.classList.add("bs-work-table");
      if (!table.parentElement || !table.parentElement.classList.contains("bs-table-wrap")) {
        var wrap = create("div", "bs-table-wrap");
        table.parentNode.insertBefore(wrap, table);
        wrap.appendChild(table);
      }
    });

    Array.prototype.slice.call(body.querySelectorAll("hr")).forEach(function (rule) {
      rule.classList.add("bs-divider");
    });

    Array.prototype.slice.call(body.children).forEach(function (node, index) {
      if (node.matches && node.matches("p")) {
        var text = textOf(node);
        var previous = node.previousElementSibling;
        if (!text) node.classList.add("bs-empty-block");
        if (index < 4 && text.length > 110) node.classList.add("bs-lead");
        if (text.length > 180) node.classList.add("bs-body-long");
        if (/^(\ud83c\udf99\ufe0f|\ud83d\udc49|\u26a0\ufe0f|test\b|exercice\b|rappel\b)/i.test(text)) node.classList.add("bs-inline-label");
        if (
          text.length > 0 &&
          text.length < 65 &&
          !node.querySelector("strong") &&
          !(previous && previous.matches && previous.matches("h1, h2, h3, h4"))
        ) {
          node.classList.add("bs-punchline");
        }
      }

      if (node.matches && node.matches("blockquote")) {
        node.classList.add("bs-editorial-quote");
      }

      if (node.matches && node.matches("figure.callout")) {
        var tone = detectCalloutTone(textOf(node));
        if (tone) node.classList.add("bs-callout-" + tone);
      }

      if (node.matches && node.matches("h2, h3, h4")) {
        var headingTone = detectHeadingTone(textOf(node));
        node.classList.add("bs-block-heading");
        if (headingTone) node.classList.add("bs-heading-" + headingTone);
        if (/block-color-[a-z]+_background/.test(node.className || "")) node.classList.add("bs-subsection-tag");
        var next = node.nextElementSibling;
        if (next && next.matches("p") && textOf(next).length > 90) {
          next.classList.add("bs-section-intro");
        }
      }
    });

    Array.prototype.slice.call(body.querySelectorAll("p")).forEach(function (node) {
      var text = textOf(node);
      if (!text) return;
      var next = nextMeaningfulSibling(node);
      if (next && isFieldNode(next) && (text.length < 120 || /[?:]$/.test(text))) {
        node.classList.add("bs-field-label");
      }
      if (node.querySelector("em") && text.length < 220) {
        node.classList.add("bs-coach-note");
      }
    });

    var firstColumns = body.querySelector(".column-list");
    if (firstColumns) firstColumns.classList.add("bs-opening-grid");

    var firstStory = body.querySelector("figure.bs-figure-story");
    if (firstStory) firstStory.classList.add("bs-hero-story");

    Array.prototype.slice.call(body.querySelectorAll(".column-list")).forEach(function (list) {
      var figures = Array.prototype.slice.call(list.children).map(function (child) {
        return child.querySelector ? child.querySelector(".column figure.image, figure.image") : null;
      }).filter(function (figure) {
        return !!figure;
      });
      if (figures.length && figures.every(function (figure) { return figure.classList.contains("bs-placeholder-media"); })) {
        list.classList.add("bs-placeholder-grid");
      }
    });

    Array.prototype.slice.call(body.querySelectorAll("li")).forEach(function (item) {
      if (item.querySelector("ul, ol, .to-do-list")) item.classList.add("bs-list-question");
    });

    body.dataset.bsDecorated = "1";
  }

  function groupBodyContent(body) {
    if (!body || body.dataset.bsGrouped === "1") return;
    var nodes = Array.prototype.slice.call(body.children);
    if (!nodes.length) return;

    var groups = [];
    var current = [];

    function containsHeading(node) {
      return !!(node && node.querySelector && node.querySelector("h2, h3, h4"));
    }

    function hasUsefulContent(section) {
      if (!section) return false;
      if (section.querySelector("textarea, .brand-zone-inline, .to-do-list, ul.bulleted-list, ol.numbered-list, figure, table, details, audio")) return true;
      return Array.prototype.slice.call(section.querySelectorAll("p, h1, h2, h3, h4, blockquote, li")).some(function (node) {
        return textOf(node).length > 0 && !node.classList.contains("bs-empty-block");
      });
    }

    nodes.forEach(function (node) {
      if (containsHeading(node) && current.length) {
        groups.push(current);
        current = [];
      }
      current.push(node);
    });
    if (current.length) groups.push(current);

    var stack = create("div", "bs-content-stack");
    body.appendChild(stack);

    groups.forEach(function (group, index) {
      var section = create("section", index === 0 ? "bs-intro-card" : "bs-step-card");
      if (index > 0) {
        section.setAttribute("data-step-label", "\u00c9tape " + index);
      }
      stack.appendChild(section);
      group.forEach(function (node) {
        section.appendChild(node);
      });
      if (section.querySelector(".column-list")) section.classList.add("bs-section-has-columns");
      if (section.querySelector("figure.callout")) section.classList.add("bs-section-has-callout");
      if (section.querySelector(".to-do-list")) section.classList.add("bs-section-has-checklist");
      if (section.querySelector(".bs-checklist-list")) section.classList.add("bs-section-has-checklist");
      if (section.querySelector("figure.image")) section.classList.add("bs-section-has-media");
      if (section.querySelector("ol.numbered-list")) section.classList.add("bs-section-has-steps");
      if (section.querySelector("details")) section.classList.add("bs-section-has-folds");
      if (section.querySelector(".link-to-page")) section.classList.add("bs-section-has-navcards");
      if (section.querySelector("table")) section.classList.add("bs-section-has-table");
      if (section.querySelector(".bs-placeholder-grid")) section.classList.add("bs-section-has-placeholders");
      if (section.querySelector(".bs-work-table")) section.classList.add("bs-section-has-worktable");
      if (section.querySelector(".bs-audio-note")) section.classList.add("bs-section-has-audio");
      if (section.querySelectorAll("p.bs-body-long").length >= 2) section.classList.add("bs-section-has-longform");
      if (section.querySelectorAll("details").length >= 2) section.classList.add("bs-section-has-fold-cluster");
      if (section.querySelectorAll("figure.callout, blockquote").length >= 2) section.classList.add("bs-section-has-editorial-notes");
      var kind = sectionKindFromSection(section);
      if (kind) section.classList.add("bs-kind-" + kind);
      if (!hasUsefulContent(section)) {
        section.remove();
      }
    });

    body.dataset.bsGrouped = "1";
  }

  function findSectionByHeading(stack, pattern) {
    if (!stack) return null;
    return Array.prototype.slice.call(stack.children).find(function (section) {
      var heading = section.querySelector("h1, h2, h3, h4");
      return heading && pattern.test(textOf(heading));
    }) || null;
  }

  function buildHomeResumeCard(state) {
    var section = create("section", "bs-panel bs-home-resume-card");
    section.appendChild(create("div", "bs-panel-label", "Ton point d'entree"));
    section.appendChild(create("h3", "bs-home-card-title", "Commencer ta strategie de marque"));
    section.appendChild(create("p", "bs-home-card-copy", "Retrouve tout de suite la prochaine etape utile du parcours, avec un repere clair sur la suite."));

    var stats = create("div", "bs-home-resume-stats");
    var moduleStat = create("div", "bs-home-stat");
    moduleStat.appendChild(create("span", "bs-home-stat-label", "Module actuel"));
    moduleStat.appendChild(create("strong", "bs-home-stat-value", state.currentModule.title));
    stats.appendChild(moduleStat);

    var stepStat = create("div", "bs-home-stat");
    stepStat.appendChild(create("span", "bs-home-stat-label", "Etape"));
    stepStat.appendChild(create("strong", "bs-home-stat-value", String(state.activeIndex + 1) + " / " + MODULES.length));
    stats.appendChild(stepStat);

    var timeStat = create("div", "bs-home-stat");
    timeStat.appendChild(create("span", "bs-home-stat-label", "Temps restant"));
    timeStat.appendChild(create("strong", "bs-home-stat-value", "Env. " + state.remainingMinutes + " min"));
    stats.appendChild(timeStat);

    section.appendChild(stats);

    var action = create("a", "bs-pill-btn bs-home-primary-action", state.activeIndex > 0 ? "Reprendre le parcours \u2192" : "Commencer ma strategie de marque \u2192");
    action.href = state.currentModule.href;
    section.appendChild(action);
    return section;
  }

  function buildHomeAboutCard() {
    var section = create("section", "bs-home-section");
    var heading = create("div", "bs-home-section-head");
    heading.appendChild(create("div", "bs-panel-label", "Introduction"));
    heading.appendChild(create("h3", "bs-home-card-title", "Qui te propose cette offre"));
    heading.appendChild(create("p", "bs-home-card-copy", "Decouvre le cadre, l'intention et l'approche derriere Brand Studio avant d'entrer dans les modules."));
    section.appendChild(heading);

    var card = create("article", "bs-panel bs-home-module-card");
    card.appendChild(create("div", "bs-home-module-status", "Introduction"));
    card.appendChild(create("h4", "bs-home-module-title", "Qui te propose cette offre"));
    card.appendChild(create("p", "bs-home-module-copy", "Une presentation claire de l'accompagnement, pensee comme une entree independante avant le parcours de travail."));
    var action = create("a", "bs-pill-btn bs-home-module-action", "Ouvrir");
    action.href = MODULES[0].href;
    card.appendChild(action);
    section.appendChild(card);
    return section;
  }

  function buildHomeModuleCards(state) {
    var section = create("section", "bs-home-section");
    var heading = create("div", "bs-home-section-head");
    heading.appendChild(create("div", "bs-panel-label", "Modules"));
    heading.appendChild(create("h3", "bs-home-card-title", "Le parcours complet"));
    heading.appendChild(create("p", "bs-home-card-copy", "Retrouve chaque module dans une grille claire, avec son statut et un acces direct."));
    section.appendChild(heading);

    var grid = create("div", "bs-home-modules-grid");
    MODULES.slice(1).forEach(function (module, gridIndex) {
      var moduleIndex = gridIndex + 1;
      var card = create("article", "bs-panel bs-home-module-card");
      if (moduleIndex === state.activeIndex) card.classList.add("is-current");
      if (moduleIndex < state.activeIndex) card.classList.add("is-complete");
      if (moduleIndex > state.activeIndex) card.classList.add("is-upcoming");

      var top = create("div", "bs-home-module-top");
      top.appendChild(create("span", "bs-module-index", String(moduleIndex + 1)));
      top.appendChild(create("span", "bs-home-module-status", moduleIndex < state.activeIndex ? "Vu" : (moduleIndex === state.activeIndex ? "En cours" : "A ouvrir")));
      card.appendChild(top);

      card.appendChild(create("h4", "bs-home-module-title", module.title));
      card.appendChild(create("p", "bs-home-module-copy", ((getModuleMeta(module.href) || {}).description) || "Une etape claire pour faire avancer ta marque avec coherence."));

      var action = create("a", "bs-pill-btn bs-home-module-action", moduleIndex === state.activeIndex ? "Continuer" : (moduleIndex < state.activeIndex ? "Rouvrir" : "Ouvrir"));
      action.href = module.href;
      card.appendChild(action);
      grid.appendChild(card);
    });

    section.appendChild(grid);
    return section;
  }

  function buildHomeLearningCard(sourceSection) {
    var section = create("section", "bs-home-section");
    var heading = create("div", "bs-home-section-head");
    heading.appendChild(create("div", "bs-panel-label", "Contenu pedagogique"));
    heading.appendChild(create("h3", "bs-home-card-title", "Script video introductive"));
    heading.appendChild(create("p", "bs-home-card-copy", "Le point d'entree editorial du parcours, conserve dans une carte simple et plus lisible."));
    section.appendChild(heading);

    var card = create("div", "bs-panel bs-home-learning-card");
    var figure = sourceSection && sourceSection.querySelector ? sourceSection.querySelector("figure.bs-hero-story, figure.bs-figure-story") : null;
    if (figure) {
      card.appendChild(figure.cloneNode(true));
    }
    var paragraphs = sourceSection ? Array.prototype.slice.call(sourceSection.querySelectorAll("p")) : [];
    var copy = paragraphs.map(function (node) { return textOf(node); }).filter(function (value) { return value && value.length > 20; }).slice(0, 2);
    if (copy.length) {
      var body = create("div", "bs-home-learning-copy");
      copy.forEach(function (value) {
        body.appendChild(create("p", "", value));
      });
      card.appendChild(body);
    }
    section.appendChild(card);
    return section;
  }

  function buildHomeJourneyCard(state, sourceSection) {
    var section = create("section", "bs-panel bs-home-journey-card");
    section.appendChild(create("div", "bs-panel-label", "Ton parcours"));
    section.appendChild(create("h3", "bs-home-card-title", "Progression globale"));
    section.appendChild(create("p", "bs-home-card-copy", "Une vision claire de l'avancement global et des modules deja traverses."));

    var row = create("div", "bs-progress-row");
    row.appendChild(create("div", "bs-progress-value", state.percent + "%"));
    row.appendChild(create("div", "bs-progress-copy", state.completedCount + " module(s) explores"));
    section.appendChild(row);

    var track = create("div", "bs-progress-track");
    var bar = create("div", "bs-progress-bar");
    bar.style.width = state.percent + "%";
    track.appendChild(bar);
    section.appendChild(track);

    var list = create("div", "bs-home-journey-list");
    Array.prototype.slice.call((sourceSection && sourceSection.querySelectorAll("ul li")) || []).slice(0, 6).forEach(function (item) {
      list.appendChild(create("div", "bs-home-journey-item", textOf(item)));
    });
    if (!list.children.length) {
      list.appendChild(create("div", "bs-home-journey-item", "Clarifier l'ADN de marque"));
      list.appendChild(create("div", "bs-home-journey-item", "Definir le positionnement"));
      list.appendChild(create("div", "bs-home-journey-item", "Structurer la direction artistique"));
    }
    section.appendChild(list);
    return section;
  }

  function customizeHomePage(article, idx) {
    if (!article || !isHomePage()) return;
    var body = article.querySelector(".page-body");
    var stack = body && body.querySelector(".bs-content-stack");
    if (!stack || stack.dataset.bsHomeCustomized === "1") return;

    var state = getJourneyState(idx);
    var introSection = stack.querySelector(".bs-intro-card");
    var journeySection = findSectionByHeading(stack, /Ce que vous allez construire ici/i);
    var dashboard = create("div", "bs-home-dashboard");

    dashboard.appendChild(buildHomeResumeCard(state));
    dashboard.appendChild(buildHomeAboutCard());
    dashboard.appendChild(buildHomeModuleCards(state));
    dashboard.appendChild(buildHomeLearningCard(introSection));
    dashboard.appendChild(buildHomeJourneyCard(state, journeySection));

    stack.insertBefore(dashboard, stack.firstChild);

    if (journeySection && journeySection.parentNode) journeySection.remove();
    if (introSection && introSection.parentNode) introSection.remove();
    stack.dataset.bsHomeCustomized = "1";
  }

  function buildSidebar(idx) {
    var sidebar = create("aside", "bs-sidebar");
    var journey = getJourneyState(idx);

    var brand = create("section", "bs-panel bs-brand-panel");
    var brandTag = create("div", "bs-brand-tag", "Espace de travail");
    var brandImg = create("img", "bs-brand-mark");
    brandImg.src = LOGO_SRC;
    brandImg.alt = "Brand Studio";
    var brandTitle = create("h2", "bs-brand-title", "Brand Studio");
    var brandCopy = create("p", "bs-brand-copy", "Un espace de travail \u00e9ditorial pour construire ta marque avec plus de clart\u00e9, de coh\u00e9rence et de d\u00e9sirabilit\u00e9.");
    brand.appendChild(brandTag);
    brand.appendChild(brandImg);
    brand.appendChild(brandTitle);
    brand.appendChild(brandCopy);

    var progress = create("section", "bs-panel bs-progress-panel");
    progress.appendChild(create("div", "bs-panel-label", isHomePage() ? "Ton parcours" : "Progression"));
    var row = create("div", "bs-progress-row");
    var value = create("div", "bs-progress-value", idx >= 0 ? String(Math.round(((idx + 1) / MODULES.length) * 100)) + "%" : String(journey.percent) + "%");
    var copy = create("div", "bs-progress-copy", idx >= 0 ? "Module " + (idx + 1) + " sur " + MODULES.length : (journey.completedCount + " module(s) explores"));
    row.appendChild(value);
    row.appendChild(copy);
    progress.appendChild(row);
    var track = create("div", "bs-progress-track");
    var bar = create("div", "bs-progress-bar");
    bar.style.width = (idx >= 0 ? ((idx + 1) / MODULES.length) * 100 : journey.percent) + "%";
    track.appendChild(bar);
    progress.appendChild(track);

    sidebar.appendChild(brand);
    sidebar.appendChild(progress);
    if (!isHomePage()) {
      var modules = create("nav", "bs-panel bs-modules-panel");
      modules.appendChild(create("div", "bs-panel-label", "Modules"));
      var list = create("div", "bs-modules-list");
      MODULES.forEach(function (module, moduleIndex) {
        var link = create("a", "bs-module-link");
        link.href = module.href;
        if (moduleIndex === idx) link.classList.add("is-current");
        if (moduleIndex < idx) link.classList.add("is-complete");
        if (moduleIndex > idx) link.classList.add("is-upcoming");
        var indexEl = create("span", "bs-module-index", String(moduleIndex + 1));
        var textWrap = create("span");
        textWrap.appendChild(create("span", "bs-module-kicker", moduleIndex === idx ? "Section active" : "Module"));
        textWrap.appendChild(create("span", "bs-module-title", module.title));
        var tail = create("span", "bs-module-kicker", moduleIndex < idx ? "Vu" : (moduleIndex === idx ? "En cours" : "Ouvrir"));
        link.appendChild(indexEl);
        link.appendChild(textWrap);
        link.appendChild(tail);
        list.appendChild(link);
      });
      modules.appendChild(list);
      sidebar.appendChild(modules);
    }
    return sidebar;
  }

  function buildTopbar(article, idx) {
    var topbar = create("div", "bs-panel bs-topbar");
    var copy = create("div", "bs-topbar-copy");
    var title = textOf(article.querySelector(".page-title")) || "Brand Studio";
    var headings = collectHeadings(article);
    var stats = completionStats(article);
    copy.appendChild(create("h2", "bs-topbar-title", title));
    copy.appendChild(create("p", "bs-topbar-subtitle", idx >= 0 ? "Module " + (idx + 1) + " | Brand Studio" : "Brand Studio"));
    var meta = create("div", "bs-topbar-meta");
    var progressChip = create("span", "bs-topbar-chip", stats.percent + "% compl\u00e9t\u00e9");
    progressChip.setAttribute("data-bs-progress-chip", "1");
    meta.appendChild(progressChip);
    meta.appendChild(create("span", "bs-topbar-chip bs-topbar-chip-current", headings.length ? headings[0].text : "D\u00e9marrage"));
    copy.appendChild(meta);

    topbar.appendChild(copy);
    return topbar;
  }

  function collectHeadings(article) {
    return Array.prototype.slice.call(article.querySelectorAll(".page-body h2, .page-body h3, .page-body h4"))
      .map(function (heading, index) {
        if (!heading.id) heading.id = "bs-heading-" + (index + 1);
        return {
          id: heading.id,
          text: textOf(heading)
        };
      })
      .filter(function (item) { return !!item.text; })
      .slice(0, 6);
  }

  function completionStats(article) {
    var fields = Array.prototype.slice.call(article.querySelectorAll("textarea.brand-zone-block, textarea.brand-zone, .brand-zone-inline[contenteditable='true']"));
    var filledText = fields.filter(function (el) {
      if (!el) return false;
      if (el.classList && el.classList.contains("brand-zone-inline")) {
        return textOf(el).length > 0;
      }
      if (el.getAttribute && el.getAttribute("data-prompt-visible") === "1") return false;
      return ((el.value || "").trim()).length > 0;
    }).length;
    var checks = Array.prototype.slice.call(article.querySelectorAll(".to-do-list > li"));
    var checked = Array.prototype.slice.call(article.querySelectorAll(".checkbox-on")).length;
    var baseTotal = fields.length + checks.length;
    var baseDone = filledText + checked;
    var percent = baseTotal ? Math.round((baseDone / baseTotal) * 100) : 0;
    return {
      filledText: filledText,
      totalText: fields.length,
      checked: checked,
      totalChecks: checks.length,
      percent: percent
    };
  }

  function buildAside(article, idx) {
    if (isHomePage()) {
      var homeAside = create("aside", "bs-aside");
      var journey = getJourneyState(idx);
      var currentMeta = getModuleMeta(journey.currentModule.href) || {};

      var quick = create("section", "bs-panel bs-aside-card");
      quick.appendChild(create("div", "bs-aside-label", "Apercu rapide"));
      quick.appendChild(create("h3", "bs-aside-title", "Apercu rapide"));
      quick.appendChild(create("p", "bs-aside-copy", "Une synthese compacte du point d'entree de ton espace Brand Studio."));
      var quickBody = create("div", "bs-preview-card");
      quickBody.appendChild(create("h4", "bs-preview-title", journey.currentModule.title));
      var quickMeta = create("div", "bs-preview-meta");
      quickMeta.appendChild(create("span", "bs-chip", "Etape " + (journey.activeIndex + 1)));
      quickMeta.appendChild(create("span", "bs-chip", journey.remainingMinutes + " min env."));
      quickMeta.appendChild(create("span", "bs-chip", journey.percent + "% parcours"));
      quickBody.appendChild(quickMeta);
      quick.appendChild(quickBody);

      var focus = create("section", "bs-panel bs-aside-card bs-focus-card");
      focus.appendChild(create("div", "bs-aside-label", "Focus"));
      focus.appendChild(create("h3", "bs-aside-title", "Focus du moment"));
      focus.appendChild(create("p", "bs-aside-copy", currentMeta.description || "Le prochain bloc a traiter pour garder une progression fluide et lisible."));
      var focusBody = create("div", "bs-preview-card");
      focusBody.appendChild(create("div", "bs-focus-kicker", "Module prioritaire"));
      focusBody.appendChild(create("h4", "bs-preview-title bs-focus-title", journey.currentModule.title));
      focusBody.appendChild(create("p", "bs-focus-copy", "Reprends ici pour conserver l'elan du parcours et avancer sans te disperser."));
      var focusAction = create("a", "bs-pill-btn bs-home-module-action", "Continuer");
      focusAction.href = journey.currentModule.href;
      focusBody.appendChild(focusAction);
      focus.appendChild(focusBody);

      var progress = create("section", "bs-panel bs-aside-card");
      progress.appendChild(create("div", "bs-aside-label", "Progression"));
      progress.appendChild(create("h3", "bs-aside-title", "Progression globale"));
      progress.appendChild(create("p", "bs-aside-copy", "Visualise l'avancement global du parcours en un coup d'oeil."));
      var progressBody = create("div", "bs-preview-card");
      var progressRow = create("div", "bs-progress-row");
      progressRow.appendChild(create("div", "bs-progress-value", journey.percent + "%"));
      progressRow.appendChild(create("div", "bs-progress-copy", journey.completedCount + " sur " + MODULES.length + " modules"));
      progressBody.appendChild(progressRow);
      var progressTrack = create("div", "bs-progress-track");
      var progressBar = create("div", "bs-progress-bar");
      progressBar.style.width = journey.percent + "%";
      progressTrack.appendChild(progressBar);
      progressBody.appendChild(progressTrack);
      progress.appendChild(progressBody);

      homeAside.appendChild(quick);
      homeAside.appendChild(focus);
      homeAside.appendChild(progress);
      return homeAside;
    }

    var aside = create("aside", "bs-aside");
    var title = textOf(article.querySelector(".page-title")) || "Brand Studio";
    var cover = article.querySelector(".page-cover-image");
    var headings = collectHeadings(article);
    var stats = completionStats(article);

    var quick = create("section", "bs-panel bs-aside-card");
    quick.appendChild(create("div", "bs-aside-label", "Vue rapide"));
    quick.appendChild(create("h3", "bs-aside-title", "Aper\u00e7u rapide"));
    quick.appendChild(create("p", "bs-aside-copy", "Une lecture synth\u00e9tique de la section active pour garder le cap pendant le remplissage."));
    var quickCard = create("div", "bs-preview-card");
    if (cover) {
      var coverClone = create("img", "bs-preview-cover");
      coverClone.src = cover.getAttribute("src") || "";
      coverClone.alt = title;
      quickCard.appendChild(coverClone);
    }
    quickCard.appendChild(create("h4", "bs-preview-title", title));
    var meta = create("div", "bs-preview-meta");
    meta.appendChild(create("span", "bs-chip", idx >= 0 ? "Module " + (idx + 1) : "Module"));
    var percentChip = create("span", "bs-chip", stats.percent + "% compl\u00e9t\u00e9");
    percentChip.setAttribute("data-bs-aside-progress-chip", "1");
    meta.appendChild(percentChip);
    var fieldsChip = create("span", "bs-chip", stats.filledText + "/" + stats.totalText + " champs");
    fieldsChip.setAttribute("data-bs-fields-chip", "1");
    fieldsChip.hidden = !stats.totalText;
    meta.appendChild(fieldsChip);
    quickCard.appendChild(meta);
    quick.appendChild(quickCard);

    var focus = create("section", "bs-panel bs-aside-card bs-focus-card");
    focus.appendChild(create("div", "bs-aside-label", "Focus"));
    focus.appendChild(create("h3", "bs-aside-title", "Focus du moment"));
    focus.appendChild(create("p", "bs-aside-copy", "Un rep\u00e8re court pour savoir o\u00f9 tu en es et quoi traiter maintenant."));
    var focusBody = create("div", "bs-preview-card");
    var focusKicker = create("div", "bs-focus-kicker", "Section active");
    var focusTitle = create("h4", "bs-preview-title bs-focus-title", headings.length ? headings[0].text : title);
    focusTitle.setAttribute("data-bs-current-heading", "1");
    var focusText = create("p", "bs-focus-copy", stats.totalText ? (stats.filledText + " champ(s) rempli(s) sur " + stats.totalText + " dans ce module.") : "Le contenu de cette page est pr\u00eat \u00e0 \u00eatre explor\u00e9 section par section.");
    focusText.setAttribute("data-bs-progress-copy", "1");
    var focusProgress = create("div", "bs-focus-progress");
    var focusBar = create("div", "bs-focus-progress-bar");
    focusBar.style.width = stats.percent + "%";
    focusBar.setAttribute("data-bs-current-progress", "1");
    focusProgress.appendChild(focusBar);
    focusBody.appendChild(focusKicker);
    focusBody.appendChild(focusTitle);
    focusBody.appendChild(focusText);
    focusBody.appendChild(focusProgress);
    focus.appendChild(focusBody);

    var brandbook = create("section", "bs-panel bs-aside-card");
    brandbook.appendChild(create("div", "bs-aside-label", "Brand Book"));
    brandbook.appendChild(create("h3", "bs-aside-title", "Livrable en cours"));
    brandbook.appendChild(create("p", "bs-aside-copy", "Les rep\u00e8res de cette section, mis en forme comme un document de studio premium."));
    var brandCard = create("div", "bs-preview-card");
    var collage = create("img", "bs-preview-cover");
    collage.src = COLLAGE_MAIN;
    collage.alt = "Collage graphique";
    brandCard.appendChild(collage);
    var list = create("div", "bs-heading-list");
    headings.forEach(function (item, index) {
      var link = create("a", "bs-heading-item");
      link.href = "#" + item.id;
      var num = create("strong", "", String(index + 1));
      var label = create("span", "", item.text);
      link.appendChild(num);
      link.appendChild(label);
      list.appendChild(link);
    });
    if (!headings.length) {
      list.appendChild(create("div", "bs-heading-item", "Le contenu de cette section appara\u00eetra ici au fil du remplissage."));
    }
    brandCard.appendChild(list);
    brandbook.appendChild(brandCard);

    aside.appendChild(quick);
    aside.appendChild(focus);
    aside.appendChild(brandbook);
    return aside;
  }

  function buildBottomBar(idx) {
    var bar = create("div", "bs-panel bs-bottom-bar");
    bar.setAttribute("data-bs-bottom", "1");
    var progress = create("div", "bs-bottom-progress");
    progress.appendChild(create("div", "bs-panel-label", "Parcours"));
    var row = create("div", "bs-progress-row");
    row.appendChild(create("div", "bs-progress-copy", idx >= 0 ? MODULES[idx].title : "Brand Studio"));
    row.appendChild(create("div", "bs-progress-copy", idx >= 0 ? (idx + 1) + "/" + MODULES.length : ""));
    progress.appendChild(row);
    var track = create("div", "bs-progress-track");
    var fill = create("div", "bs-progress-bar");
    fill.style.width = (idx >= 0 ? ((idx + 1) / MODULES.length) * 100 : 0) + "%";
    track.appendChild(fill);
    progress.appendChild(track);
    bar.appendChild(progress);
    return bar;
  }

  function moveUtilityButtons(topbar, bottomBar) {
    function moveNow() {
      var actions = topbar.querySelector(".bs-topbar-actions");
      var logout = document.querySelector("button[data-logout='1']");
      if (logout && actions && logout.parentNode !== actions) {
        logout.classList.add("bs-secondary-btn");
        actions.appendChild(logout);
      }

      var navLinks = Array.prototype.slice.call(document.querySelectorAll("a[data-bottom-nav='1']"));
      var anchor = bottomBar.querySelector(".bs-bottom-progress");
      navLinks.forEach(function (link, index) {
        if (link.parentNode !== bottomBar) {
          link.classList.add(index === navLinks.length - 1 ? "bs-primary-nav" : "bs-secondary-nav");
          bottomBar.insertBefore(link, anchor);
        }
      });
    }

    moveNow();
    var observer = new MutationObserver(moveNow);
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function refreshCompletionUI(article) {
    if (!article) return;
    var stats = completionStats(article);
    var progressChip = document.querySelector("[data-bs-progress-chip='1']");
    var asideProgressChip = document.querySelector("[data-bs-aside-progress-chip='1']");
    var fieldsChip = document.querySelector("[data-bs-fields-chip='1']");
    var progressCopy = document.querySelector("[data-bs-progress-copy='1']");
    var progressBar = document.querySelector("[data-bs-current-progress='1']");

    if (progressChip) progressChip.textContent = stats.percent + "% compl\u00e9t\u00e9";
    if (asideProgressChip) asideProgressChip.textContent = stats.percent + "% compl\u00e9t\u00e9";
    if (fieldsChip) {
      fieldsChip.hidden = !stats.totalText;
      fieldsChip.textContent = stats.filledText + "/" + stats.totalText + " champs";
    }
    if (progressCopy) {
      progressCopy.textContent = stats.totalText
        ? (stats.filledText + " champ(s) rempli(s) sur " + stats.totalText + " dans ce module.")
        : "Le contenu de cette page est pr\u00eat \u00e0 \u00eatre explor\u00e9 section par section.";
    }
    if (progressBar) progressBar.style.width = stats.percent + "%";
  }

  function bindSaveIndicator(root, article) {
    var saveBtn = root.querySelector("[data-bs-save-indicator='1']");
    if (!saveBtn) return;
    var timer = null;

    function showState(label, className) {
      saveBtn.textContent = label;
      saveBtn.classList.remove("is-dirty", "is-saved");
      if (className) saveBtn.classList.add(className);
    }

    function markDirty() {
      refreshCompletionUI(article);
      showState("Enregistrement...", "is-dirty");
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        showState("Enregistr\u00e9", "is-saved");
      }, 500);
    }

    Array.prototype.slice.call(document.querySelectorAll("textarea, [contenteditable='true'], .brand-zone-inline")).forEach(function (field) {
      field.addEventListener("input", markDirty, { passive: true });
    });

    root.addEventListener("click", function (event) {
      var target = event.target;
      if (!target || !target.closest) return;
      if (!target.closest(".to-do-list .checkbox, .to-do-list .to-do-children-unchecked, .to-do-list .to-do-children-checked")) return;
      window.setTimeout(function () {
        refreshCompletionUI(article);
      }, 0);
    });

    saveBtn.addEventListener("click", function () {
      var note = document.querySelector(".bs-floating-note");
      if (!note) {
        note = create("div", "bs-floating-note", "Les modifications sont conserv\u00e9es automatiquement.");
        document.body.appendChild(note);
      }
      note.classList.add("is-visible");
      window.setTimeout(function () {
        note.classList.remove("is-visible");
      }, 1600);
    });
  }

  function bindHeadingSpy(root) {
    var links = Array.prototype.slice.call(root.querySelectorAll(".bs-heading-item[href^='#']"));
    if (!links.length) return;
    var currentChip = document.querySelector(".bs-topbar-chip-current");
    var currentHeading = document.querySelector("[data-bs-current-heading='1']");

    var map = links.map(function (link) {
      var id = (link.getAttribute("href") || "").slice(1);
      var target = id ? document.getElementById(id) : null;
      return target ? { link: link, target: target } : null;
    }).filter(function (item) {
      return !!item;
    });

    if (!map.length) return;

    function updateActive() {
      var active = map[0];
      map.forEach(function (item) {
        var rect = item.target.getBoundingClientRect();
        if (rect.top <= 180) active = item;
      });
      map.forEach(function (item) {
        item.link.classList.toggle("is-active", item === active);
      });
      if (currentChip) currentChip.textContent = textOf(active.target) || "Section active";
      if (currentHeading) currentHeading.textContent = textOf(active.target) || "Section active";
    }

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
  }

  function mountShell() {
    if (document.body.dataset.bsShellMounted === "1") return;
    var article = document.querySelector("article.page");
    if (!article) return;

    var idx = currentIndex();
    var shell = create("div", "bs-shell");
    var sidebar = buildSidebar(idx);
    var main = create("main", "bs-main");
    applyHomeFinalAdjustments(article);
    applyVisionFinalAdjustments(article);
    setPageDescription(article);
    repairCopy(article);
    normalizeLinks(article);
    normalizeTables(article);
    mountFallbackFields(article);
    decorateBodyContent(article.querySelector(".page-body"));
    mountUploadSlots(article.querySelector(".page-body"));
    groupBodyContent(article.querySelector(".page-body"));
    customizeHomePage(article, idx);
    var topbar = buildTopbar(article, idx);
    var aside = buildAside(article, idx);
    var bottomBar = buildBottomBar(idx);

    main.appendChild(topbar);
    main.appendChild(article);
    shell.appendChild(sidebar);
    shell.appendChild(main);
    shell.appendChild(aside);

    document.body.insertBefore(shell, document.body.firstChild);
    document.body.appendChild(bottomBar);
    document.body.classList.add("bs-shell-ready");
    document.body.dataset.bsShellMounted = "1";
    if (idx >= 0) document.body.classList.add("bs-module-" + (idx + 1));
    if (idx === 0) document.body.classList.add("bs-page-offre");
    if (idx === 1) document.body.classList.add("bs-page-vision");
    if (idx === 2) document.body.classList.add("bs-page-positionnement");
    if (idx === 3) document.body.classList.add("bs-page-personnalite");
    if (idx === 4) document.body.classList.add("bs-page-creation");
    if (idx === 5) document.body.classList.add("bs-page-bonus");
    if (currentPath() === norm(MENU_URL)) document.body.classList.add("bs-page-home");
    if (idx >= 0) rememberCurrentModule(idx);

    moveUtilityButtons(topbar, bottomBar);
    refreshCompletionUI(article);
    bindSaveIndicator(document.body, article);
    bindHeadingSpy(aside);
  }

  window.addEventListener("load", mountShell);
})();
