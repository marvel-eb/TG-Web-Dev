import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import MovieCard from "./MovieCard";
import { baseInstance } from "../../../utilities/axios";

export default function CatSlider({ title, fetchUrl, isLargeRow, id, modal}) {
  const [movies, setMovies] = useState([]);
  const [active, setActive] = useState(false)
  const [width, setWidth] = useState(window.innerWidth);
  const [showAmount, setShowAmount] = useState(6)


  useEffect(() => {
    async function fetchData() {
      const request = await baseInstance.get(fetchUrl);
      request.data.results ? setMovies(request.data.results) : setMovies(request.data.cast);
      return request;
    }

    fetchData();
  }, [fetchUrl]);


  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      // console.log("ik werk" + window.innerWidth);
      }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };

  }, []);

 

// set number of films shown in category lane
useEffect(() => {
  
  if (width >= 1440) {
    setShowAmount(6)
  }
  if ((width < 1440) & (width > 1200)) {
    setShowAmount(5)
  }
  if ((width < 1200) & (width > 1000)) {
    setShowAmount(4)
  }
  if ((width < 1000) & (width > 600)) {
    setShowAmount(3)
  }
  if (width < 600) {
    setShowAmount(2)
  }
  return () => {

  }
}, [width])

  // console.log(showAmount)

  let filteredMovieArray = movies.filter(movie => movie.backdrop_path)

  return (
    <div className="cat-slider-container container-fluid py-5">
      <h2 className="movie__title text-secondary px-4">{title}</h2>
      <Carousel show={showAmount} infiniteLoop={false} active={active}>
        {filteredMovieArray.map((movie, index) => (
          <MovieCard movie={movie} index={index} isLargeRow={isLargeRow} key={movie.id} id={movie.id} modal={modal} setActive={setActive} />
        ))}
      </Carousel>
    </div>
  );
}
