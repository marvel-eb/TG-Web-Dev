import React, { Component } from "react";
import { auth, handleUserProfile } from "./firebase/utils";

// // GitHub Pages Hosting -- using ES6 modules //
// import {
//   HashRouter as Router,
//   Route,
//   Switch,
//   Redirect,
// } from "react-router-dom";

// Firebase Hosting -- using ES6 modules //
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomeScreen from "./Components/Pages/MainPages/HomeScreen";
import FilmsScreen from "./Components/Pages/MainPages/FilmsScreen";
import ModalContent from "./Components/Contents/MovieContents/ModalContent";
import DemoEphremCategories from "./Components/Contents/DemoEphremCategories";

import RecoveryScreen from "./Components/Pages/UserPages/RecoveryScreen";
import RegistrationScreen from "./Components/Pages/UserPages/RegistrationScreen";
import DashboardScreen from "./Components/Pages/UserPages/DashboardScreen";
import LandingScreen from "./Components/Pages/UserPages/LandingScreen";
import LogInScreen from "./Components/Pages/UserPages/LogInScreen";
import LogOut from "./Components/Contents/UserAuthContent/LogOut";
// import LogIn from "./Components/Contents/UserAuthContent/LogIn";

const initialState = {
  currentUser: null,
};

// class App extends React.Component { // RESERVED //
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }
  authListener = null;
  componentDidMount() {
    this.authListener = auth.onAuthStateChanged(async (userAuth) => {
      // if (!userAuth) {
      //   this.setState({
      //     ...initialState,
      //   });
      // }
      // RESERVED
      this.setState({
        currentUser: userAuth,
      });

      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }
      this.setState({
        ...initialState,
      });
    });
  }

  componentWillUnmount() {
    this.authListener();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route
              exact
              path="/HomeScreen"
              render={(props) =>
                !currentUser ? (
                  <Redirect to="/LogInScreen" />
                ) : (
                  <HomeScreen currentUser={currentUser} {...props} />
                )
              }
            />

            <Route
              exact
              path="/FilmsScreen"
              render={(props) =>
                !currentUser ? (
                  <Redirect to="/LoginScreen" />
                ) : (
                  <FilmsScreen currentUser={currentUser} {...props} />
                )
              }
            />

            <Route
              exact
              path="/"
              render={() => <LandingScreen currentUser={currentUser} />}
            />

            <Route
              exact
              path="/LogInScreen"
              render={() =>
                currentUser ? (
                  <Redirect to="/DashboardScreen" />
                ) : (
                  <LogInScreen currentUser={currentUser} />
                )
              }
            />

            <Route
              path="/LogOut"
              render={() =>
                !currentUser ? (
                  <Redirect to="/LogInScreen" />
                ) : (
                  <LogOut currentUser={currentUser} />
                )
              }
            />

            <Route
              exact
              path="/DashboardScreen"
              render={() =>
                !currentUser ? (
                  <Redirect to="/LoginScreen" />
                ) : (
                  <DashboardScreen currentUser={currentUser} />
                )
              }
            />

            <Route
              path="/RegistrationScreen"
              render={() =>
                currentUser ? (
                  <Redirect to="/DashboardScreen" />
                ) : (
                  <RegistrationScreen currentUser={currentUser} />
                )
              }
            />
            <Route path="/RecoveryScreen" component={RecoveryScreen} />
            <Route
              path="/DemoEphremCategories"
              component={DemoEphremCategories}
            />
          </Switch>
          <Route path="/" render={(props) => <ModalContent {...props} />} />
        </div>
      </Router>
    );
  }
}
export default App;
