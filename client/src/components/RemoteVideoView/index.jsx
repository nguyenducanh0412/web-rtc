import React, { useEffect, useRef, memo } from "react";
import PropTypes from "prop-types";

const RemoteVideoView = ({ remoteStream }) => {
  const remoteVideoRef = useRef(null);

  useEffect(() => {
    if (remoteStream) {
      const remoteVideo = remoteVideoRef.current;
      remoteVideo.srcObject = remoteStream;
      remoteVideo.onloadedmetadata = () => {
        remoteVideo.play();
      };
    }
  }, [remoteStream]);

  return (
    <div className="w-full h-full">
      <video className="w-full h-full" ref={remoteVideoRef} autoPlay></video>
    </div>
  );
};

RemoteVideoView.propTypes = {};

export default memo(RemoteVideoView);
