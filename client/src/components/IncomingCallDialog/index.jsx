import React, { memo } from "react";
import PropTypes from "prop-types";
import {
  acceptInComingCallRequest,
  rejectInComingCallRequest,
} from "../../utils/webRTC";

const IncomingCallDialog = ({ callerUserName }) => {
  const handleAcceptCall = () => {
    acceptInComingCallRequest();
  };
  const handleRejectCall = () => {
    rejectInComingCallRequest();
  };
  return (
    <div
      className="bg-[#282C34] absolute w-[400px] h-[300px] flex flex-col items-center justify-center rounded-lg shadow"
      style={{ top: "calc(50% - 150px)", left: "calc(50% - 200px)" }}
    >
      <span className="text-3xl">{callerUserName}</span>
      <div className="mt-5 w-full flex justify-evenly">
        <button
          className="text-white border border-white rounded-full px-4 py-1 hover:bg-purple-400"
          onClick={handleAcceptCall}
        >
          Accept
        </button>
        <button
          className="text-white border border-white rounded-full px-4 py-1 hover:bg-rose-900"
          onClick={handleRejectCall}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

IncomingCallDialog.propTypes = {
  callerUserName: PropTypes.string.isRequired,
};

IncomingCallDialog.defaultProps = {
  callerUserName: "",
};

export default memo(IncomingCallDialog);
