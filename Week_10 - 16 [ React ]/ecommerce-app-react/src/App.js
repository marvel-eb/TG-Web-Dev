import React, { Component } from "react";
import { auth, handleUserProfile } from "./firebase/utils";
// using ES6 modules
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Home from "./Components/Pages/PagesMain/Home";
import Sale from "././Components/Store/ProductSale";
import ProductDetails from "./Components/Store/ProductDetails";
import ShoppingCart from "./Components/Store/Products/ShoppingCart";
import ProductCategories from "./Components/Store/ProductCategories";

import About from "./Components/Pages/PagesMain/About";
import Return from "./Components/Pages/PagesMain/Return";
import Privacy from "./Components/Pages/PagesMain/Privacy";

import LogIn from "./Components/Pages/PagesUser/LogIn";
import LogOut from "./Components/Contents/HeaderContents/CallAction/LogOut";
import Contact from "./Components/Pages/PagesUser/Contact";
import Recovery from "./Components/Pages/PagesUser/Recovery";
import Account from "./Components/Pages/PagesUser/AccountDashboard";
import Registration from "./Components/Pages/PagesUser/Registration";

const initialState = {
  currentUser: null,
};

class App extends Component {
  // class App extends React.Component {
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
      //......................
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
              path="/"
              render={() => <Home currentUser={currentUser} />}
            />

            <Route
              path="/Registration"
              render={() =>
                currentUser ? (
                  <Redirect to="/Account" />
                ) : (
                  <Registration currentUser={currentUser} />
                )
              }
            />

            <Route
              path="/LogIn"
              render={() =>
                currentUser ? (
                  <Redirect to="/Account" />
                ) : (
                  <LogIn currentUser={currentUser} />
                )
              }
            />

            <Route
              path="/LogOut"
              render={() =>
                !currentUser ? (
                  <Redirect to="/LogIn" />
                ) : (
                  <LogOut currentUser={currentUser} />
                )
              }
            />

            <Route
              path="/Account"
              render={() =>
                !currentUser ? (
                  <Redirect to="/LogIn" />
                ) : (
                  <Account currentUser={currentUser} />
                )
              }
            />

            <Route
              path="/ProductDetails/:id"
              render={() => <ProductDetails currentUser={currentUser} />}
            />
            <Route
              path="/ProductCategories"
              render={() => <ProductCategories currentUser={currentUser} />}
            />

            <Route
              path="/ShoppingCart"
              render={() => <ShoppingCart currentUser={currentUser} />}
            />

            <Route path="/Sale" render={() => <Sale />} />
            <Route path="/Privacy" render={() => <Privacy />} />
            <Route path="/Contact" render={() => <Contact />} />
            <Route path="/Return" render={() => <Return />} />
            <Route path="/About" render={() => <About />} />
            <Route path="/Recovery" render={() => <Recovery />} />

            {/* 
          <Header currentUser={currentUser} />
          <Footer currentUser={currentUser} /> 
            <Route path="/Registration" render={() => <Registration />} />
            <Route path="/" exact component={Home} />
            <Route path="/ProductDetails" component={ProductDetails} />
            <Route path="/ProductOverview" component={ProductOverview} />
            <Route path="/ShoppingCart" component={ShoppingCart} />
            <Route path="/LogIn" component={LogIn} />
            <Route path="/Registration" component={Registration} /> */}

            {/* <Route
              path="/UserData"
              render={() =>
                currentUser ? (
                  <Redirect to="/Account" />
                ) : (
                  <UserData currentUser={currentUser} />
                )
              }
            /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
