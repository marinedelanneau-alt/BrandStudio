import { MODULES } from "./content.js";

const STORAGE_KEY = "brandstudio_saas_shell_v1";
const AUTH_KEY = "brandstudio_access_granted";
const USER_CODE_KEY = "brandstudio_user_code_v1";

export function hasAccess() {
  try {
    return localStorage.getItem(AUTH_KEY) === "1" && !!localStorage.getItem(USER_CODE_KEY);
  } catch (error) {
    return false;
  }
}

export function createStore() {
  let state = loadState();
  const listeners = new Set();

  function notify() {
    persistState(state);
    listeners.forEach((listener) => listener(state));
  }

  return {
    getState() {
      return state;
    },
    subscribe(listener) {
      listeners.add(listener);
      return function unsubscribe() {
        listeners.delete(listener);
      };
    },
    setView(view) {
      state = { ...state, activeView: view };
      notify();
    },
    setModule(moduleId) {
      state = { ...state, activeModuleId: moduleId, activeView: "journey" };
      notify();
    },
    setAnswer(key, value) {
      state = {
        ...state,
        answers: {
          ...state.answers,
          [key]: value
        },
        updatedAt: Date.now()
      };
      notify();
    }
  };
}

function defaultState() {
  return {
    activeView: "dashboard",
    activeModuleId: MODULES[0].id,
    answers: {},
    updatedAt: Date.now()
  };
}

function loadState() {
  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (!raw || typeof raw !== "object") return defaultState();
    return {
      activeView: raw.activeView || "dashboard",
      activeModuleId: raw.activeModuleId || MODULES[0].id,
      answers: raw.answers && typeof raw.answers === "object" ? raw.answers : {},
      updatedAt: raw.updatedAt || Date.now()
    };
  } catch (error) {
    return defaultState();
  }
}

function persistState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {}
}

export function getModuleProgress(module, answers) {
  const total = module.fields.length;
  const completed = module.fields.filter((field) => String(answers[field.key] || "").trim()).length;
  return {
    total,
    completed,
    percent: total ? Math.round((completed / total) * 100) : 0,
    done: completed === total
  };
}

export function getJourneySnapshot(state) {
  const modules = MODULES.map((module) => ({
    ...module,
    progress: getModuleProgress(module, state.answers)
  }));

  const completedModules = modules.filter((module) => module.progress.done).length;
  const nextModule = modules.find((module) => !module.progress.done) || modules[modules.length - 1];
  const totalFields = modules.reduce((sum, module) => sum + module.progress.total, 0);
  const completedFields = modules.reduce((sum, module) => sum + module.progress.completed, 0);

  return {
    modules,
    completedModules,
    totalModules: modules.length,
    progressPercent: totalFields ? Math.round((completedFields / totalFields) * 100) : 0,
    nextModule,
    remainingMinutes: modules.filter((module) => !module.progress.done).reduce((sum, module) => sum + module.duration, 0) || 10
  };
}

export function getBrandCard(state) {
  const answers = state.answers || {};
  return {
    brandName: text(answers.brandName) || "Ta marque",
    mission: text(answers.mission),
    vision: text(answers.vision),
    values: text(answers.values),
    targetAudience: text(answers.targetAudience),
    clientProblem: text(answers.clientProblem),
    brandPromise: text(answers.brandPromise),
    offerSummary: text(answers.offerSummary),
    personalityTraits: text(answers.personalityTraits),
    toneDo: text(answers.toneDo),
    toneAvoid: text(answers.toneAvoid),
    brandBio: text(answers.brandBio),
    brandStory: text(answers.brandStory),
    colorPalette: text(answers.colorPalette),
    typographyChoice: text(answers.typographyChoice),
    supportChecklist: text(answers.supportChecklist),
    nextActions: text(answers.nextActions),
    ctaLine: text(answers.ctaLine)
  };
}

function text(value) {
  return String(value || "").trim();
}
