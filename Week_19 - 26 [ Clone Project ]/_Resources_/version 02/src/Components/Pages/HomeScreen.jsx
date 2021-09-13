import React from "react";
import Header from "../Layout/Header";
import Slider from "../Contents/HomeSlider";
import FilmGenre from "../Contents/FilmGenre";
import Footer from "../Layout/Footer";

const Home = (props) => {
  return (
    <>
      <Header {...props} />
      <Slider {...props} />
      <FilmGenre {...props} />
      <Footer {...props} />
    </>
  );
};

export default Home;
