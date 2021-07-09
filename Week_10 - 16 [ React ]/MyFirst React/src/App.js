import Header from "./Components/Header";

import Footer from "./Components/Footer";

import ComponentenJSXReactDOM from "./Components/ComponentenJSXReactDOM";

import ControlledComponentsSharedState from "./Components/ControlledComponentsSharedState";
import ListsKeys from "./Components/ListsKeys";
import SideEffectsLifecycleMethods from "./Components/SideEffectsLifecycleMethods";
import RandomNames from "./Components/RandomNames";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ComponentenJSXReactDOM />

        <ControlledComponentsSharedState />

        <ListsKeys />

        <SideEffectsLifecycleMethods />
        <RandomNames />
      </main>

      <Footer />
    </div>
  );
}

export default App;
