import { BrowserRouter } from "react-router";
import AppRouter from "./AppRouter";
import { NavigationBar } from "./components/NavigationBar";
import "./styles/css/app.css";

import { useContext, useEffect, useState } from "react";
import { themeContext } from "./contexts/justContexts";

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const theme = useContext(themeContext);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  useEffect(() => {
    console.log(theme?.darkTheme);
  }, [theme?.darkTheme]);

  const bg = !theme?.darkTheme
    ? undefined
    : `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, .15), transparent 80%)`;

  return (
    <div
      className={`AppWrapper min-w-screen font-default flex flex-col relative items-center`}
      style={{
        background: bg,
      }}
    >
      <div className="max-w-[80%]">
        <BrowserRouter>
          <NavigationBar />
          <AppRouter />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
