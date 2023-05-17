import Main from "../pages/Main/Main";
import Records from "../pages/Records/Records";
import NotFound from "../pages/NotFound";
import { Routes, Route } from "react-router-dom";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/calendar" element={<Records />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
