import React, { memo } from "react";
import PropTypes from "prop-types";

const CallingDialog = (props) => {
  return (
    <div
      className="bg-[#282C34] absolute w-[400px] h-[300px] flex flex-col items-center justify-center rounded-lg shadow"
      style={{ top: "calc(50% - 150px)", left: "calc(50% - 200px)" }}
    >
      <span>Calling</span>
    </div>
  );
};

CallingDialog.propTypes = {};

export default memo(CallingDialog);
