import React from "react";
import image from "../../Assets/images/slider/40X40.gif";


// import Toast from 'react-bootstrap/Toast';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Carousel from 'react-bootstrap/Carousel';


const FilmGenre = (props) => {
    return (
        <>

            <div class="container-fluid bg-dark py-5">
                <div class="row text-center">
                    <div class="col-md-4 pb-1 pb-md-0 col-lg-2">
                        <div class="card bg-secondary">
                            <img class="card-img-top" src={image} alt="Card image cap" />

                        </div>
                    </div>
                    <div class="col-md-4 pb-1 pb-md-0 col-lg-2">
                        <div class="card bg-secondary">
                            <img class="card-img-top" src={image} alt="Card image cap" />

                        </div>
                    </div>
                    <div class="col-md-4 pb-1 pb-md-0 col-lg-2">
                        <div class="card bg-secondary">
                            <img class="card-img-top" src={image} alt="Card image cap" />

                        </div>
                    </div>
                    <div class="col-md-4 pb-1 pb-md-0 col-lg-2">
                        <div class="card bg-secondary">
                            <img class="card-img-top" src={image} alt="Card image cap" />

                        </div>
                    </div>
                    <div class="col-md-4 pb-1 pb-md-0 col-lg-2">
                        <div class="card bg-secondary">
                            <img class="card-img-top" src={image} alt="Card image cap" />

                        </div>
                    </div>
                    <div class="col-md-4 pb-1 pb-md-0 col-lg-2">
                        <div class="card">
                            <img class="card-img-top" src={image} alt="Card image cap" />

                        </div>
                    </div>
                </div>

            </div>



        </>
    );
};

export default FilmGenre;
