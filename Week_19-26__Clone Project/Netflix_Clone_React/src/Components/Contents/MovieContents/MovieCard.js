import React, { useState, useEffect } from 'react'
import { FaPlay, FaPlus, FaChevronDown, FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { movieInstance } from '../../../utilities/axios';
import { Link } from 'react-router-dom';



export default function MovieCard({ movie, index, isLargeRow, id, setActive, modal}) {
    const [isHovered, setIsHovered] = useState(false);
    const [trailerLink, setTrailerLink] = useState();
    const [runtime, setRuntime] = useState();
  
    const mountedStyle = {
        animation: "inAnimation 0.3s ease-out",
        animationFillMode: "forwards",
    }
    
  

    const img_url = "https://image.tmdb.org/t/p/original/";

    const ratingToPercentage = (rating) => {
        return (rating * 10).toFixed(0);
    }

    useEffect(() => {
        async function fetchData() {
            const request = await movieInstance.get(`${id}`)
                .then(function (request) {
                    // handle success
                    setTrailerLink(request.data.results[0].key);
                })
                .catch(function (error) {
                    // handle error
                    // console.log(error);
                })
                .then(function () {
                    // always executed
                    // console.log('always executed?');
                });
        }
        fetchData();
    }, [id]);

    
    useEffect(() => {
        const axios = require('axios');
             // Get runtime
             axios.get(`https://api.themoviedb.org/3/movie/${movie?.id}?api_key=${process.env.REACT_APP_NETFLIX_CLONE_API_KEY}&language=en-US`)
             .then(function (response) {
                 // handle success
                 setRuntime(response.data.runtime);
             })
             .catch(function (error) {
                 // handle error
                 console.log(error);
             })
             .then(function () {
                 // always executed
             });

        return () => {
            
        }
    }, [id])




    function GetRuntime() {
        let hours = Math.floor(runtime / 60);
        let minutes = runtime % 60;

        if (hours === 0) {
            return <>
                <span>{minutes + "m"}</span>
            </>
        } else {
            return <>
                <span>{hours + " u " + minutes + "m"}</span>
            </>
        }
    }


    return (
        <div
            className="movie-card"
            onMouseEnter={() => {
                setIsHovered(true)
                setActive(true)
        }}
            onMouseLeave={() => {
                setIsHovered(false)
                setActive(false)
            }}
        >
            <img
                key={movie.id}
                src={`${img_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                alt={movie.name}
                loading="lazy"
            />

            {isHovered && (
                <div className="movie-card-pop-up"
                    style={mountedStyle}>
                    <Link to={
                        {
                            pathname: modal.props.match.url,
                            search: `?id=${movie.id}`,
                            movie: movie
                        }}
                    >


                        {trailerLink ?
                            <iframe autoPlay muted src={`https://www.youtube.com/embed/${trailerLink}?autoplay=1&mute=1&controls=0`}></iframe>
                            :
                            <img
                                key={movie.id}
                                src={`${img_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                    }`}
                                alt={movie.name}
                                loading="lazy"
                            />
                        }

                        <div className="itemInfo">
                            {/* <Link to={
                            {
                                pathname: modal.props.match.url,
                                search: `?id=${movie.id}`,
                                movie: movie
                            }}
                        >
                            <div className="modal-button-backdrop"></div>
                        </Link> */}
                            <div className="movie-card-buttons-container">


                                <div className="movie-card-buttons-left">
                                    <div className="movie-card-button">
                                        <FaPlus className="movie-card-button-icon" />
                                    </div>
                                    <div className="movie-card-button">
                                        <FaPlay className="movie-card-button-icon" />
                                    </div>
                                    <div className="movie-card-button">
                                        <FaThumbsUp className="movie-card-button-icon" />
                                    </div>
                                    <div className="movie-card-button">
                                        <FaThumbsDown className="movie-card-button-icon" />
                                    </div>
                                </div>
                                <div className="movie-card-buttons-right">
                                    <Link to={
                                        {
                                            pathname: modal.props.match.url,
                                            search: `?id=${movie.id}`,
                                            movie: movie
                                        }}
                                    >
                                        <div className="movie-card-button">
                                            <FaChevronDown className="movie-card-button-icon" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <div className="movie-card-info">

                                <h2 className="movie-title">{movie.title}</h2>
                                <div className="movie-details">
                                     <p>{GetRuntime()}</p>
                                    
                                    <p className="match-percentage">
                                        {ratingToPercentage(movie.vote_average)}% Match
                                    </p>
                                    {/* <p>{movie.genre_ids}</p> */}
                                </div>
                            </div>
                        </div>

                    </Link>
                </div>
            )}
        </div>
    );
}