import React, { memo } from "react";
import PropTypes from "prop-types";

const ConversationButton = ({ onClickHandler, children }) => {
  return (
    <button
      className="w-[50px] h-[50px] rounded-[40px] border-none border-[#e6e5e8] bg-[#282c34] flex items-center justify-center ml-[10px] outline-none"
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

ConversationButton.propTypes = {
  onClickHandler: PropTypes.func,
  children: PropTypes.node,
};

ConversationButton.defaultProps = {
  onClickHandler: () => {},
  children: null,
};

export default memo(ConversationButton);
