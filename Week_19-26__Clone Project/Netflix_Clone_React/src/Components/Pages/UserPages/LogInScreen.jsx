import React from "react";
// import { Link } from "react-router-dom";
import SignInForm from "../../Forms/SignIn";
import FooterGuest from "../../Contents/FooterContents/FooterGuest";
import logInBg from "../../../Assets/images/Netflix-login-bg.jpeg";
import logo from "../../../Assets/images/netflix-logo.svg";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const LogInScreen = () => {
  return (
    <div className="container-fluid user-auth-page__wrapper">
      <div className="user-auth-page-bg__holder">
        <img className="user-auth-page-bg" src={logInBg} alt="" />
      </div>

      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="navbar navbar-expand-lg- navbar-dark  fixed-top- text-white-50 pt-5"
      >

        <Link to = "/">
        <Navbar.Brand >
          <img
            className="d-inline-block align-top logo"
            src={logo}
            alt="Netflix Logo"
          />
        </Navbar.Brand>
        </Link>
      </Navbar>

      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-8 mx-auto">
            <div className="jumbotron bg-transparent">
              <div className="row text-center">
                <div className="text-center col-12">
                  <SignInForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterGuest />
    </div>
  );
};

export default LogInScreen;
