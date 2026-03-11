import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/global.css";

// Dismiss preloader once React is hydrated
const dismissPreloader = () => {
  const el = document.getElementById("preloader");
  if (el) {
    el.classList.add("pre-done");
    setTimeout(() => el.remove(), 600);
  }
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Give a tiny buffer so the first paint is visible, then dismiss
requestAnimationFrame(() => {
  requestAnimationFrame(dismissPreloader);
});
