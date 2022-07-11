import { AccountActions } from "Features/Account";
import React, { useState } from "react";
import { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { accountService } from "Services/accountService";

import { useAppDispatch, useAppSelector } from "../../Features/Store";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import Pomodoro from "./Pomodoro";
import Settings from "./Settings";
import Users from "./Users";

const TomateApp = ({}) => {
  const account = useAppSelector((store) => store.account);

  const dispatch = useAppDispatch();

  const fetchUserProfile = async () => {
    const { username, tasks, _id: id } = await accountService.getUserProfile();
    console.log({ username, tasks, id });
    dispatch(AccountActions.connect({ username, tasks, id }));
  };

  // ts is so dumb
  useEffect(() => {
    !account.connected && (fetchUserProfile() as any);
  }, []);

  const location = useLocation();

  const split = location.pathname.split("/");
  let pageName = split[split.length - 1];
  pageName = pageName[0].toUpperCase() + pageName.slice(1);

  return (
    <div className="w-screen h-screen flex flex-row bg-gray-800 select-none">
      <NavBar />
      <div className="w-full h-full bg-gray-300 rounded-l-lg p-10 flex flex-col">
        <h2 className="text-4xl fond-bold pb-10">{pageName}</h2>

        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="pomodoro" element={<Pomodoro />} />
          <Route path="settings" element={<Settings />} />
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Routes>
      </div>
    </div>
  );
};

export default TomateApp;
