import { Route, Routes } from "react-router";
import Home from "./Home";
import Now from "./Now";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/now" Component={Now} />
      {/* <Route path="/" Component={App} /> */}
    </Routes>
  );
};

export default AppRouter;
