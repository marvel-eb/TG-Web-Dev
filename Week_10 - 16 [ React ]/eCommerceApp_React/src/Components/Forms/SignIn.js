import React, { Component } from "react";

import Button from "../Forms/Button";
import { signInWithGoogle, auth } from "../../firebase/utils";

import FormInput from "./FormInput";

// using ES6 modules
import { Link } from "react-router-dom";
// import { Link, useHistory } from "react-router-dom";

// const history = useHistory();// Redirect to Dashboard

const initialState = {
  email: "",
  password: "",
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      // history.push("/") // Redirect to Dashboard

      this.setState({
        ...initialState,
      });
    } catch (err) {
      // console.log (err)
    }
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <h2> SignIn</h2>
          <hr className="margin-tb" />

          <div className="form-wrapper">
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              handleChange={this.handleChange}
            />

            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              handleChange={this.handleChange}
            />

            <div className="links">
              <Link to="/recovery"></Link>
            </div>

            <div class="form__separator">
              <span className="form__label">
                <Link to="/Recovery">
                  <font>Forgot your password? Reset</font>
                </Link>
              </span>
            </div>

            <Button type="submit" className="btn btn--signIn-email">
              SignIn with Email
            </Button>
            <font>Or, continue </font>
            <Button
              className="btn btn--signIn-google"
              onClick={signInWithGoogle}
            >
              SignIn with Google
            </Button>

            <div class="form__separator">
              <span className="form__label">
                <font>New to ReactShop? </font>
              </span>
              <Link to="/Registration">
                <button className="btn btn--register margin-tb">
                  Register to create new account
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
