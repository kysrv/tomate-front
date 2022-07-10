import { AccountActions } from "Features/Account";
import React, { useState } from "react";
import { useEffect } from "react";
import accountService from "Services/accountService";
import { useAppDispatch, useAppSelector } from "../Features/Store";

const Home = ({}) => {
  const account = useAppSelector((store) => store.account);

  const dispatch = useAppDispatch();

  const fetchUserProfile = async () => {
    const { username, tasks, _id: id } = await accountService.getUserProfile();
    console.log({ username, tasks, id });
    dispatch(AccountActions.connect({ username, tasks, id }));
  };

  // ts is so dumb
  useEffect(() => fetchUserProfile() as any, []);

  return (
    <div>
      <h2>Welcome Home</h2>
      {account.connected ? (
        <div> {JSON.stringify(account, null, 4)}</div>
      ) : (
        <div>account info are loading</div>
      )}
    </div>
  );
};

export default Home;
