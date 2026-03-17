import { MODULES, PRIMARY_NAV, QUICK_ACTIONS } from "./content.js";
import { getBrandCard, getJourneySnapshot } from "./store.js";

export function renderApp(root, store) {
  const state = store.getState();
  const snapshot = getJourneySnapshot(state);
  const brandCard = getBrandCard(state);
  const activeModule = snapshot.modules.find((module) => module.id === state.activeModuleId) || snapshot.modules[0];

  root.innerHTML = `
    <div class="studio-shell">
      <aside class="studio-sidebar">
        <div class="studio-sidebar__brand">
          <div class="studio-kicker">Brand Studio</div>
          <h1>Ton studio de marque</h1>
          <p>Une base plus claire, plus pilotable et plus simple a faire evoluer.</p>
        </div>

        <nav class="studio-nav">
          ${PRIMARY_NAV.map((item) => `
            <button class="studio-nav__item ${state.activeView === item.id ? "is-active" : ""}" data-view="${item.id}">
              ${item.label}
            </button>
          `).join("")}
        </nav>

        <section class="studio-panel">
          <div class="studio-panel__label">Progression globale</div>
          ${renderProgress(snapshot.progressPercent)}
          <p class="studio-meta">${snapshot.completedModules}/${snapshot.totalModules} modules completes</p>
          <p class="studio-meta">Env. ${snapshot.remainingMinutes} min restantes</p>
        </section>

        <section class="studio-panel">
          <div class="studio-panel__label">Modules</div>
          <div class="studio-module-list">
            ${snapshot.modules.map((module, index) => `
              <button class="studio-module-list__item ${module.id === activeModule.id ? "is-current" : ""}" data-module="${module.id}">
                <span class="studio-module-list__index">${index + 1}</span>
                <span>
                  <strong>${escapeHtml(module.title)}</strong>
                  <small>${module.progress.done ? "Termine" : module.progress.percent + "% complete"}</small>
                </span>
              </button>
            `).join("")}
          </div>
        </section>
      </aside>

      <main class="studio-main">
        ${renderTopbar(state, snapshot)}
        ${renderView(state, activeModule, snapshot, brandCard)}
      </main>

      <aside class="studio-aside">
        <section class="studio-panel">
          <div class="studio-panel__label">Apercu de marque</div>
          <h3>${escapeHtml(brandCard.brandName)}</h3>
          <p class="studio-side-copy">${escapeHtml(brandCard.brandPromise || "Ta promesse apparaitra ici des que tu la formules.")}</p>
        </section>

        <section class="studio-panel">
          <div class="studio-panel__label">Focus du moment</div>
          <h3>${escapeHtml(snapshot.nextModule.title)}</h3>
          <p class="studio-side-copy">${escapeHtml(snapshot.nextModule.summary)}</p>
          <button class="studio-btn studio-btn--secondary" data-module="${snapshot.nextModule.id}">Continuer</button>
        </section>

        <section class="studio-panel">
          <div class="studio-panel__label">Brand Card live</div>
          <div class="brand-preview">
            <h4>${escapeHtml(brandCard.brandName)}</h4>
            <p>${escapeHtml(brandCard.mission || "Mission a definir")}</p>
            <ul>
              <li><strong>Promesse</strong> ${escapeHtml(brandCard.brandPromise || "A completer")}</li>
              <li><strong>Palette</strong> ${escapeHtml(brandCard.colorPalette || "A definir")}</li>
              <li><strong>Typo</strong> ${escapeHtml(brandCard.typographyChoice || "A definir")}</li>
            </ul>
          </div>
        </section>
      </aside>
    </div>
  `;

  bindEvents(root, store, state, activeModule, brandCard);
}

function renderTopbar(state, snapshot) {
  const activeLabel = PRIMARY_NAV.find((item) => item.id === state.activeView)?.label || "Dashboard";
  return `
    <header class="studio-topbar">
      <div>
        <div class="studio-kicker">Navigation principale</div>
        <h2>${activeLabel}</h2>
      </div>
      <div class="studio-topbar__meta">
        <span>${snapshot.completedModules} modules completes</span>
        <span>${snapshot.progressPercent}%</span>
      </div>
    </header>
  `;
}

