import React from "react";
// using ES6 modules
import { Link } from "react-router-dom";
const FooterCallaction = () => {
    return (
        <>

            <ul className="list-unstyled">
                <li className="btn-link">
                    <Link className="text-white-50" to="#">
                        Audio en ondertiteling
                    </Link>

                </li>
                <li className="btn-link">
                    <Link className="text-white-50" to="#">
                        Mediacenter
                    </Link>
                </li>
                <li className="btn-link">
                    <Link className="text-white-50" to="#">
                        Privacy
                    </Link>

                </li>
                <li className="btn-link">
                    <Link className="text-white-50" to="#">
                        Contact opneme
                    </Link>

                </li>
            </ul>
            {/* <!--
              <address>
              <strong>MyStoreFront, Inc.</strong><br>
              Indian Treasure Link<br>
              Quitman, WA, 99110-0219<br>
              <abbr title="Phone">P: </abbr> (123) 456-7890
              </address>
              <address>
              <strong>Full Name</strong><br>
              <a href="mailto:#">first.last @example.com</a>
              </address>
              --> */}

            <button type="button" className="btn btn-secondary">
                Servicecode
            </button>
        </>

    );
};

export default FooterCallaction;

