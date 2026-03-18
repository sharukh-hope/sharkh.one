import { useState } from "react";
import type { ReactNode } from "react";
import { aiLoadingContext } from "./justContexts";

type aiLoadingTypes = {
  children: ReactNode;
};
export const AiLoadingCP = ({ children }: aiLoadingTypes) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <aiLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </aiLoadingContext.Provider>
  );
};
