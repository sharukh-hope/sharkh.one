import { createContext } from "react";

interface themeContextType {
  darkTheme: boolean;
  toggleDarkMode?: () => void;
}

export const themeContext = createContext<themeContextType | undefined>({
  darkTheme: true,
});

type aiLoadingContextType = {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const aiLoadingContext = createContext<aiLoadingContextType | undefined>(
  {
    isLoading: false,
    setIsLoading: () => null,
  },
);
