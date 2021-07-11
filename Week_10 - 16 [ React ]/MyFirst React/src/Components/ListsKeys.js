import { useState } from "react";

function ListsKeys() {
  const [names, setNames] = useState([]);

  function handleInput() {
    let input = document.getElementById("input");
    setNames((prevState) => {
      let state = [...prevState];
      state.push(input.value);
      return state;
    });
  }
  return (
    <div className="container App">
      <h2> 03// Lists en Keys </h2>
      <hr />
      <h4>- Lists en Keys Opdracht</h4>
      <input id="input" />
      <button className="btn" onClick={handleInput}>
        {" "}
        Submit Name{" "}
      </button>

      {names.map((name) => (
        <div className=""> {name}</div>
      ))}
    </div>
  );
}
export default ListsKeys;
