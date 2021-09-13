import React from "react";

const FooterLinks = () => {
    return (
        <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-4 col-12">
                <ul className="list-unstyled">
                    <li className="btn-link">
                        {" "}
                        <a>Audiodescriptie</a>{" "}
                    </li>
                    <li className="btn-link">
                        {" "}
                        <a>Relaties met investeerders</a>{" "}
                    </li>
                    <li className="btn-link">
                        {" "}
                        <a>Wettelijke bepalingen</a>{" "}
                    </li>
                </ul>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-12">
                <ul className="list-unstyled">
                    <li className="btn-link">
                        {" "}
                        <a>Helpcentrum</a>{" "}
                    </li>
                    <li className="btn-link">
                        {" "}
                        <a>Vacatures</a>{" "}
                    </li>
                    <li className="btn-link">
                        {" "}
                        <a>Cookievoorkeuren</a>{" "}
                    </li>
                </ul>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-12">
                <ul className="list-unstyled">
                    <li className="btn-link">
                        {" "}
                        <a>Cadeaubonnen</a>{" "}
                    </li>
                    <li className="btn-link">
                        {" "}
                        <a>Gebruksvoorwaarden</a>{" "}
                    </li>
                    <li className="btn-link">
                        {" "}
                        <a>Bedrijfsgegevens</a>{" "}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FooterLinks;
