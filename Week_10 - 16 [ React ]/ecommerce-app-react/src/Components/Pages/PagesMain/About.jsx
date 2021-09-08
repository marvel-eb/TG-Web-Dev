import React from "react";

import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
const About = (props) => {
  return (
    <>
      <Header {...props} />

      <div className="container-fluid light">
        <div className="container margin-tb">
          <h1>About this App...</h1>
          <hr />
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <p>
            EPHISHOP is an E-commerce app built in ReactJS for educational
            purpose, which is one of the assignment project from TechGrounds
            codding academy.
          </p>
        </div>
      </div>

      <Footer {...props} />
    </>
  );
};

export default About;
