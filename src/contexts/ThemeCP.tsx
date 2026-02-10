import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { themeContext } from "./justContexts";

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeCP = ({ children }: ThemeProviderProps) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(() => {
    const dark = localStorage.getItem("darkMode");
    return dark === "true";
  });

  useEffect(() => {
    // Check initial preference if darkMode is not set already
    const isDark = localStorage.getItem("darkMode")
      ? localStorage.getItem("darkMode") === "true"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkTheme((p) => !p);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", (!darkTheme).toString());
  };

  return (
    <themeContext.Provider value={{ darkTheme, toggleDarkMode }}>
      {children}
    </themeContext.Provider>
  );
};
