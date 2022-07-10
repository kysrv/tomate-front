import Register from "Components/Register";
import * as React from "react";
import { Navigate, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { useAppSelector } from "./Features/Store";

const App = () => {
  const account = useAppSelector((state) => state.account);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-200 px-12 py-8">
            <Outlet />
          </div>
        }
      >
        {account.connected ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
              path="*"
              element={
                <>
                  <Navigate to="/login" />
                </>
              }
            />
          </>
        )}
      </Route>
    </Routes>
  );
};

export default App;
