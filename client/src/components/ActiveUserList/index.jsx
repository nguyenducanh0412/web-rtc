import React, { memo } from "react";
import PropTypes from "prop-types";
import ActiveUserItem from "./ActiveUserItem";
import { useSelector } from "react-redux";

const ActiveUserList = () => {
  const activeUsers = useSelector((state) => state.dashboard.activeUsers);
  return (
    <div className="">
      {activeUsers.map(({ socketId, userName }) => (
        <ActiveUserItem key={socketId} socketId={socketId} userName={userName} />
      ))}
    </div>
  );
};

ActiveUserList.propTypes = {};

export default memo(ActiveUserList);
