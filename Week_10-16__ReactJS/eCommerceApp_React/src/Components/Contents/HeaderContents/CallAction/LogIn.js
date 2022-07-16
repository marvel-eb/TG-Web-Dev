import React from "react";

// // using ES6 modules
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const LogIn = (props) => {
  return (
    <div className="user">

      <Link to="/LogIn">
        <span>
          <FaUserAlt className="s-icons" size="2em" /> <br />
          LogIn
        </span>
      </Link>

    </div>
  );
};

export default LogIn;
