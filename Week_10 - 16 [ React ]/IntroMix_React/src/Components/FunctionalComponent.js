import React, { useState } from "react";
// Functional  Component
function FunctionalComponent() {
  const [name, setName] = useState("Please, Change Me");

  const handleChangeName = (event) => {
    const value = event.target.value;
    setName(value);
  };

  return (
    <div className="container">
      <h2> 01// Introductie - Componenten, JSX en ReactDOM </h2>
      <hr />
      <h4>- Input on change: Functional Component </h4> <br />
      <input placeholder="Type..." type="text" onChange={handleChangeName} />
      <div className="output-result">
        {" "}
        <h5>
          Hello! Mr <span className="changable-text"> {name}</span>{" "}
        </h5>
      </div>
    </div>
  );
}

export default FunctionalComponent;
