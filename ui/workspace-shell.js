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

  function create(tag, className, text) {
    var el = document.createElement(tag);
    if (className) el.className = className;
    if (typeof text === "string") el.textContent = text;
    return el;
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
      if (figure) figure.classList.add("bs-resource-card");
    });

    Array.prototype.slice.call(body.querySelectorAll("figure.link-to-page")).forEach(function (figure) {
      figure.classList.add("bs-nav-card");
    });

    Array.prototype.slice.call(body.querySelectorAll("ul.bulleted-list")).forEach(function (list) {
      list.classList.add("bs-bulleted-list");
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

      if (node.matches && node.matches("h2, h3, h4")) {
        var next = node.nextElementSibling;
        if (next && next.matches("p") && textOf(next).length > 90) {
          next.classList.add("bs-section-intro");
        }
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
        section.setAttribute("data-step-label", "Etape " + index);
      }
      stack.appendChild(section);
      group.forEach(function (node) {
        section.appendChild(node);
      });
      if (section.querySelector(".column-list")) section.classList.add("bs-section-has-columns");
      if (section.querySelector("figure.callout")) section.classList.add("bs-section-has-callout");
      if (section.querySelector(".to-do-list")) section.classList.add("bs-section-has-checklist");
      if (section.querySelector("figure.image")) section.classList.add("bs-section-has-media");
      if (section.querySelector("ol.numbered-list")) section.classList.add("bs-section-has-steps");
      if (section.querySelector("details")) section.classList.add("bs-section-has-folds");
      if (section.querySelector(".link-to-page")) section.classList.add("bs-section-has-navcards");
      if (section.querySelector("table")) section.classList.add("bs-section-has-table");
      if (section.querySelector(".bs-placeholder-grid")) section.classList.add("bs-section-has-placeholders");
      if (section.querySelector(".bs-work-table")) section.classList.add("bs-section-has-worktable");
      if (section.querySelectorAll("p.bs-body-long").length >= 2) section.classList.add("bs-section-has-longform");
      if (section.querySelectorAll("details").length >= 2) section.classList.add("bs-section-has-fold-cluster");
      if (section.querySelectorAll("figure.callout, blockquote").length >= 2) section.classList.add("bs-section-has-editorial-notes");
    });

    body.dataset.bsGrouped = "1";
  }

  function buildSidebar(idx) {
    var sidebar = create("aside", "bs-sidebar");

    var brand = create("section", "bs-panel bs-brand-panel");
    var brandTag = create("div", "bs-brand-tag", "Creative Workspace");
    var brandImg = create("img", "bs-brand-mark");
    brandImg.src = LOGO_SRC;
    brandImg.alt = "Brand Studio";
    var brandTitle = create("h2", "bs-brand-title", "Brand Studio");
    var brandCopy = create("p", "bs-brand-copy", "Un espace de travail editorial pour construire ta marque avec plus de clarte, de coherence et de desirabilite.");
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
    copy.appendChild(create("p", "bs-topbar-subtitle", idx >= 0 ? "Module " + (idx + 1) + " - Brand Studio" : "Brand Studio"));
    var meta = create("div", "bs-topbar-meta");
    meta.appendChild(create("span", "bs-topbar-chip", headings.length ? headings.length + " reperes" : "Section libre"));
    meta.appendChild(create("span", "bs-topbar-chip", stats.percent + "% complete"));
    meta.appendChild(create("span", "bs-topbar-chip bs-topbar-chip-current", headings.length ? headings[0].text : "Demarrage"));
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
    quick.appendChild(create("div", "bs-aside-label", "Quick Preview"));
    quick.appendChild(create("h3", "bs-aside-title", "Apercu rapide"));
    quick.appendChild(create("p", "bs-aside-copy", "Une lecture synthetique de la section active pour garder le cap pendant le remplissage."));
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
    meta.appendChild(create("span", "bs-chip", stats.percent + "% complete"));
    if (stats.totalText) meta.appendChild(create("span", "bs-chip", stats.filledText + "/" + stats.totalText + " champs"));
    quickCard.appendChild(meta);
    quick.appendChild(quickCard);

    var brandbook = create("section", "bs-panel bs-aside-card");
    brandbook.appendChild(create("div", "bs-aside-label", "Brand Book Preview"));
    brandbook.appendChild(create("h3", "bs-aside-title", "Livrable en cours"));
    brandbook.appendChild(create("p", "bs-aside-copy", "Les reperes de cette section, mis en forme comme un document de studio premium."));
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
      list.appendChild(create("div", "bs-heading-item", "Le contenu de cette section apparaitra ici au fil du remplissage."));
    }
    brandCard.appendChild(list);
    brandbook.appendChild(brandCard);

    aside.appendChild(quick);
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
        showState("Enregistre", "is-saved");
      }, 500);
    }

    Array.prototype.slice.call(document.querySelectorAll("textarea, input[contenteditable='true'], .brand-zone-inline")).forEach(function (field) {
      field.addEventListener("input", markDirty, { passive: true });
    });

    saveBtn.addEventListener("click", function () {
      var note = document.querySelector(".bs-floating-note");
      if (!note) {
        note = create("div", "bs-floating-note", "Les modifications sont conservees automatiquement.");
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
    var topbar = buildTopbar(article, idx);
    var aside = buildAside(article, idx);
    var bottomBar = buildBottomBar(idx);

    decorateBodyContent(article.querySelector(".page-body"));
    groupBodyContent(article.querySelector(".page-body"));

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
