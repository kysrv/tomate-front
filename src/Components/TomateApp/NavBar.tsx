import { useAppSelector } from "Features/Store";
import ChartIcon from "Icons/ChartIcon";
import ClockIcon from "Icons/ClockIcon";
import LogOutIcon from "Icons/LogoutIcon";
import SettingsIcon from "Icons/SettingsIcon";
import UserIcon from "Icons/UsersIcon";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBarButton from "./NavBarButton";

const NavBar = ({}) => {
  const account = useAppSelector((store) => store.account);

  const navigate = useNavigate();

  const handleDisconnect = () => {
    localStorage.clear();

    navigate("/login");
  };

  return (
    <nav className="h-full w-64 flex flex-col px-4 py-8 bg-gray-800 border-gray-600 select-none">
      <h2 className="text-3xl font-semibold text-white">Tomate</h2>
      <div className="my-6">{/*space*/}</div>
      <div className="flex flex-col h-full gap-4 overflow-auto">
        <NavBarButton to="dashboard">
          <div className="flex gap-2">
            <ChartIcon />
            <div> Dashboard</div>
          </div>
        </NavBarButton>
        <NavBarButton to="pomodoro">
          <div className="flex gap-2">
            <ClockIcon />
            <div> Pomodoro</div>
          </div>
        </NavBarButton>
        <NavBarButton to="users">
          <div className="flex gap-2">
            <UserIcon />
            <div> Users</div>
          </div>
        </NavBarButton>

        <hr className="my-6 border-gray-600"></hr>
        <NavBarButton to="settings">
          <div className="flex gap-2">
            <SettingsIcon />
            <div> Settings</div>
          </div>
        </NavBarButton>
        <NavBarButton>
          <div
            className="flex gap-2"
            onClick={() => {
              const res = prompt("Are you sure you want to disconnect ?");

              if (res == "yes") {
                handleDisconnect();
              }
            }}
          >
            <LogOutIcon />
            <div> Disconnect</div>
          </div>
        </NavBarButton>
      </div>
      <div className="flex items-center px-4 mt-2">
        <img
          className="object-cover mx-2 rounded-full h-9 w-9"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
          alt="avatar"
        />
        <h4 className="mx-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">
          {account.username}
        </h4>
      </div>
    </nav>
  );
};

export default NavBar;
