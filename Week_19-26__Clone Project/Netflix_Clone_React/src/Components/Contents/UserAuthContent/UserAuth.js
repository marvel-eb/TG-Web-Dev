import React from "react";

import LogIn from "./LogIn";
import LogOut from "./LogOut";

const UserAuth = ({ children, ...otherProps }) => {
    const { currentUser } = otherProps;
    return (

        <div>
            {!currentUser && (
                <div className="header--callAction">
                    <LogIn className="s-icons" size="2em" />
                </div>
            )}
            {currentUser && (
                <div className="header--callAction text-danger">
                    <LogOut className="s-icons" size="2em" />
                </div>
            )}
        </div>
    );
};

UserAuth.propTypes = {};

export default UserAuth;
