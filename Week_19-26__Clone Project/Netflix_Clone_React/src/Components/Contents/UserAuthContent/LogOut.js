import React from "react";

// // using ES6 modules
// import { Link } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";

import { auth } from "../../../firebase/utils";

const LogOut = (props) => {
    return (
        <div>

            <span className="ml-3 r" onClick={() => auth.signOut()}>
                <FaSignOutAlt className="s-icons text-white-50" size="2em" />
            </span>
        </div>
    );
};

export default LogOut;
