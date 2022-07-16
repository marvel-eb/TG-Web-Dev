import React from "react";
import { Link } from "react-router-dom";
import PasswordReset from "../../Forms/PasswordReset";
import logInBg from "../../../Assets/images/Netflix-login-the-crown.jpg";
// import Header from "../../Layout/Header";
import FooterGuest from "../../Contents/FooterContents/FooterGuest";
import logo from "../../../Assets/images/netflix-logo.svg";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

const Recovery = (props) => {
  return (
    <div className="container-fluid user-auth-page__wrapper">
      {/* <Header {...props} /> */}
      <div className="user-auth-page-bg__holder">
        <img className="user-auth-page-bg" src={logInBg} alt="" />
      </div>
      
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        className="navbar navbar-expand-lg- navbar-dark  fixed-top- text-white-50 pt-5"
      >
        <LinkContainer to = "/">
        <Navbar.Brand >
          <img
            className="d-inline-block align-top logo"
            src={logo}
            alt="Netflix Logo"
          />
        
        </Navbar.Brand>
        </LinkContainer>

        <Navbar.Collapse id="basic-navbar-nav" className="px-md-5 py-md-5">
          <Nav className="mr-auto"> </Nav>

          <Link
            className="nav-link text-danger"
            to="/LogInScreen"
            data-uia="header-login-link"
          >
            Sign In
          </Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-8 mx-auto">
            <div className="jumbotron bg-transparent">
              <div className="row text-center">
                <div className="text-center col-12">
                  <PasswordReset />;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterGuest {...props} />
    </div>
  );
};

export default Recovery;
