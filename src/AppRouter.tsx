import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Now from "./pages/Now";

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
