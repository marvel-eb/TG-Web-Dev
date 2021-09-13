import React from "react";
import image from "../../Assets/images/slider/40X40.gif";

// import Toast from 'react-bootstrap/Toast';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Carousel from 'react-bootstrap/Carousel';

const HomeHorizSlider = (props) => {
    return (
        <>
            <p>Home -  Horizontal Slider ___ This area is ready to be used by Frankie - American man :) </p>
            <section className="container-fluid bg-secondary py-5">
                <h2 className="movie__title">NETFLIX ORIGINALS</h2>

                <div className="row movie__posters">{/* Thumbnails goed here */}</div>

                <h2 className="movie__title">TRENDING NOW</h2>

                <div className="row movie__posters">{/* Thumbnails goed here */}</div>
                <h2 className="movie__title">TOP RATED</h2>

                <div className="row movie__posters">{/* Thumbnails goed here */}</div>
                <h2 className="movie__title">ACTION MOVIES</h2>

                <div className="row movie__posters">{/* Thumbnails goed here */}</div>
                <h2 className="movie__title">HOROR MOVIES</h2>

                <div className="row movie__posters">{/* Thumbnails goed here */}</div>
                <h2 className="movie__title">ROMAN MOVIES</h2>

                <div className="row movie__posters">{/* Thumbnails goed here */}</div>
                <h2 className="movie__title">DOCUMENTARIES</h2>

                <div className="row movie__posters">{/* Thumbnails goed here */}</div>

                <div className="row posters">
                    <div className="col-md-4 pb-1 pb-md-0 col-lg-2">
                        <div className="card bg-secondary">
                            <img
                                className="card-img-top poster"
                                src={image}
                                alt="Card image cap"
                            />
                        </div>
                    </div>
                    <div className="col-md-4 pb-1 pb-md-0 col-lg-2">
                        <div className="card bg-secondary">
                            <img
                                className="card-img-top poster"
                                src={image}
                                alt="Card image cap"
                            />
                        </div>
                    </div>
                    <div className="col-md-4 pb-1 pb-md-0 col-lg-2">
                        <div className="card bg-secondary">
                            <img
                                className="card-img-top poster"
                                src={image}
                                alt="Card image cap"
                            />
                        </div>
                    </div>
                    <div className="col-md-4 pb-1 pb-md-0 col-lg-2">
                        <div className="card bg-secondary">
                            <img
                                className="card-img-top poster"
                                src={image}
                                alt="Card image cap"
                            />
                        </div>
                    </div>
                    <div className="col-md-4 pb-1 pb-md-0 col-lg-2">
                        <div className="card bg-secondary">
                            <img
                                className="card-img-top poster"
                                src={image}
                                alt="Card image cap"
                            />
                        </div>
                    </div>
                    <div className="col-md-4 pb-1 pb-md-0 col-lg-2">
                        <div className="card">
                            <img
                                className="card-img-top poster"
                                src={image}
                                alt="Card image cap"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomeHorizSlider;
