import React from "react";

import {
    FaFacebookSquare,
    FaTwitterSquare,
    FaYoutube,
    FaInstagramSquare,
} from "react-icons/fa";

const Social = (props) => {
    return (
        <div className="mb-3">


            <FaFacebookSquare className="s-icons" size={50} margin-right="10px" />
            <FaTwitterSquare className="s-icons" size={50} margin-right="10px" />
            <FaInstagramSquare className="s-icons" size={50} margin-right="10px" />
            <FaYoutube className="s-icons" size={50} />
        </div>
    );
};

export default Social;
