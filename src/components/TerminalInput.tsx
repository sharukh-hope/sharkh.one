import { useState } from "react";
import { saveMessageToHistory, sendTextToGemini } from "./AiBot";
import { useAILoader } from "../helpers/customHooks";

export const TerminalInput = () => {
  const [command, setCommand] = useState("");
  const { isLoading, setIsLoading } = useAILoader();

  const handleCommand = () => {
    console.log("Command executed:", command);
    if (!(command.trim().length === 0)) {
      saveMessageToHistory({ role: "user", parts: [{ text: command }] }); // ✅ persist exchange
      sendTextToGemini(command)
        .then((aiResponse) => {
          saveMessageToHistory({
            role: "model",
            parts: [{ text: aiResponse }],
          });
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
      setIsLoading(true);
      setCommand("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand();
    }
  };

  return (
    <div className="flex text-xs items-center flex-row">
      <span className="text-orangeAccent dark:text-teal-300 mr-1">
        you@one ~ %{" "}
      </span>
      <input
        type="text"
        value={command}
        onChange={(e) => setCommand(e.target.value)}
        onKeyDown={handleKeyDown}
        className="bg-transparent outline-none flex-1 caret-orangeAccent dark:caret-teal-300"
        style={{ caretShape: "block" }}
        autoFocus
        disabled={isLoading}
      />
    </div>
  );
};
