import React from "react";
import { createPortal } from "react-dom";

export default function Modal(props) {
  console.log(props)
    return createPortal(
      <div className="modal-wrapper">
        <div className="modal-backdrop" onClick={props.onClick}></div>
        <div className="modal-box">
          {props.children}
        </div>
      </div>,
      document.getElementById("modal_root"),
    );
  }

