import React from "react";
// import image from "../../Assets/images/slider/1920x500.gif";
import image from "../../Assets/images/slider/netflix-home-banner-02.jpg";
import Carousel from "react-bootstrap/Carousel";

import { FaPlay } from "react-icons/fa";

// import Toast from 'react-bootstrap/Toast';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Carousel from 'react-bootstrap/Carousel';

const HomeSlider = (props) => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={image} alt="First slide" />

                    <Carousel.Caption>
                        <div class="home-buttons btn-group btn-block">
                            <button class="btn btn-light mr-2 rounded py-3 px-5">
                                <FaPlay /> Play
                            </button>
                            <button class="btn btn-secondary ml-2 rounded py-3 px-5">
                                More Information
                            </button>
                        </div>
                        <p className="caption-text">
                            Bored and unhappy as the Lord of Hell, Lucifer Morningstar
                            abandoned his throne and retired to Los Angeles, where he has
                            teamed up with LAPD detectiv...
                        </p>

                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
                {/*                 
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item> */}
            </Carousel>
        </>
    );
};

export default HomeSlider;
