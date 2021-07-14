import { useState } from "react";
const ListsKeys = () => {
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  const handleInput = () => {
    setNames((prevState) => {
      return [name, ...prevState]; // prepend new value
    });
    setName(""); // clear input
  };

  return (
    <div className="container">
      <h2> 03// Lists en Keys </h2>
      <hr />
      <h4>- Lists en Keys Opdracht</h4>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button className="btn btn--submit" onClick={handleInput}>
        Submit Name
      </button>

      {names.map((name) => (
        <div className="listItems">
          {" "}
          <p> {name} </p>
          <hr></hr>
        </div>
      ))}
    </div>
  );
};
//
// function ListsKeys = () {
//   const [names, setNames] = useState([]);

//   function handleInput() {
//     let input = document.getElementById("input");
//     setNames((prevState) => {
//       let state = [...prevState];
//       state.push(input.value);
//       return state;
//     });
//   }
//   return (
//     <div className="container App">
//       <h2> 03// Lists en Keys </h2>
//       <hr />
//       <h4>- Lists en Keys Opdracht</h4>
//       <input id="input" />
//       <button className="btn btn--submit" onClick={handleInput}>
//         {" "}
//         Submit Name{" "}
//       </button>

//       {names.map((name) => (
//         <div className="listItems">
//           <p> {name} </p>{" "}
//         </div>
//       ))}
//     </div>
//   );
// }
export default ListsKeys;
