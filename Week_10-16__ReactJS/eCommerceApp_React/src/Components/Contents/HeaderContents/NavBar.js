import React from "react";

// using ES6 modules
import { Link } from "react-router-dom";

function Navigation() {

  return (
    <div className="NavBar">

      <div className="nav-wraper">

        <nav className="nav-links">

          <ul className="main-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            {/* <li>
              <Link to="/ProductCategories">Product Categories</Link>
            </li> */}

          </ul>
        </nav>
      </div>

      <div className="sales-wraper">
        <nav className="nav-links">
          <ul className="sales">
            <li>
              <Link to="/Sale">Sale</Link>
            </li>
          </ul>
        </nav>
      </div>

    </div>
  );
}

export default Navigation;
