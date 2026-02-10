import { useContext } from "react";
import { NavLink } from "react-router";
import { themeContext } from "../contexts/justContexts";

export const NavigationBar = () => {
  const theme = useContext(themeContext);

  return (
    <nav className="navigationBarWrapper  py-8 text-slate-400 font-light flex flex-row justify-between min-w-full">
      <NavLink to={"/"} className="tab">
        Shark
      </NavLink>

      <div className="flex flex-row">
        {/* <div className="tab">About</div> */}
        <NavLink to={"/now"} className="tab">
          Now
        </NavLink>
        <div className="tab arc" onClick={theme?.toggleDarkMode}></div>
      </div>
    </nav>
  );
};
