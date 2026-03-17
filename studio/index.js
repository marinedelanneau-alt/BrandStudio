import { createStore, hasAccess } from "./store.js";
import { renderApp } from "./render.js";

const root = document.getElementById("studio-app");

if (!root) {
  throw new Error("Studio root missing");
}

if (!hasAccess()) {
  window.location.replace("/index.html");
}

const store = createStore();

function render() {
  renderApp(root, store);
}

store.subscribe(render);
render();
