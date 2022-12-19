import React, { memo } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import LocalVideoView from "../LocalVideoView";
import RemoteVideoView from "../RemoteVideoView";
import CallRejectedDialog from "../CallRejectedDialog";
import IncomingCallDialog from "../IncomingCallDialog";
import CallingDialog from "../CallingDialog";
import { callStates } from "../../utils/constants";
import {
  setCallRejected,
  setLocalCameraEnabled,
  setLocalMicrophoneEnabled,
} from "../../features/callSlice";
import ConversationButtons from "../ConversationButtons";

const DirectCall = ({}) => {
  const call = useSelector((state) => state.call);
  const dispatch = useDispatch();

  const {
    localStream,
    remoteStream,
    callState,
    callerUserName,
    callingDialogVisible,
    callRejected,
  } = call;

  const hideCallRejectedDialog = (callRejectedDetails) => {
    dispatch(setCallRejected(callRejectedDetails));
  };

  const setCameraEnabled = (enabled) => {
    dispatch(setLocalCameraEnabled(enabled));
  };

  const setMicrophoneEnabled = (enabled) => {
    dispatch(setLocalMicrophoneEnabled(enabled));
  };

  return (
    <>
      <LocalVideoView localStream={localStream} />
      {remoteStream && callState === callStates.CALL_IN_PROGRESS && (
        <RemoteVideoView remoteStream={remoteStream} />
      )}

      {callRejected.rejected && (
        <CallRejectedDialog
          reason={callRejected.reason}
          hideCallRejectedDialog={hideCallRejectedDialog}
        />
      )}
      {callState === callStates.CALL_REQUESTED && (
        <IncomingCallDialog callerUserName={callerUserName} />
      )}
      {callingDialogVisible && <CallingDialog />}
      {remoteStream && callState === callStates.CALL_IN_PROGRESS && (
        <ConversationButtons
          {...call}
          setMicrophoneEnabled={setMicrophoneEnabled}
          setCameraEnabled={setCameraEnabled}
          hideCallRejectedDialog={hideCallRejectedDialog}
        />
      )}
    </>
  );
};

DirectCall.propTypes = {};

export default memo(DirectCall);
