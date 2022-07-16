import React from "react";

import Header from "../../../Components/Layout/Header";
import Footer from "../../../Components/Layout/Footer";

import FeaturedBanner from "../../Contents/MovieContents/FeaturedBanner";
import CatOverview from "../../Contents/MovieContents/CatOverview";
import FilmsCategories from "../../Contents/MovieContents/FilmsCategories";
import FilmsImage from "../../../Assets/images/slider/netflix-films-banner-01.jpg";

const Films = (props) => {
  console.log(props)
  return (
    <>
      <Header />
      <div className="films-container">
        <FeaturedBanner image={FilmsImage} />
        <CatOverview categories={<FilmsCategories props={props} />} />
      </div>
      <Footer />
    </>
  );
};

export default Films;
