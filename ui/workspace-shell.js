(function () {
  var MODULES = [
    { href: "Qui te propose cette offre 295057792efe81ffa620f0a50d9b1a35.html", title: "Qui te propose cette offre ?" },
    { href: "Vision & marque 295057792efe81b4ac90f13958e3abad.html", title: "Vision & marque" },
    { href: "Positionnement 295057792efe810e98f4ffd60c74fad4.html", title: "Positionnement" },
    { href: "Personnalit\u00e9 & ton de marque 295057792efe81e6be2be44f4963e114.html", title: "Personnalit\u00e9 & ton de marque" },
    { href: "Cr\u00e9ation du document, \u00e0 toi de jouer ! 2ee057792efe80899ba8ef2c7e90fe6e.html", title: "Cr\u00e9ation du document, \u00e0 toi de jouer !" },
    { href: "SUPPORTS BONUS 2fe057792efe801c9accfc2deb83190e.html", title: "Supports bonus" }
  ];
  var MENU_URL = "En%20route%20vers%20ta%20nouvelle%20strat%C3%A9gie%20de%20marque%20295057792efe80aabdfeebdd4704fcac.html";
  var LOGO_SRC = "LAB_(17).png";
  var COLLAGE_MAIN = "Elments_nouvelle_comm.png";
  var USER_CODE_KEY = "brandstudio_user_code_v1";
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
    [/\bBlocs de synthese\b/g, "Blocs de synth\u00e8se"]
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

  function textOf(el) {
    return ((el && el.textContent) || "").replace(/\s+/g, " ").trim();
  }

  function getPageMeta() {
    return PAGE_META[currentPath()] || null;
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
    zone.setAttribute("data-placeholder", placeholder || "Votre réponse");
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
    });

    body.dataset.bsGrouped = "1";
  }

  function buildSidebar(idx) {
    var sidebar = create("aside", "bs-sidebar");

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
    progress.appendChild(create("div", "bs-panel-label", "Progression"));
    var row = create("div", "bs-progress-row");
    var value = create("div", "bs-progress-value", idx >= 0 ? String(Math.round(((idx + 1) / MODULES.length) * 100)) + "%" : "0%");
    var copy = create("div", "bs-progress-copy", idx >= 0 ? "Module " + (idx + 1) + " sur " + MODULES.length : "Parcours");
    row.appendChild(value);
    row.appendChild(copy);
    progress.appendChild(row);
    var track = create("div", "bs-progress-track");
    var bar = create("div", "bs-progress-bar");
    bar.style.width = (idx >= 0 ? ((idx + 1) / MODULES.length) * 100 : 0) + "%";
    track.appendChild(bar);
    progress.appendChild(track);

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

    sidebar.appendChild(brand);
    sidebar.appendChild(progress);
    sidebar.appendChild(modules);
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
    meta.appendChild(create("span", "bs-topbar-chip", headings.length ? headings.length + " rep\u00e8res" : "Section libre"));
    meta.appendChild(create("span", "bs-topbar-chip", stats.percent + "% compl\u00e9t\u00e9"));
    meta.appendChild(create("span", "bs-topbar-chip bs-topbar-chip-current", headings.length ? headings[0].text : "D\u00e9marrage"));
    copy.appendChild(meta);

    var actions = create("div", "bs-topbar-actions");
    var saveBtn = create("button", "bs-pill-btn bs-save-btn is-saved", "Enregistrement auto");
    saveBtn.type = "button";
    saveBtn.setAttribute("data-bs-save-indicator", "1");
    actions.appendChild(saveBtn);

    topbar.appendChild(copy);
    topbar.appendChild(actions);
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
    var textareas = Array.prototype.slice.call(article.querySelectorAll("textarea.brand-zone-block, textarea.brand-zone"));
    var filledText = textareas.filter(function (el) { return textOf(el).length > 0; }).length;
    var checks = Array.prototype.slice.call(article.querySelectorAll(".to-do-list > li"));
    var checked = Array.prototype.slice.call(article.querySelectorAll(".checkbox-on")).length;
    var baseTotal = textareas.length + checks.length;
    var baseDone = filledText + checked;
    var percent = baseTotal ? Math.round((baseDone / baseTotal) * 100) : 0;
    return {
      filledText: filledText,
      totalText: textareas.length,
      checked: checked,
      totalChecks: checks.length,
      percent: percent
    };
  }

  function buildAside(article, idx) {
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
    meta.appendChild(create("span", "bs-chip", stats.percent + "% compl\u00e9t\u00e9"));
    if (stats.totalText) meta.appendChild(create("span", "bs-chip", stats.filledText + "/" + stats.totalText + " champs"));
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

  function bindSaveIndicator(root) {
    var saveBtn = root.querySelector("[data-bs-save-indicator='1']");
    if (!saveBtn) return;
    var timer = null;

    function showState(label, className) {
      saveBtn.textContent = label;
      saveBtn.classList.remove("is-dirty", "is-saved");
      if (className) saveBtn.classList.add(className);
    }

    function markDirty() {
      showState("Enregistrement...", "is-dirty");
      if (timer) window.clearTimeout(timer);
      timer = window.setTimeout(function () {
        showState("Enregistr\u00e9", "is-saved");
      }, 500);
    }

    Array.prototype.slice.call(document.querySelectorAll("textarea, [contenteditable='true'], .brand-zone-inline")).forEach(function (field) {
      field.addEventListener("input", markDirty, { passive: true });
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
    setPageDescription(article);
    repairCopy(article);
    normalizeLinks(article);
    normalizeTables(article);
    mountFallbackFields(article);
    decorateBodyContent(article.querySelector(".page-body"));
    mountUploadSlots(article.querySelector(".page-body"));
    groupBodyContent(article.querySelector(".page-body"));
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

    moveUtilityButtons(topbar, bottomBar);
    bindSaveIndicator(document.body);
    bindHeadingSpy(aside);
  }

  window.addEventListener("load", mountShell);
})();
