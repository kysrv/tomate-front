import Login from "Components/Auth/Login";
import Register from "Components/Auth/Register";
import * as React from "react";
import {
  Navigate,
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import TomateApp from "./Components/TomateApp/TomateApp";

import { useAppSelector } from "./Features/Store";

const Router = () => {
  const isConnected = localStorage.getItem("token");

  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (
      !isConnected ||
      location.pathname == "/" ||
      !location.pathname.match(/\/app\/.*/g)
    ) {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route
        element={
          <div className="w-screen h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-red-400">
            <Outlet />
          </div>
        }
      >
        {/* {isConnected ? (
          <>
            <Route path="app/*" element={<TomateApp />} />
          </>
        ) : ( */}
        <>
          <Route path="app/*" element={<TomateApp />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </>
        {/* )} */}
      </Route>
    </Routes>
  );
};

export default Router;
