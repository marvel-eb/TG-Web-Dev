import React from "react";

import LogIn from "./LogIn";
import LogOut from "./LogOut";

const CallAction = ({ children, ...otherProps }) => {
  const { currentUser } = otherProps;
  return (
    <div>
      {!currentUser && (
        <div className="header--callAction">
          <LogIn />
        </div>
      )}
      {currentUser && (
        <div className="header--callAction">
          <LogOut />
        </div>
      )}
    </div>
  );
};

CallAction.propTypes = {};

export default CallAction;
