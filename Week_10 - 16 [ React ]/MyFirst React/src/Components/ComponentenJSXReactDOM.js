import React, { useState } from "react";
// import map from "lodash/map";
// import startCase from "lodash/startCase";

function ComponentenJSXReactDOM() {
  // 01.Componenten, JSX en ReactDOM
  const [name, setName] = useState("Change Me, Please");

  function handleChangeName(e) {
    let value = e.target.value;
    setName(value);
  }

  return (
    <div className="container">
      <h2> 01// Componenten, JSX en ReactDOM </h2>
      <hr />
      <h4>- Functional Component </h4> <br />
      <input type="text" onChange={handleChangeName} />
      <div className="output-result">
        {" "}
        <h5>
          Hallo! Mr <span class="changable-text"> {name}</span>{" "}
        </h5>
      </div>
      <h4>- Class Component </h4>
    </div>
  );
}

export default ComponentenJSXReactDOM;
