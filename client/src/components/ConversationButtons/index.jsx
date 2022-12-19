import React from "react";
import PropTypes from "prop-types";
import {
  MdCallEnd,
  MdMic,
  MdMicOff,
  MdVideocam,
  MdVideocamOff,
  MdVideoLabel,
  MdVideoCall,
  MdCamera,
} from "react-icons/md";
import ConversationButton from "./ConversationButton";
import { hangUpCall, switchForScreenSharingStream } from "../../utils/webRTC";

const styles = {
  icon: {
    width: "25px",
    height: "25px",
    fill: "#e6e5e8",
  },
};

const ConversationButtons = ({
  localStream,
  localCameraEnabled,
  localMicrophoneEnabled,
  setCameraEnabled,
  setMicrophoneEnabled,
  screenSharingActive
}) => {
  const handleMicButton = () => {
    const micEnabled = localMicrophoneEnabled;
    localStream.getAudioTracks()[0].enabled = !micEnabled;
    setMicrophoneEnabled(!micEnabled);
  };

  const handleCameraButton = () => {
    const cameraEnabled = localCameraEnabled;
    localStream.getVideoTracks()[0].enabled = !cameraEnabled;
    setCameraEnabled(!cameraEnabled);
  };

  const handlerScreenSharingButton = () => {
    switchForScreenSharingStream();
  };

  const handleHangUpButton = () => {
    hangUpCall();
  };

  return (
    <div className="flex absolute bottom-[22%] left-[35%]">
      <ConversationButton onClickHandler={handleMicButton}>
        {localMicrophoneEnabled ? <MdMic style={styles.icon} /> : <MdMicOff style={styles.icon} />}
      </ConversationButton>
      <ConversationButton onClickHandler={handleHangUpButton}>
        <MdCallEnd style={styles.icon} />
      </ConversationButton>
      <ConversationButton onClickHandler={handleCameraButton}>
        {localCameraEnabled ? <MdVideocam style={styles.icon} /> : <MdVideocamOff style={styles.icon} />}
      </ConversationButton>
      <ConversationButton onClickHandler={handlerScreenSharingButton}>
        {screenSharingActive ? <MdCamera style={styles.icon} /> : <MdVideoLabel style={styles.icon} />}
      </ConversationButton>
    </div>
  );
};

ConversationButtons.propTypes = {};

export default ConversationButtons;
