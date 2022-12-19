// create dashboard slice redux toolkit
// Path: client\src\features\dashboardSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { PREFIX } from "../utils/constants";

const initialState = {
  userName: "",
  activeUsers: [],
};

const initialName = `${PREFIX}-dashboard`;

const dashboardSlice = createSlice({
  name: initialName,
  initialState,
  reducers: {
    saveUserName(state, action) {
      state.userName = action.payload;
    },
    setActiveUsers(state, action) {
      state.activeUsers = action.payload;
    }
  },
});

export const { saveUserName, setActiveUsers } = dashboardSlice.actions;

export default dashboardSlice.reducer;
