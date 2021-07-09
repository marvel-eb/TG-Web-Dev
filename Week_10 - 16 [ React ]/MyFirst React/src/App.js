// import logo from "./logo.svg";

import "./App.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

import ClassComponent from "./Components/ClassComponent";
import FunctionalComponent from "./Components/FunctionalComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ClassComponent />
        <FunctionalComponent />

        <Content />
      </main>

      <Footer />
    </div>
  );
}

export default App;
