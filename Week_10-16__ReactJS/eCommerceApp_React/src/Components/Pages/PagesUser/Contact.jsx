import React from "react";

import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

import Email from "../../Forms/Email";

const LogIn = (props) => {
  return (
    <>
      <Header />

      <div className="container-fluid light">
        <div className="container margin-tb">
          <h1>Contact Us</h1>
          <hr />
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <Email />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LogIn;
