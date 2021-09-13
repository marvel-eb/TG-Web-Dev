import React from "react";
import Header from "../Layout/Header";
import HomeFeaturedSlider from "../Contents/HomeFeaturedSlider";
import HomeHorizSlider from "../Contents/HomeHorizSlider";
import Footer from "../Layout/Footer";

const Home = (props) => {
  return (
    <>
      <Header {...props} />
      <HomeFeaturedSlider {...props} />
      <HomeHorizSlider {...props} />
      <Footer {...props} />
    </>
  );
};

export default Home;
