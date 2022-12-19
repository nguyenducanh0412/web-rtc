import React, { useEffect, useRef, memo } from "react";
import PropTypes from "prop-types";

const LocalVideoView = ({ localStream }) => {
  const localVideoRef = useRef(null);

  useEffect(() => {
    if (localStream) {
      const localVideo = localVideoRef.current;
      localVideo.srcObject = localStream;
      localVideo.onloadedmetadata = () => {
        localVideo.play();
      };
    }
  }, [localStream]);

  return (
    <div className="absolute w-[150px] h-[150px] rounded-lg right-[23%] top-[5%] bg-black">
      <video
        className="w-full h-full"
        ref={localVideoRef}
        autoPlay
        muted
      ></video>
    </div>
  );
};

LocalVideoView.propTypes = {
  localStream: PropTypes.any,
};

export default memo(LocalVideoView);
