import { useContext } from "react";
// import { NavLink } from "react-router";
import { themeContext } from "../contexts/justContexts";

export const NavigationBar = () => {
  const theme = useContext(themeContext);

  return (
    <nav
      className="navigationBarWrapper  py-8 text-slate-400 font-light flex flex-row justify-end min-w-full
    max-md:px-6"
    >
      {/* <NavLink to={"/"} className="tab">
        Shark
      </NavLink> */}

      <div className="flex flex-row">
        {/* <div className="tab">About</div> */}
        {/* <NavLink to={"/now"} className="tab">
          Now
        </NavLink> */}
        <button className="tab arc" onClick={theme?.toggleDarkMode}>
          <svg id="sunmoon" viewBox="0 0 32 32">
            <defs>
              <mask id="maskc">
                <rect x="0" y="0" width="32" height="32" fill="white" />
                <circle id="mask-center" cx="40" cy="16" r="8" fill="black" />
              </mask>
              <mask id="maskr">
                <circle id="mask-rays" cx="16" cy="16" r="16" fill="white" />
              </mask>
            </defs>
            <circle id="center" mask="url(#maskc)" r="8" cx="16" cy="16" />
            <path
              id="rays"
              mask="url(#maskr)"
              d="M6,16l-6,0 M8.929,8.929l-4.243,-4.243 M8.929,23.071l-4.243,4.243 M16,26l-0,6 M27.314,27.314l-4.243,-4.243 M32,16l-6,0 M27.314,4.686l-4.243,4.243 M16,-0l-0,6"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};
