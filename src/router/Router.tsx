import { Routes, Route, Navigate } from "react-router-dom";
import { authRoutes, publicRoutes } from "./routes";
import { LOGIN_ROUTE } from "./consts";
import { useStore } from "effector-react";
import { $auth } from "auth/model";


const Router = () => {
  const auth = useStore($auth);
  
  return (
    <Routes>
        {auth && authRoutes.map(({path, Component}) =>
            <Route key={path} path={path}  element={Component}/>
        )}
        {publicRoutes.map(({path, Component}) =>
            <Route key={path} path={path} element={Component}/>
        )}
        {/* <Navigate to={LOGIN_ROUTE}/> */}
    </Routes>
  );
};

export default Router;
