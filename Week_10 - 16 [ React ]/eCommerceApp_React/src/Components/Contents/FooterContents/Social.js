import React from "react";

import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutube,
  FaInstagramSquare,
} from "react-icons/fa";

const Subscribe = (props) => {
  return (
    <div>
      <h4>
        <strong>FOLLOW US</strong>
      </h4>

      <FaFacebookSquare className="s-icons" size="1.5em" margin-right="10px" />
      <FaTwitterSquare className="s-icons" size="1.5em" />
      <FaInstagramSquare className="s-icons" size="1.5em" />
      <FaYoutube className="s-icons" size="1.5em" />
    </div>
  );
};

export default Subscribe;
