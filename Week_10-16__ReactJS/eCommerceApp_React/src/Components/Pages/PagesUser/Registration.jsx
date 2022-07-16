import React, { Component } from "react";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import SignUp from "../../Forms/SignUp";

class Registration extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="container margin-tb">
            <SignUp />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Registration;
