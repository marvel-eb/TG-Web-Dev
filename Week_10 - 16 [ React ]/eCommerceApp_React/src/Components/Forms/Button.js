import React from "react";

const Buttons = ({ children, ...otherProps }) => {
  return (
    <button className="btn login" {...otherProps}>
      {children}
    </button>
  );
};
export default Buttons;
