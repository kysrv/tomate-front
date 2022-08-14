import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TransactionModel = {
  amount: number;
  recipientAdr: string;
  date: string;
};

export type WalletModel = {
  transactions: TransactionModel[];
  mnemonic: string;
  balance: number;
  address: string;
  isLoading: boolean;
};

const initialState: WalletModel = {
  transactions: [],
  balance: 0,
  address: "unknow",
  mnemonic: "unknow",
  isLoading: true,
};

const WalletSlice = createSlice({
  name: "Wallet",
  initialState,
  reducers: {
    load: (state, action: PayloadAction<WalletModel>) => {
      const wallet = action.payload;
      return wallet;
    },
  },
});

export const WalletActions = { ...WalletSlice.actions };
export default WalletSlice;
