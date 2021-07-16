// Main Component - Child components reader

import Header from "./Components/Header";
import FunctionalComponent from "./Components/FunctionalComponent";
import ClassComponent from "./Components/ClassComponent";
import SharedState from "./Components/SharedState";
import ListsKeys from "./Components/ListsKeys";
import ToDoList from "./Components/ToDoList";
import RandomNames from "./Components/RandomNames";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />

      <FunctionalComponent />
      <ClassComponent />
      <SharedState />
      <ListsKeys />
      <ToDoList />
      <RandomNames />

      <Footer />
    </div>
  );
}

export default App;
