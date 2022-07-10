import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Brand from "./Brand";
import { Input, Vertical, Horizontal, Button } from "KysanUI";
import accountService from "Services/accountService";
import { useAppDispatch, useAppSelector } from "Features/Store";
import { AccountActions } from "Features/Account";

const Login = ({}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const account = useAppSelector((store) => store.account);

  const handleConnect = async () => {
    // * we indicate that we are loading the user
    dispatch(AccountActions.setLoading(true));

    // * we fetch the token
    const token = await accountService.login(username, password);

    if (!token) {
      dispatch(AccountActions.setLoading(true));
      return;
    }
    // * and then put it into the localStorage to made axios able to use it
    localStorage.setItem("token", token);

    // * the we initiate the account loading animation
    initiateAccountLoading();
  };

  const initiateAccountLoading = async () => {
    // * we get back the profile since the token is loaded
    const profile = await accountService.getUserProfile();

    // * if we successfuly get back the profile
    if (profile) {
      // * then we store it
      dispatch(
        AccountActions.connect({
          id: profile._id,
          username: profile.username,
          tasks: profile.tasks,
        })
      );

      // * then go to the home page
      navigate("/app");
    }

    // * then we sotp the loading
    dispatch(AccountActions.setLoading(false));
  };

  return (
    <div className="w-full h-full flex flex-row items-center justify-center">
      <Brand />
      <div className="flex grow"></div>
      <div
        className="flex flex-col rounded-md bg-white p-10 shadow-xl gap-10 w-full mx-32"
        style={{ width: "536px" }}
      >
        <h2 className="text-3xl text-center font-semibold text-gray-800 text-left w-full">
          Welcome back
        </h2>
        <div className="flex flex-col gap-4">
          <div className="gap-2 flex flex-col">
            <label className="text-gray-500">Username</label>
            <Input
              value={username}
              placeholder="Enter your username"
              onChange={(value) => setUsername(value)}
            ></Input>
          </div>
          <div className="gap-2 flex flex-col">
            <label className="text-gray-500">Password</label>
            <Input
              value={password}
              placeholder="Enter your password"
              type="password"
              onChange={(value) => setPassword(value)}
            ></Input>
          </div>
        </div>
        <button
          className="w-full py-4 bg-green-600 rounded-lg text-green-100"
          onClick={handleConnect}
        >
          Login
        </button>
        <Link to="/register">
          <div className="font-medium text-gray-400">Create an account</div>
        </Link>
      </div>
    </div>
  );
};

export default Login;