function renderView(state, activeModule, snapshot, brandCard) {
  if (state.activeView === "dashboard") return renderDashboard(snapshot, brandCard);
  if (state.activeView === "journey") return renderJourney(activeModule, snapshot, state.answers);
  if (state.activeView === "brand-card") return renderBrandCard(brandCard);
  if (state.activeView === "export") return renderExport(brandCard);
  return renderDashboard(snapshot, brandCard);
}

function renderDashboard(snapshot, brandCard) {
  return `
    <section class="studio-hero">
      <div>
        <div class="studio-kicker">Dashboard</div>
        <h3>Reprendre ton systeme de marque sans repartir d'un guide brut.</h3>
        <p>On recentre Brand Studio autour d'un pilotage clair : progression, modules, Brand Card et export.</p>
      </div>
      <img src="/Elments_nouvelle_comm.png" alt="Collage Brand Studio" />
    </section>

    <section class="studio-grid studio-grid--two">
      <article class="studio-card studio-card--featured">
        <div class="studio-card__label">Module actuel</div>
        <h3>${escapeHtml(snapshot.nextModule.title)}</h3>
        <p>${escapeHtml(snapshot.nextModule.summary)}</p>
        <div class="studio-stats">
          <span><strong>Etape</strong>${snapshot.completedModules + 1}/${snapshot.totalModules}</span>
          <span><strong>Temps restant</strong>${snapshot.remainingMinutes} min</span>
          <span><strong>Progression</strong>${snapshot.progressPercent}%</span>
        </div>
        <button class="studio-btn studio-btn--primary" data-module="${snapshot.nextModule.id}">Continuer</button>
      </article>

      <article class="studio-card">
        <div class="studio-card__label">Apercu de la marque</div>
        <h3>${escapeHtml(brandCard.brandName)}</h3>
        <p>${escapeHtml(brandCard.brandBio || "Ta bio courte et ta promesse apparaitront ici pour garder un repere constant.")}</p>
      </article>
    </section>

    <section class="studio-grid studio-grid--three">
      ${QUICK_ACTIONS.map((action) => `
        <article class="studio-card studio-card--action">
          <div class="studio-card__label">Action rapide</div>
          <h3>${action.label}</h3>
          <p>${action.helper}</p>
          <button class="studio-btn studio-btn--secondary" data-action="${action.id}">Ouvrir</button>
        </article>
      `).join("")}
    </section>

    <section class="studio-card">
      <div class="studio-card__label">Modules du parcours</div>
      <div class="studio-grid studio-grid--two">
        ${snapshot.modules.map((module, index) => `
          <article class="module-card">
            <div class="module-card__header">
              <span class="module-card__index">${index + 1}</span>
              <span class="module-card__status">${module.progress.done ? "Termine" : module.progress.percent + "%"}</span>
            </div>
            <h3>${escapeHtml(module.title)}</h3>
            <p>${escapeHtml(module.summary)}</p>
            ${renderProgress(module.progress.percent)}
            <button class="studio-btn studio-btn--ghost" data-module="${module.id}">Ouvrir le module</button>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderJourney(activeModule, snapshot, answers) {
  return `
    <section class="studio-card">
      <div class="module-head">
        <div>
          <div class="studio-kicker">${escapeHtml(activeModule.eyebrow)}</div>
          <h3>${escapeHtml(activeModule.title)}</h3>
          <p>${escapeHtml(activeModule.summary)}</p>
        </div>
        <div class="module-head__meta">
          <span>${activeModule.duration} min</span>
          <span>${activeModule.progress.percent}% complete</span>
        </div>
      </div>
    </section>

    <section class="studio-grid studio-grid--two">
      <article class="studio-card">
        <div class="studio-card__label">Hero</div>
        <h3>${escapeHtml(activeModule.title)}</h3>
        <p>${escapeHtml(activeModule.intro)}</p>
      </article>

      <article class="studio-card">
        <div class="studio-card__label">Insight</div>
        <p>${escapeHtml(activeModule.insight)}</p>
      </article>
    </section>

    <section class="studio-grid studio-grid--two">
      <article class="studio-card">
        <div class="studio-card__label">Exemple</div>
        <p>${escapeHtml(activeModule.example)}</p>
      </article>
      <article class="studio-card">
        <div class="studio-card__label">Conseil</div>
        <p>${escapeHtml(activeModule.tip)}</p>
      </article>
    </section>

    <section class="studio-card">
      <div class="studio-card__label">Exercice</div>
      <p>${escapeHtml(activeModule.exercise)}</p>
    </section>

    <section class="studio-card">
      <div class="studio-card__label">Formulaire</div>
      <div class="field-grid">
        ${activeModule.fields.map((field) => `
          <label class="field-block">
            <span>${escapeHtml(field.label)}</span>
            ${field.type === "textarea"
              ? `<textarea data-field="${field.key}" placeholder="${escapeHtml(field.placeholder || "")}">${escapeHtml(answers[field.key] || "")}</textarea>`
              : `<input data-field="${field.key}" type="text" value="${escapeHtml(answers[field.key] || "")}" placeholder="${escapeHtml(field.placeholder || "")}" />`
            }
          </label>
        `).join("")}
      </div>
    </section>

    <section class="studio-card">
      <div class="studio-card__label">Resume</div>
      <ul class="summary-list">
        ${activeModule.summaryKeys.map((key) => `
          <li><strong>${escapeHtml(findFieldLabel(activeModule, key))}</strong><span>${escapeHtml(answers[key] || "A completer")}</span></li>
        `).join("")}
      </ul>
    </section>

    <section class="studio-card">
      <div class="studio-card__label">Navigation</div>
      <div class="studio-actions">
        <button class="studio-btn studio-btn--secondary" data-action="prev-module">Module precedent</button>
        <a class="studio-btn studio-btn--ghost" href="${activeModule.legacyHref}" target="_blank" rel="noopener">Voir le module source</a>
        <button class="studio-btn studio-btn--primary" data-action="next-module">Module suivant</button>
      </div>
    </section>
  `;
}

function renderBrandCard(brandCard) {
  return `
    <section class="brand-card-page">
      <header class="brand-card-page__header">
        <div>
          <div class="studio-kicker">Brand Card</div>
          <h3>${escapeHtml(brandCard.brandName)}</h3>
        </div>
        <span>${new Date().toLocaleDateString("fr-FR")}</span>
      </header>

      <div class="brand-card-grid">
        ${renderBrandCardSection("Mission", brandCard.mission)}
        ${renderBrandCardSection("Vision", brandCard.vision)}
        ${renderBrandCardSection("Valeurs", brandCard.values)}
        ${renderBrandCardSection("Cible ideale", brandCard.targetAudience)}
        ${renderBrandCardSection("Probleme client", brandCard.clientProblem)}
        ${renderBrandCardSection("Promesse", brandCard.brandPromise)}
        ${renderBrandCardSection("Offre", brandCard.offerSummary)}
        ${renderBrandCardSection("Personnalite", brandCard.personalityTraits)}
        ${renderBrandCardSection("On dit", brandCard.toneDo)}
        ${renderBrandCardSection("On evite", brandCard.toneAvoid)}
        ${renderBrandCardSection("Palette", brandCard.colorPalette)}
        ${renderBrandCardSection("Typographie", brandCard.typographyChoice)}
      </div>
    </section>
  `;
}

function renderExport(brandCard) {
  const exportText = buildExportText(brandCard);
  return `
    <section class="studio-grid studio-grid--three">
      <article class="studio-card">
        <div class="studio-card__label">Export PDF</div>
        <h3>Brand Card PDF</h3>
        <p>Structure prete pour la prochaine passe technique de generation PDF.</p>
        <button class="studio-btn studio-btn--primary" data-action="copy-export">Copier le contenu</button>
      </article>
      <article class="studio-card">
        <div class="studio-card__label">Export Canva</div>
        <h3>Brief de declinaison</h3>
        <p>Base de contenu prete a transmettre a un graphiste ou a Canva.</p>
        <button class="studio-btn studio-btn--secondary" data-action="copy-export">Copier le brief</button>
      </article>
      <article class="studio-card">
        <div class="studio-card__label">Texte brut</div>
        <h3>Fallback fiable</h3>
        <p>Copie tout le livrable si le rendu visuel n'est pas encore finalise.</p>
        <button class="studio-btn studio-btn--ghost" data-action="copy-export">Copier le texte</button>
      </article>
    </section>

    <section class="studio-card">
      <div class="studio-card__label">Contenu exportable</div>
      <pre class="export-preview">${escapeHtml(exportText)}</pre>
    </section>
  `;
}

function renderBrandCardSection(title, value) {
  return `
    <section class="brand-card-section">
      <div class="studio-card__label">${escapeHtml(title)}</div>
      <p>${escapeHtml(value || "A completer")}</p>
    </section>
  `;
}

function renderProgress(percent) {
  return `
    <div class="progress">
      <div class="progress__track">
        <div class="progress__bar" style="width:${percent}%"></div>
      </div>
      <span>${percent}%</span>
    </div>
  `;
}

function bindEvents(root, store, state, activeModule, brandCard) {
  root.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", function () {
      store.setView(this.getAttribute("data-view"));
    });
  });

  root.querySelectorAll("[data-module]").forEach((button) => {
    button.addEventListener("click", function () {
      store.setModule(this.getAttribute("data-module"));
    });
  });

  root.querySelectorAll("[data-field]").forEach((field) => {
    field.addEventListener("input", function () {
      store.setAnswer(this.getAttribute("data-field"), this.value);
    });
  });

  root.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", function () {
      const action = this.getAttribute("data-action");
      if (action === "open-export") {
        store.setView("export");
        return;
      }
      if (action === "copy-promise") {
        copyText(brandCard.brandPromise || "Promesse a completer");
        return;
      }
      if (action === "copy-palette") {
        copyText((brandCard.colorPalette || "Palette a definir") + "\n" + (brandCard.typographyChoice || "Typographie a definir"));
        return;
      }
      if (action === "copy-export") {
        copyText(buildExportText(brandCard));
        return;
      }
      if (action === "next-module") {
        const index = MODULES.findIndex((module) => module.id === activeModule.id);
        store.setModule(MODULES[Math.min(index + 1, MODULES.length - 1)].id);
        return;
      }
      if (action === "prev-module") {
        const index = MODULES.findIndex((module) => module.id === activeModule.id);
        store.setModule(MODULES[Math.max(index - 1, 0)].id);
      }
    });
  });
}

