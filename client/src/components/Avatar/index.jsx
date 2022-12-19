import React, { memo } from "react";
import PropTypes from "prop-types";
import { getInitials } from "../../utils";

const Avatar = ({ name, urlImage }) => {
  return (
    <div className="h-[30px] w-[30px] rounded-full text-white bg-green-600 flex items-center justify-center">
      {getInitials(name)}
    </div>
  );
};

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  urlImage: PropTypes.string,
};

Avatar.defaultProps = {
  name: "",
  urlImage: "",
};

export default memo(Avatar);
