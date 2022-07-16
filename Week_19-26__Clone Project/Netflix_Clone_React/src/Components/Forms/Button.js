import React from "react";

const Buttons = ({ children, ...otherProps }) => {
    return (
        <button {...otherProps}>
            {children}
        </button>
    );
};
export default Buttons;
