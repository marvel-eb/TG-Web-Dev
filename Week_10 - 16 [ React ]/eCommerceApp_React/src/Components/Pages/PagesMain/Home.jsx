import React from "react";
import Header from "../../Layout/Header";
import Featured from "../../Store/ProductFeatured";
import ProductOverview from "../../Store/ProductOverview";
import Footer from "../../Layout/Footer";

const Home = (props) => {
  return (
    <>
      <Header {...props} />
      {props.children}

      <Featured />
      <ProductOverview />
      <Footer {...props} />
    </>
  );
};

export default Home;
