import React, { Component } from "react";
import Button from "./Button";
// import { signInWithGoogle, auth } from "../../firebase/utils";

import { signInWithGoogle, auth } from "../../firebase/utils";
import FormInput from "./FormInput";
import { FaGoogle } from "react-icons/fa";

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

        // I will fix these by any means (I will probabbly convert it to "FunctionalComponennt") Since it is not allowed to call "useState" in "ClassComponent" - EPHREM //
        //============================================================================================================================================================//
        // const [checkbox, setCheckbox] = useState(false);
        // // Remember Me
        // function handleChange() {
        //     setCheckbox(!checkbox);
        //     // console.log(checkbox);
        // }

        return (
            <div className="container user-auth-form__holder p-5">
                <form className="user-auth__form" onSubmit={this.handleSubmit}>
                    <h2 className="user-auth__heading mb-4"> Inloggen</h2>
                    <p> Use the following Credentials to SignIn or create an account</p>
                    <div className=" text-white p-3 rounded guest-user text-left">

                        <p className="text-white-50">Email: <strong>guest@netflixclone.com</strong> </p>
                        <p className="text-white-50">Password: <strong>guestTG</strong> </p>
                    </div>

                    <div className="form-wrapper my-5">
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

                        <div className="form__separator---">
                            <span className="form__label">
                                <Link to="/RecoveryScreen">
                                    <font>Forgot your password? Reset</font>
                                </Link>
                            </span>
                        </div>

                        <Button
                            variant="submit"
                            size="lg"
                            type="submit"
                            className="btn btn--signIn-email mt-4 py-3"
                        >
                            Inloggen
                        </Button>
                        {/* <Link to="/HomeScreen">
                            <Button
                                variant="submit"
                                size="lg"
                                type="submit"
                                className="btn btn--signIn-email mt-4 py-3"
                            >
                                Door gaan zonder in te loggen
                            </Button>
                        </Link> */}
                        <div className="row mt-5">
                            <div className="col-md-6 p-0 text-left">
                                <label className="rememberMe">
                                    <span className="login-remember-me-label-text">
                                        <font> Mijn gegevens onthouden</font>
                                    </span>
                                    {/* <input type="checkbox" checked="checked" /> */}
                                    <input
                                        type="checkbox"
                                        // checked="checked"
                                        name="rememberCheck"
                                    // value={checkbox}
                                    // onChange={handleChange}
                                    />
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                            <div className="col-md-6 p-0 text-right">
                                <Link to="#">Hulp nodig?</Link>
                            </div>
                        </div>

                        <div>
                            <FaGoogle className="fb-login" />
                            <Link to="#" onClick={signInWithGoogle}>
                                Inloggen met Google
                            </Link>

                            {/* 
                            <Button
                                className="btn btn--signIn-google"
                                onClick={signInWithGoogle}
                            >
                                SignIn with Google
                            </Button> */}
                        </div>
                        <br />
                        <div>
                            <p>
                                Is Netflix nieuw voor jou?{" "}
                                <Link to="/RegistrationScreen">Registreer je nu</Link>
                            </p>
                        </div>
                        <p className="">
                            This page is protected by Google reCAPTCHA to ensure you're not a
                            bot.{" "}
                            <Link className="privacy-link" to="#">
                                Lees meer informatie
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
