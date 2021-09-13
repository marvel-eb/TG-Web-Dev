import React from "react";
import Header from "../Layout/Header";
<<<<<<< HEAD
import Slider from "../Contents/HomeSlider";
import FilmGenre from "../Contents/FilmGenre";
=======
import HomeFeaturedSlider from "../Contents/HomeFeaturedSlider";
import HomeHorizSlider from "../Contents/HomeHorizSlider";
>>>>>>> parent of c12a396 (update)
import Footer from "../Layout/Footer";
import Row from "../Contents/row"
import requests from "../Contents/requests"




const Home = (props) => {
  return (
    <>
      <Header {...props} />
<<<<<<< HEAD
      <Slider {...props} />
   
      <Row title="Frankie's Originals"  fetchUrl={requests.fetchNetflixOriginals}
      issmallRow={true}
    />
    <Row title="Trending Now"  fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rated"  fetchUrl={requests.fetchTopRated}/>
    <Row title="Action Movies"  fetchUrl={requests.fetchActionMovies}/>

      <FilmGenre {...props} />
=======
      <HomeFeaturedSlider {...props} />
      <HomeHorizSlider {...props} />
>>>>>>> parent of c12a396 (update)
      <Footer {...props} />
    </>
  );
};

export default Home;
