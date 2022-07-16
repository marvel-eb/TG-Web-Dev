import React, { useState, useEffect } from "react";

// Netflix Api Call
import { baseInstance } from "../../utilities/axios";

// Movie Trailer Dependencies
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

// Modal Video preview goes here...;
// ..... is coming soon

// Font Icons - FontAwesome from ReactIcons Dependency
import {
  FaArrowLeft,
  FaArrowRight,
  FaPlay,
  FaPlus,
  FaChevronDown,
  FaThumbsUp,
} from "react-icons/fa";

const CatSlider = ({ title, fetchUrl, isLargeRow, id }) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  // const [modalVisibility, setModalVisibility] = useState(false);
  // const [movieSelected, setMovieSelection] = useState({});

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  // Hooks
  useEffect(() => {
    async function fetchData() {
      const request = await baseInstance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  // Movie Play by using YouTube Trailer
  const handleClick = (movie) => {
    // setModalVisibility(true);
    // setMovieSelection(movie);

    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="container-fluid  py-5">
      <section className="row">
        <h2 className="movie__title text-secondary px-4">
          {/* {title}*/} DEMO - EPHREM // IN PROGRESS...
        </h2>
        <p>
          This is for personal experience and educational purpose [ Removeable
          TXT! ]
        </p>
        <div className="cat-slider__wrapper">
          <div className="cat-slider">
            <div className="movie__poster-wrapper">
              <div className="movie__posters">
                <div className="cat-slider__arrow-left">
                  <span
                    className="arrow"
                    onClick={() => {
                      document.getElementById(id).scrollLeft -=
                        window.innerWidth - 80;
                    }}
                  >
                    <FaArrowLeft />
                  </span>
                </div>
                <div id={id} className="cat-slider__container">
                  {movies.map((movie) => (
                    <div className="cat-slider__item">
                      <div className="cat-slider__inner">
                        <div className="poster__placeholder">
                          <img
                            key={movie.id}
                            onClick={() => handleClick(movie)}
                            className={`movie__thumbnail ${
                              isLargeRow && "movie__thumbnail_lg"
                            }`}
                            src={`${base_url}${
                              isLargeRow
                                ? movie.poster_path
                                : movie.backdrop_path
                            }`}
                            loading="lazy"
                            alt={movie.name}
                          />
                        </div>

                        <div className="movie-card__hovered">
                          <div className="movie__placeholder">
                            {/* VIDEO PLAY BACK PLACEHOLDER */}
                            {/* {trailerUrl && (
                              <YouTube videoId={trailerUrl} opts={opts} />
                            )} */}
                            <YouTube videoId={trailerUrl} opts={opts} />
                          </div>
                          <div className="buttons-container">
                            <ul className="left-buttons">
                              <li className="slider-play-button">
                                <FaPlay />
                              </li>
                              <li>
                                <FaPlus />
                              </li>
                              <li>
                                <FaThumbsUp />
                              </li>
                              <li>
                                <FaChevronDown />
                              </li>
                            </ul>
                            <ul className="right-buttons">
                              <li>
                                <FaChevronDown />
                              </li>
                            </ul>
                          </div>
                          <div className="cat-slider__more-info">
                            <div className="cat-slider__information">
                              <h2 className="card-movie-title">
                                {movie.title}
                              </h2>
                              <p className="match-percentage">
                                {movie.vote_average}% Match
                              </p>

                              <p className="movie-desc">
                                {truncate(movie?.overview, 60)}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cat-slider__arrow-right">
                  <span
                    className="arrow"
                    onClick={() => {
                      document.getElementById(id).scrollLeft +=
                        window.innerWidth - 80;
                    }}
                  >
                    <FaArrowRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CatSlider;
