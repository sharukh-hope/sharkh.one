import { useEffect, useRef } from "react";
import { TerminalLoader } from "../common/TerminalLoader";
import { useAILoader } from "../helpers/customHooks";
import { getChatHistory } from "./AiBot";
import { TerminalInput } from "./TerminalInput";
import ReactMarkdown from "react-markdown";

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
            dustyAI@one ~ %{" "}
          </span>
          <ReactMarkdown
            components={{
              p: ({ children }) => (
                <span className="font-light">{children}</span>
              ),
              ul: ({ children }) => (
                <ul className="ml-4 list-disc">{children}</ul>
              ),
              li: ({ children }) => <li>{children}</li>,
              strong: ({ children }) => (
                <span className="font-bold">{children}</span>
              ),
              code: ({ children }) => (
                <code className="bg-black/40 px-1 rounded">{children}</code>
              ),
            }}
          >
            {item.parts[0].text}
          </ReactMarkdown>
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
  const renderInitTextMessage = () => {
    if (data.length > 0) return null;
    return (
      <div className="font-default font-extrabold text-center text-4xl dark:opacity-25 opacity-15 mb-4 max-lg:text-xl max-lg:mb-2 max-md:text-left">
        Don't worry, AI can help you here as well. Just say hello ↓
      </div>
    );
  };

  return (
    <div
      className="ChatWindowWrapper flex-col font-mono overflow-y-auto w-100 my-4 max-h-[60vh] max-lg:max-h-[35vh] max-lg:w-140 max-md:w-full"
      ref={chatWindowRef}
    >
      {renderInitTextMessage()}
      {data.map((item, index) => {
        return <div key={index}>{renderTextMessage(item)}</div>;
      })}

      {isLoading ? (
        <span className="text-greenAccent dark:text-yellow-300 text-xs">
          dustyAI@one ~ % <TerminalLoader showSpinner />
        </span>
      ) : (
        <TerminalInput />
      )}
      <div ref={bottomRef} />
    </div>
  );
};
