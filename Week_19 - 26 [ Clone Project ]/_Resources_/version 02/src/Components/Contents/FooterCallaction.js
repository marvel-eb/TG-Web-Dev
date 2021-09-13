import React from "react";

const FooterCallaction = () => {
    return (
        <>
            {/* <Link to="/ProductDetails/imac-2021">
                <button className="btn banner-btn btn--primary">
                  Buy Now
                </button>
              </Link> */}

            <ul className="list-unstyled">
                <li className="btn-link">
                    {" "}
                    <a>Audio en ondertiteling</a>{" "}
                </li>
                <li className="btn-link">
                    {" "}
                    <a>Mediacenter</a>{" "}
                </li>
                <li className="btn-link">
                    {" "}
                    <a>Privacy</a>{" "}
                </li>
                <li className="btn-link">
                    {" "}
                    <a>Contact opnemen</a>{" "}
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

