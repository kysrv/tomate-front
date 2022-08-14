import { combineReducers, configureStore, Store } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import AccountSlice from "./Account";
import UsersSlice from "./Users";
import WalletSlice from "./Wallet";

const reducer = combineReducers({
  account: AccountSlice.reducer,
  users: UsersSlice.reducer,
  wallet: WalletSlice.reducer,
});

const store = configureStore({ reducer });

export default store;

// * mes hooks avec des types customs
type myStateType = ReturnType<typeof store.getState>;
type myDispatchType = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<myDispatchType>();
export const useAppSelector: TypedUseSelectorHook<myStateType> = useSelector;
