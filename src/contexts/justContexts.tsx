import { createContext } from "react";

interface themeContextType {
  darkTheme: boolean;
  toggleDarkMode?: () => void;
}

export const themeContext = createContext<themeContextType | undefined>({
  darkTheme: true,
});
