import React from "react";

// // using ES6 modules
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";

const LogIn = (props) => {
    return (
        <div>

            <Link to="/LogInScreen">
                <span>
                    <FaUserAlt className="s-icons text-white-50" size="2em" />
                </span>
            </Link>
        </div>
    );
};

export default LogIn;
