import React from "react";
import ReactDOM from "react-dom/client";
import { BrandStudioApp } from "./app/BrandStudioApp";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrandStudioApp />
  </React.StrictMode>
);
