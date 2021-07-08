// import logo from "./logo.svg";

import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

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
