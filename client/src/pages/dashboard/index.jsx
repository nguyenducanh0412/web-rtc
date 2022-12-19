import React, { memo, useEffect } from "react";
import PropTypes from "prop-types";
import ActiveUserList from "../../components/ActiveUserList";
import DirectCall from "../../components/DirectCall";
import * as webRTC from "../../utils/webRTC";

const DashboardPage = ({}) => {

  useEffect(() => {
    webRTC.getLocalStream();
  }, []);

  return (
    <div className="h-screen grid grid-cols-5 bg-gray-800">
      <div className="col-span-4 text-white">
        <div className="h-[80%] bg-purple-900"><DirectCall /></div>
        <div>rooms</div>
      </div>
      <div className="col-span-1 text-white">
        <div className="h-[80%] bg-black">
          <ActiveUserList />
        </div>
        <div>chat</div>
      </div>
    </div>
  );
};

DashboardPage.propTypes = {};

export default memo(DashboardPage);
