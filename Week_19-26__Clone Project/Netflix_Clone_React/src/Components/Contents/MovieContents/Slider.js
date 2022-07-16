import React from "react";
// import data from "./ExampleData";
import data from "../../../data/moviedData";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faPlay,
//     faPlus,
//     faChevronDown,
//     FaThumbsUp
// } from "@fortawesome/free-solid-svg-icons";

// import {
//     faThumbsUp as farThumbUp,
//     faThumbsDown as farThumbDown,
// } from "@fortawesome/free-regular-svg-icons";

import { FaPlay, FaPlus, FaChevronDown, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Slider() {
    const moviesExample = data.results;
    console.table(moviesExample);
    function ratingToPercentage(rating) {
        return (rating * 10).toFixed(0);
    }
    return (
        <div>
            <div className="slider-container">
                {moviesExample.map((item) => (
                    //This would be the image <img className="carousel-item-closed" src={/*item.poster_path*/} alt={item.title}></img>
                    <div className="slider-item">
                        <div className="slider-inner">
                            <div className="image-placeholder">image placeholder</div>
                            <div className="card-hovered">
                                <div className="video-placeholder">video placeholder</div>
                                <div className="buttons-container">
                                    <ul className="left-buttons">
                                        <li className="slider-play-button">
                                            {/* <FontAwesomeIcon icon={faPlay} /> */}
                                            <FaPlay />
                                        </li>
                                        <li>
                                            {/* <FontAwesomeIcon icon={faPlus} /> */}
                                            <FaPlus />
                                        </li>
                                        <li>
                                            {/* <FontAwesomeIcon icon={farThumbUp} /> */}
                                            <FaThumbsUp />
                                        </li>
                                        <li>
                                            {/* <FontAwesomeIcon icon={farThumbDown} /> */}
                                            <Link to="modal/:id"><FaChevronDown /></Link>
                                        </li>
                                    </ul>
                                    <ul className="right-buttons">
                                        <li>
                                            {/* <FontAwesomeIcon icon={faChevronDown} /> */}
                                            <FaChevronDown />
                                        </li>
                                    </ul>
                                </div>
                                <div className="slider-more-info">
                                    <div className="slider-information">
                                        <h2 className="card-movie-title">{item.title}</h2>
                                        <p className="match-percentage">
                                            {ratingToPercentage(item.vote_average)}% Match
                                        </p>
                                        <p>Genre - Word - Word</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Slider;
