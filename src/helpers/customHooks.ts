import { useContext } from "react";
import { aiLoadingContext } from "../contexts/justContexts";

export const useAILoader = () => {
  const loaderContext = useContext(aiLoadingContext);

  if (!loaderContext)
    throw new Error("contexts must be used within providers!");

  return loaderContext;
};
