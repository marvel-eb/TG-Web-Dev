// import React, { useState, useEffect } from "react";
import React, { useState } from "react";

// import { db } from "./../../firebase/utils";

import { auth } from "../../firebase/utils";

const Email = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [setLoader] = useState(false);
    // const [loader, setLoader] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        auth
            .collection("contacts")
            .add({
                name: name,
                email: email,
                message: message,
            })
            .then(() => {
                setLoader(false);
                alert("Your message has been submitted👍");
            })
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            });

        setName("");
        setEmail("");
        setMessage("");
    };
    return (
        <>
            <form className="contactForm" onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button
                    type="submit"
                    className="btn btn--contact"
                // style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                >
                    Submit
                </button>
            </form>
        </>
    );
};

export default Email;
