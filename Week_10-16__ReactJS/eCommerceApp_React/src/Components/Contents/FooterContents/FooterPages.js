import React from "react";
// using ES6 modules
import { Link } from "react-router-dom";
const Subscribe = (props) => {
  return (
    <div>
      <h4>
        <strong>EPHISHOP </strong>
      </h4>

      <Link to="/About">
        <p> About</p>
      </Link>

      <Link to="/Return">
        <p> Return</p>
      </Link>

      <Link to="/Privacy">
        <p> Privacy policy</p>
      </Link>

      <Link to="/Contact">
        <p> Contact</p>
      </Link>
    </div>
  );
};

export default Subscribe;
