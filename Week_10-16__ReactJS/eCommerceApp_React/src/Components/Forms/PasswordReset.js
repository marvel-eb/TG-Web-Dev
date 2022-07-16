import React, { Component } from "react";
import { withRouter } from "react-router-dom";


import FormInput from "./FormInput";
import Button from "./Button";

import { auth } from "../../firebase/utils";

const initialState = {
  email: "",
  errors: [],
};

class PasswordReset extends Component {
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

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email } = this.state;

      const config = {
        url: "http://localhost:3000/login",
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          this.props.history.push("/login");
        })
        .catch(() => {
          const err = ["Email not found. Please try again."];
          this.setState({
            errors: err,
          });
        });
    } catch (err) {
      // console.log(err);
    }
  };

  render() {
    const { email, errors } = this.state;

    // const configAuthWrapper = {
    //   headline: "Email Password",
    // };

    return (
      // <AuthWrapper {...configAuthWrapper}>
      <>
        <div className="formWrap">
          <h1>Reset your password</h1>
          <p>
            Let's get you into your account by entering the email address you
            used when creating your account.
          </p>
          <hr className="margin-tb" />
          {errors.length > 0 && (
            <ul>
              {errors.map((e, index) => {
                return (
                  <li className="error-message" key={index}>
                    {e}
                  </li>
                );
              })}
            </ul>
          )}

          <form className="margin-tb" onSubmit={this.handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Type your Email address"
              onChange={this.handleChange}
            />

            <Button className="btn btn--signUp" type="submit">
              <h1> Continue</h1>
            </Button>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(PasswordReset);
