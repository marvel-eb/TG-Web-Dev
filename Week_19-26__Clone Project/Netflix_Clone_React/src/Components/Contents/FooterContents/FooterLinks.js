import React from "react";
// using ES6 modules
import { Link } from "react-router-dom";
const FooterLinks = () => {
    return (
        <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-4 col-12">
                <ul className="list-unstyled">
                    <li className="btn-link">
                        <Link className="text-white-50" to="#">
                            Audiodescriptie
                        </Link>


                    </li>
                    <li className="btn-link">
                        <Link className="text-white-50" to="#">
                            Relaties met investeerders
                        </Link>

                    </li>
                    <li className="btn-link">
                        <Link className="text-white-50" to="#">
                            Wettelijke bepalingen
                        </Link>

                    </li>
                </ul>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-12">
                <ul className="list-unstyled">
                    <li className="btn-link">
                        <Link className="text-white-50" to="#">
                            Helpcentrum
                        </Link>

                    </li>
                    <li className="btn-link">
                        <Link className="text-white-50" to="#">
                            Vacatures
                        </Link>

                    </li>
                    <li className="btn-link">
                        <Link className="text-white-50" to="#">
                            Cookievoorkeuren
                        </Link>

                    </li>
                </ul>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4 col-12">
                <ul className="list-unstyled">
                    <li className="btn-link">
                        <Link className="text-white-50" to="#">
                            Cadeaubonnen
                        </Link>

                    </li>
                    <li className="btn-link">
                        <Link className="text-white-50" to="#">
                            Gebruksvoorwaarden
                        </Link>

                    </li>
                    <li className="btn-link">
                        <Link className="text-white-50" to="#">
                            Bedrijfsgegevens
                        </Link>

                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FooterLinks;
