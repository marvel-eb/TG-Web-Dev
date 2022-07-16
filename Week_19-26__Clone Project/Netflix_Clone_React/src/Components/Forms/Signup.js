import React, { Component } from "react";

import { auth, handleUserProfile } from "../../firebase/utils";

import FormInput from "../Forms/FormInput";
import Buttons from "../Forms/Button";

const initialState = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    postalCode: "",
    country: "",
    profession: "",
    errors: [],
};

class SignUp extends Component {
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

    handleFormSubmit = async (event) => {
        event.preventDefault();
        const {
            displayName,
            email,
            password,
            confirmPassword,
            phoneNumber,
            postalCode,
            profession,
        } = this.state;

        if (password !== confirmPassword) {
            const err = ["Your password Don't match"];
            this.setState({
                errors: err,
            });
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await handleUserProfile(user, {
                displayName,
                phoneNumber,
                postalCode,
                profession,
            });
            this.setState({
                ...initialState,
            });
        } catch (err) {
            // console.log(err)
        }
    };

    render() {
        const {
            displayName,
            email,
            password,
            confirmPassword,
            phoneNumber,
            postalCode,
            profession,
            errors,
        } = this.state;
        return (
            <div className="user-auth-form__holder p-5">
                <form className="user-auth__form" onSubmit={this.handleFormSubmit}>
                    {/* Error Display Info  */}

                    {errors.length > 0 && (
                        <ul>
                            {errors.map((err, index) => {
                                return (
                                    <li className="error-message" key={index}>
                                        {err}
                                    </li>
                                );
                            })}
                        </ul>
                    )}

                    <h2 className="user-auth__heading">Create your account</h2>


                    <div className="form-wrapper my-5">
                        <FormInput
                            type="text"
                            name="displayName"
                            value={displayName}
                            placeholder="Full Name"
                            onChange={this.handleChange}
                        />

                        <FormInput
                            type="email"
                            name="email"
                            value={email}
                            placeholder="Email"
                            onChange={this.handleChange}
                        />

                        <FormInput
                            type="password"
                            name="password"
                            value={password}
                            placeholder="Password"
                            onChange={this.handleChange}
                        />

                        <FormInput
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword}
                            placeholder="Confirm Password"
                            onChange={this.handleChange}
                        />

                        <FormInput
                            type="text"
                            name="profession"
                            value={profession}
                            placeholder="Your Profession"
                            onChange={this.handleChange}
                        />

                        <FormInput
                            type="number"
                            name="phoneNumber"
                            autocomplete="phoneNumber"
                            pattern="[\d \-\+]+"
                            value={phoneNumber}
                            placeholder="Telephone"
                            onChange={this.handleChange}
                        />

                        <FormInput
                            type="number"
                            name="postalCode"
                            autocomplete="postalCode"
                            pattern="[0-9]{5}"
                            title="Five digit zip code"
                            value={postalCode}
                            placeholder="ZIP  code (optional)"
                            onChange={this.handleChange}
                        />

                        <Buttons className="btn btn--signIn-email mt-4 py-3" type="submit">
                            Register
                        </Buttons>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;
