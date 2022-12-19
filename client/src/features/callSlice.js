// create call slice redux toolkit
// Path: client\src\features\callSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { PREFIX, callStates } from "../utils/constants";

const initialState = {
  localStream: null,
  callState: callStates.CALL_UNAVAILABLE,
  callingDialogVisible: false,
  callerUserName: "",
  callRejected: {
    rejected: false,
    reason: "",
  },
  remoteStream: null,
  localCameraEnabled: true,
  localMicrophoneEnabled: true,
  screenSharingActive: false,
};

const initialName = `${PREFIX}-call`;

const callSlice = createSlice({
  name: initialName,
  initialState,
  reducers: {
    setLocalStream(state, action) {
      state.localStream = action.payload;
    },
    setCallState(state, action) {
      state.callState = action.payload;
    },
    setCallingDialogVisible(state, action) {
      state.callingDialogVisible = action.payload;
    },
    setCallerUserName(state, action) {
      state.callerUserName = action.payload;
    },
    setCallRejected(state, action) {
      state.callRejected = action.payload;
    },
    setRemoteStream(state, action) {
      state.remoteStream = action.payload;
    },
    setLocalMicrophoneEnabled(state, action) {
      state.localMicrophoneEnabled = action.payload;
    },
    setLocalCameraEnabled(state, action) {
      state.localCameraEnabled = action.payload;
    },
    setScreenSharingActive(state, action) {
      state.screenSharingActive = action.payload;
    }
  },
});

export const {
  setLocalStream,
  setCallState,
  setCallingDialogVisible,
  setCallerUserName,
  setCallRejected,
  setRemoteStream,
  setLocalMicrophoneEnabled,
  setLocalCameraEnabled,
  setScreenSharingActive
} = callSlice.actions;

export default callSlice.reducer;
