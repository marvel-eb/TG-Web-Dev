import React from "react";

import Header from "../../../Components/Layout/Header";
import Footer from "../../../Components/Layout/Footer";

import FeaturedBanner from "../../Contents/MovieContents/FeaturedBanner";
import CatOverview from "../../Contents/MovieContents/CatOverview";
import HomeCategories from "../../Contents/MovieContents/HomeCategories";
import HomeImage from "../../../Assets/images/slider/netflix-home-banner-02.jpg";

const Home = (props) => {
  return (
    <>
      <Header />
      <div className="home-container">
        <FeaturedBanner image={HomeImage} />
        <CatOverview categories={<HomeCategories props={props} />}/>
      </div>

      <Footer />
    </>
  );
};

export default Home;