function buildExportText(brandCard) {
  return [
    brandCard.brandName,
    "",
    "MISSION",
    brandCard.mission || "A completer",
    "",
    "VISION",
    brandCard.vision || "A completer",
    "",
    "VALEURS",
    brandCard.values || "A completer",
    "",
    "PROMESSE",
    brandCard.brandPromise || "A completer",
    "",
    "CIBLE",
    brandCard.targetAudience || "A completer",
    "",
    "PROBLEME CLIENT",
    brandCard.clientProblem || "A completer",
    "",
    "OFFRE",
    brandCard.offerSummary || "A completer",
    "",
    "BIO",
    brandCard.brandBio || "A completer",
    "",
    "PALETTE",
    brandCard.colorPalette || "A definir",
    "",
    "TYPOGRAPHIE",
    brandCard.typographyChoice || "A definir",
    "",
    "ON DIT",
    brandCard.toneDo || "A completer",
    "",
    "ON EVITE",
    brandCard.toneAvoid || "A completer"
  ].join("\n");
}

function copyText(text) {
  const value = String(text || "").trim();
  if (!value) return;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(value).catch(function () {});
    return;
  }
  const helper = document.createElement("textarea");
  helper.value = value;
  document.body.appendChild(helper);
  helper.select();
  try {
    document.execCommand("copy");
  } catch (error) {}
  document.body.removeChild(helper);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function findFieldLabel(module, key) {
  const field = module.fields.find((item) => item.key === key);
  return field ? field.label : key;
}
