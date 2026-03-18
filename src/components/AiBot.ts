import { postCallApi } from "../common/apiCallHelper";
import { urls } from "../endpoints/urlsPortfolio";

const localStorageHistory = "chatHistory";

// Get history from localStorage
export const getChatHistory = () => {
  const stored = localStorage.getItem(localStorageHistory);
  return stored ? JSON.parse(stored) : [];
};

// Save new exchange to localStorage
export const saveMessageToHistory = (message: {
  role: "user" | "model";
  parts: { text: string }[];
}) => {
  const history = getChatHistory();
  history.push(message);
  localStorage.setItem(localStorageHistory, JSON.stringify(history));
};

type GeminiResponse = {
  aiRes: string;
};

// Send message to your API
export const sendTextToGemini = (message: string) => {
  const history = getChatHistory();

  return new Promise<string>((resolve, reject) => {
    const callAIBot = () => {
      const url = urls.chat;
      const postObj = {
        message,
        history,
      };
      const callBackFunction = (res: GeminiResponse) => {
        resolve(res.aiRes);
      };
      postCallApi(url, postObj, callBackFunction, reject);
    };
    callAIBot();
  });
};
