const Content = () => {
  const handleNameChange = () => {
    const names = ["Ephrem", "Lozi", "Selam", "Saba"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    <div className="container">
      <h2> // Random Names // </h2>
      <hr />
      <p>{handleNameChange()}!</p>
    </div>
  );
};

export default Content;
