import { useAppSelector } from "Features/Store";
import { Vertical } from "KysanUI";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Main = ({}) => {
  const wallet = useAppSelector((store) => store.wallet);
  return (
    <Vertical s="w-full h-full items-center">
      <div
        style={{ width: "600px" }}
        className="h-full flex flex-col rounded-md bg-gray-400 text-white items-center pt-10"
      >
        <div className="text-4xl">$ {wallet.balance}</div>
        <div className="select-text">
          {wallet.address}
          <span className="text-red-800 hove:text-red-300 select-none">
            {" [copy]"}
          </span>
        </div>
        <div className="flex flex-row gap-16 mt-10 w-full justify-center">
          <Link
            to="deposit"
            className="rounded bg-green-200 p-1 w-28 text-center"
          >
            Deposit
          </Link>
          <Link
            to="send"
            className="rounded bg-green-200 p-1  w-28 text-center"
          >
            Send
          </Link>
        </div>
        <div className="flex flex-col w-full h-full">
          <div className="flex w-full h-full"></div>
          <div className="h-min w-full text-center">{wallet.mnemonic}</div>
        </div>
      </div>
    </Vertical>
  );
};

export default Main;
