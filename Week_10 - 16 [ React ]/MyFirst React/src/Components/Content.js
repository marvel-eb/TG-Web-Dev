const Content = () => {
  const handleNameChange = () => {
    const names = ["Ephrem", "Lozi", "Selam", "Saba"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    <div className="container">
      <hr />
      <p>{handleNameChange()}!</p>
    </div>
  );
};

export default Content;

// {
//   /* <img src={logo} className="App-logo" alt="logo" />
// <p>
//   YES! Edit <code>src/App.js</code> and save to reload.
// </p>

// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a> */
// }
