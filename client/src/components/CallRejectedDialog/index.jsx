import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";

const CallRejectedDialog = ({ reason, hideCallRejectedDialog }) => {
  return (
    <div
      className="bg-[#282C34] absolute w-[400px] h-[300px] flex flex-col items-center justify-center rounded-lg shadow"
      style={{ top: "calc(50% - 150px)", left: "calc(50% - 200px)" }}
    >
      <span>{reason}</span>

      {/* create button hangup call with tailwind css */}
      <button
        className="text-white border border-white rounded-full px-4 py-1 mt-4 hover:bg-rose-900"
        onClick={() => hideCallRejectedDialog({ rejected: false, reason: "" })}
      >
        Hangup
      </button>
    </div>
  );
};

CallRejectedDialog.propTypes = {
  reason: PropTypes.string,
  hideCallRejectedDialog: PropTypes.func,
};

CallRejectedDialog.defaultProps = {
  reason: "",
  hideCallRejectedDialog: () => {},
};

export default memo(CallRejectedDialog);
