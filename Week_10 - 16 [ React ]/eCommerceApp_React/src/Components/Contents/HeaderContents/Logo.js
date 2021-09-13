import React from "react";

// using ES6 modules
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <div className="header--logo">
      <Link to="/">
        <h2>
          EPHI
          <span className="tagline">
            <strong>SHOP</strong>
          </span>
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
