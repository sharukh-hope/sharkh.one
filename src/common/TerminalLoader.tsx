import { useEffect, useState } from "react";

type TerminalLoaderProps = {
  showSpinner?: boolean;
  showThinking?: boolean;
  showCursor?: boolean;
};

const spinnerFrames = ["⣾", "⣷", "⣯", "⣟", "⡿", "⢿", "⣻", "⣽"];

export const TerminalLoader = ({
  showSpinner = false,
  showThinking = false,
  showCursor = false,
}: TerminalLoaderProps) => {
  const [spinnerIndex, setSpinnerIndex] = useState(0);
  const [dotCount, setDotCount] = useState(1);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (!showSpinner) return;

    const spinnerInterval = setInterval(() => {
      setSpinnerIndex((i) => (i + 1) % spinnerFrames.length);
    }, 80);

    return () => clearInterval(spinnerInterval);
  }, [showSpinner]);

  useEffect(() => {
    if (!showThinking) return;

    const dotInterval = setInterval(() => {
      setDotCount((d) => (d % 3) + 1);
    }, 400);

    return () => clearInterval(dotInterval);
  }, [showThinking]);

  useEffect(() => {
    if (!showCursor) return;

    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, [showCursor]);

  return (
    <span className="font-mono text-slate-400 ml-2">
      {showSpinner && spinnerFrames[spinnerIndex]}{" "}
      {showThinking && `thinking${".".repeat(dotCount)}`}
      {showCursor && (
        <span className={`${cursorVisible ? "opacity-100" : "opacity-0"}`}>
          █
        </span>
      )}
    </span>
  );
};
