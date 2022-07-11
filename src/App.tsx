import Login from "Components/Auth/Login";
import Register from "Components/Auth/Register";
import * as React from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Tomate from "./Components/TomateApp/TomateApp";

import { useAppSelector } from "./Features/Store";

const App = () => {
  const account = useAppSelector((state) => state.account);

  const path = localStorage.getItem("token") ? "app" : "login";
  const navigate = useNavigate();

  React.useEffect(() => {
    navigate(path);
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
        {localStorage.getItem("token") ? (
          <>
            <Route path="app/*" element={<Tomate />} />
          </>
        ) : (
          <>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </>
        )}
      </Route>
    </Routes>
  );
};

export default App;
