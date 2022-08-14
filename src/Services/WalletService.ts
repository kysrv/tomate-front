import { Wallet } from "bsv-wallet/lib/browser";

const getWallet = () => {
  const key = localStorage.getItem("key");
  if (!key) {
    const wallet = new Wallet({});
    localStorage.setItem("key", wallet.getMnemonic());
    return wallet;
  } else {
    return new Wallet({ key, network: "testnet" });
  }
};

export { getWallet };
