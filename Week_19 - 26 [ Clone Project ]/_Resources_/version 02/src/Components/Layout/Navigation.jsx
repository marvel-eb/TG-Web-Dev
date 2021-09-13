import React from "react";
import HeaderNav from "../Contents/HeaderNav";
const Navigation = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <HeaderNav />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
