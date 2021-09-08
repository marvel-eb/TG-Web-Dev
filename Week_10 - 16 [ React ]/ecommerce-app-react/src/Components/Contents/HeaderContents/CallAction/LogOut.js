import React from "react";

// // using ES6 modules
import { Link } from "react-router-dom";
import { FaUserAlt, FaSignOutAlt } from "react-icons/fa";

import { auth } from "../../../../firebase/utils";

const LogOut = (props) => {
  return (
    <div className="header--callAction">
      <div className="Account">
        <Link to="/Account">
          <span>
            <FaUserAlt className="s-icons" size="2em" />
            <br />
            My Account
          </span>
        </Link>
      </div>

      <div className="user">
        <span onClick={() => auth.signOut()}>
          <FaSignOutAlt className="s-icons" size="2em" />
          <br />
          Log Out
        </span>
      </div>
    </div>
  );
};

export default LogOut;
