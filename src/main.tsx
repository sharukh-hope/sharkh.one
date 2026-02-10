import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { ThemeCP } from "./contexts/ThemeCp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeCP>
      <App />
    </ThemeCP>
  </StrictMode>,
);
