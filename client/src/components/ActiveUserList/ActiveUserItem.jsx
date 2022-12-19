import React, { memo } from "react";
import PropTypes from "prop-types";
import Avatar from "../Avatar";
import { callToOtherUser } from "../../utils/webRTC";

function ActiveUserItem({ socketId, userName }) {
  const handleListItemPressed = () => {
    // TODO: handleListItemPressed
    callToOtherUser({ socketId, userName })
  };
  return (
    <div onClick={handleListItemPressed}>
      <div className="grid grid-cols-10 items-center mb-2 hover:bg-purple-500 cursor-pointer p-4 gap-3">
        <div className="col-span-1">
          <Avatar name={userName} />
        </div>
        <div className="col-span-9">{userName}</div>
      </div>
    </div>
  );
}

ActiveUserItem.propTypes = {
  socketId: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
};

ActiveUserItem.defaultProps = {
  socketId: "",
  userName: "",
};

export default memo(ActiveUserItem);
