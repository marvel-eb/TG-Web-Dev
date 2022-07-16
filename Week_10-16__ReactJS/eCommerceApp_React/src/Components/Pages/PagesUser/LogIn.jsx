import React from "react";

import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

import SignInForm from "../../Forms/SignIn";

const LogIn = (props) => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="container margin-tb">
          <SignInForm />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default LogIn;
