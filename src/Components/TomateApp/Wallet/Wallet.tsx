import React, { useEffect, useState } from "react";

import { Vertical } from "KysanUI";
import { getWallet } from "Services/WalletService";
import { useAppDispatch, useAppSelector } from "Features/Store";
import { WalletActions } from "Features/Wallet";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Send from "./Send";
import Deposit from "./Deposit";

const WalletHome = ({}) => {
  const dispatch = useAppDispatch();

  // * au chargement du composant
  const init = async () => {
    // * on récpère le wallet
    const wallet = getWallet();

    // * on charge ces infos
    const walletData = WalletActions.load({
      address: await wallet.getAddress(),
      mnemonic: wallet.getMnemonic(),
      balance: await wallet.getBalance(0, 100),
      transactions: [],
      isLoading: false,
    });

    // * on dispatch les données chargé
    dispatch(walletData);
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <Routes>
        <Route path="send" element={<Send />} />
        <Route path="deposit" element={<Deposit />} />
        <Route index element={<Main />} />
        <Route path="*" element={<Navigate to="../" />} />
      </Routes>
    </>
  );
};

export default WalletHome;
