import React from "react";
import logo from "../../Assets/images/netflix-logo.svg";
import SearchBar from "../Contents/SearchBar";

const HeaderNav = (props) => {
    return (
        <>

            <a className="navbar-brand" href="#">
                <img className="logo"

                    src={logo}
                    alt="First slide"
                />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">
                            Homepagina <span class="sr-only">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="#">
                            Series
                        </a>
                    </li>
                    <li class="nav-item">
                        <a className="nav-link" href="#">
                            Nieuw en populair
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            Min lijst
                        </a>
                    </li>

                    {/* <!--
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
--> */}
                </ul>



                <SearchBar />




                <ul className="navbar-nav mr-auto-">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            UserPic
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                        </div>
                    </li>
                </ul>
            </div>

        </>
    );
};

export default HeaderNav;
