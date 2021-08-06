import { useState } from "react";
import CollapsibleMenu from "./Forecast";
import Popup from "./ClosePopup";

function OpenPopup() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      <button className="btn--open-popup" onClick={() => setButtonPopup(true)}>
        <p> Forecast</p>
      </button>

      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <CollapsibleMenu />
      </Popup>
    </div>
  );
}

export default OpenPopup;
