import Header from "./Components/Header";
import Introductie from "./Components/Introductie";
import SharedState from "./Components/SharedState";
import ListsKeys from "./Components/ListsKeys";
import ToDoList from "./Components/ToDoList";
import RandomNames from "./Components/RandomNames";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Introductie />
        <SharedState />
        <ListsKeys />
        <ToDoList />
        <RandomNames />
      </main>

      <Footer />
    </div>
  );
}

export default App;
