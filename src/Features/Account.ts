import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type AccountModel = {
  id: string;
  username: string;
  tasks: TaskModel[];
  connected: boolean;
  loading: boolean;
};

export type TaskModel = {
  id: string;
  name: string;
  timestamp: number;
  duration: number;
};

const initialState: AccountModel = {
  id: "shit",
  connected: false,
  username: "unknow",
  tasks: [],
  loading: false,
};

const AccountSlice = createSlice({
  name: "Account",
  initialState,
  reducers: {
    connect: (
      state,
      action: PayloadAction<{
        username: string;
        id: string;
        tasks: TaskModel[];
      }>
    ) => {
      const { username, id, tasks } = action.payload;

      return {
        id,
        connected: true,
        username,
        tasks: tasks,
        loading: false,
      };
    },
    setLoading: (account, action: PayloadAction<boolean>) => {
      account.loading = action.payload;
    },
    setTaskDone: (state, action: PayloadAction<TaskModel>) => {
      const { payload: task } = action;

      state.tasks.push(task);
    },
  },
});

export const AccountActions = { ...AccountSlice.actions };

export default AccountSlice;
