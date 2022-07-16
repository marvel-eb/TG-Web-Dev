import React, { useState, useEffect } from "react";
import { FaPlay, FaInfo } from "react-icons/fa";
import { baseInstance } from "../../../utilities/axios";
import movieDataRequests from "../../../utilities/config";

const FeaturedBanner = () => {
    const [movie, setMovie] = useState([]);
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    useEffect(() => {
        async function fetchData() {
            const request = await baseInstance.get(movieDataRequests.fetchZeroes);
            // Shuffle movies randomly
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
            return request;
        }
        fetchData();
    }, []);

    return (
        <header
            className="featured_banner__wrapper pb-4"
            style={{
                backgroundImage: `url(
                      "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                    )`,
                backgroundPosition: "top center",
                backgroundSize: "cover",
            }}
        >
            <div className="featured_banner">
                <h1 className="featured_banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <p className="featured_banner__description">
                    {truncate(movie?.overview, 125)}
                </p>
                <div class="featured_banner__buttons  btn-block">
                    <button class="btn btn-light banner__button mr-2 rounded py-3 px-3">
                        <FaPlay /> Play
                    </button>
                    <button className="btn btn-secondary banner__button info ml-2 rounded py-3 px-3">
                        <FaInfo
                            fontSize="small"
                            className="infoIcon"
                            paddingRight={20}
                            marginRight={100}
                        />{" "}
                        More Information
                    </button>
                </div>
            </div>
            <div className="featured_banner__fadeShadow_Bottom" />
        </header>
    );
};

export default FeaturedBanner;
