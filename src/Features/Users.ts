import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskModel } from "./Account";

export type UserModel = {
  id: string;
  username: string;
  tasks: TaskModel;
  totalTime: number;
};

const initialState: UserModel[] = [];

const UsersSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    load: (state, action: PayloadAction<UserModel[]>) => {
      const { payload: users } = action;
      return users;
    },
  },
});

export const UsersAction = { ...UsersSlice.actions };
export default UsersSlice;
