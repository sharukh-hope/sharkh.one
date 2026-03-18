import { useEffect, useRef } from "react";
import { TerminalLoader } from "../common/TerminalLoader";
import { useAILoader } from "../helpers/customHooks";
import { getChatHistory } from "./AiBot";
import { TerminalInput } from "./TerminalInput";

type chat = { role: string; parts: { text: string }[] };

export const ChatWindow = () => {
  const { isLoading } = useAILoader();
  const data: chat[] = getChatHistory();

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const chatWindowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!chatWindowRef.current) return;

    chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
  }, [isLoading]);

  const renderTextMessage = (item: {
    role: string;
    parts: { text: string }[];
  }) => {
    const renderUser = () => {
      if (item.role !== "user") return null;
      return (
        <div className="text-xs mb-2">
          <span className="text-orangeAccent dark:text-teal-300">
            you@one ~ %
          </span>{" "}
          {item.parts[0].text}
        </div>
      );
    };
    const renderBot = () => {
      if (item.role !== "model") return null;
      return (
        <div className="text-xs mb-2">
          <span className="text-greenAccent dark:text-yellow-400">
            bot@one ~ %{" "}
          </span>
          {item.parts[0].text}
        </div>
      );
    };

    return (
      <div className="text-base">
        {renderUser()}
        {renderBot()}
      </div>
    );
  };

  return (
    <div
      className="ChatWindowWrapper flex-col font-mono overflow-y-auto w-100 my-4"
      ref={chatWindowRef}
    >
      {data.map((item, index) => {
        return <div key={index}>{renderTextMessage(item)}</div>;
      })}

      {isLoading ? (
        <span className="text-greenAccent dark:text-yellow-300 text-xs">
          bot@one ~ % <TerminalLoader showSpinner />
        </span>
      ) : (
        <TerminalInput />
      )}
      <div ref={bottomRef} />
    </div>
  );
};
