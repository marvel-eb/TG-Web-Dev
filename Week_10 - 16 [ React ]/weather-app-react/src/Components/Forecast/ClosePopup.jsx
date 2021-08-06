import React from "react";

function ClosePopup(props) {
  return props.trigger ? (
    <div className="popup">
      <button
        className="btn--close-popup"
        onClick={() => props.setTrigger(false)}
      >
        <p>x</p>
      </button>
      {props.children}
    </div>
  ) : (
    ""
  );
}

export default ClosePopup;
