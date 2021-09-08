import React from "react";
import Logo from "../Contents/HeaderContents/Logo";
import Search from "../Contents/HeaderContents/Search/Search";
import Cart from "../Store/Products/CartCount";
import CallAction from "../Contents/HeaderContents/CallAction/CallAction";
import Navigation from "./Navigation";
import GoTop from "../Contents/HeaderContents/GoTop";

const header = (props) => {
  return (
    <>
      <header className="sticky App-header">
        <div className="top-header" id="headerContent">
          <Logo />
          <Search placeholder="Enter a Book Name..." data={props} />
          <CallAction {...props} />
          <Cart />
        </div>
        <Navigation />
      </header>
      <GoTop />
    </>
  );
};

header.defaultProps = {
  currentUser: null,
};

export default header;
