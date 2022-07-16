import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/images/netflix-logo.svg";
import SearchBar from "../HeaderContents/SearchBar";
import avator from "../../../Assets/images/Netflix-avatar.png";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

// UserAuth
import LogIn from "./../UserAuthContent/LogOut";
import LogOut from "./../UserAuthContent/LogOut";
// import UserAuth from "../../Contents/UserAuthContent/UserAuth";

import { FaBell } from "react-icons/fa";

const HeaderNav = ({ children, ...otherProps }) => {
    const { currentUser } = otherProps;

    const [navBackground, setNavBackground] = useState(false);
    const navRef = useRef();
    navRef.current = navBackground;
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50;
            if (navRef.current !== show) {
                setNavBackground(show);
            }
        };
        document.addEventListener("scroll", handleScroll);
        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="dark"
                className="navbar navbar-expand-lg navbar-dark  fixed-top text-white-50"
                style={{
                    transition: "1s ease",
                    backgroundColor: navBackground ? "#141414" : "transparent",
                }}
            >
                <Link to="/HomeScreen">
                    <Navbar.Brand>
                        <img
                            className="d-inline-block align-top logo"
                            src={logo}
                            alt="Netflix Logo"
                        />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse
                    id="basic-navbar-nav"
                    className="px-md-5 px-sm-5 px-xs-5 py-md-5 py-sm-5"
                >
                    <Nav className="mr-auto">
                        <Link className="nav-link active" to="/HomeScreen">
                            Home <span className="sr-only">(current)</span>
                        </Link>
                        <Link className="nav-link" to="/FilmsScreen">
                            Films
                        </Link>
                    </Nav>
                    <div className="user-info-wrapper">
                        <div className="search-bar">
                            <SearchBar />
                        </div>
                        <div className="notification">
                            <FaBell
                                size={32}
                            // style={{ fill: "#fff", margin: "0px 2rem 0px 2rem" }}
                            />
                        </div>
                        <div className="user-profile">
                            <img className="avator" src={avator} alt="avator" />
                        </div>
                    </div>

                    <NavDropdown title="" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <Link className="nav-link text-white-50" to="/DashboardScreen">
                                User_01
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>

                            <Link className="nav-link text-white-50" to="/DashboardScreen">
                                User_02
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>

                            <Link className="nav-link text-white-50" to="/DashboardScreen">
                                Profilen Beheren
                            </Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider className="border border-dark" />

                        {/* <NavDropdown.Item href="/DashboardScreen">Account</NavDropdown.Item> */}
                        <NavDropdown.Item>
                            <Link className="nav-link text-white-50" to="/DashboardScreen">
                                Account
                            </Link>
                        </NavDropdown.Item>

                        <NavDropdown.Item>    <Link className="nav-link text-white-50" to="/DashboardScreen">
                            Helpcentrum
                        </Link> </NavDropdown.Item>
                        <NavDropdown.Divider className="border-dark" />
                        <NavDropdown.Item>
                            {/* <UserAuth /> */}

                            <div>
                                {!currentUser && <LogIn />}
                                {currentUser && <LogOut />}
                            </div>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default HeaderNav;
