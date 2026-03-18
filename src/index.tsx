import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { ThemeCP } from "./contexts/ThemeCP.tsx";
import { AiLoadingCP } from "./contexts/AiLoadingCP.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeCP>
      <AiLoadingCP>
        <App />
      </AiLoadingCP>
    </ThemeCP>
  </StrictMode>,
);
