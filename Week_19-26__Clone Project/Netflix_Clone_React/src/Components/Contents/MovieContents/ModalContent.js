import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import ModalFilmCard from './ModalFilmCard';
import Modal from './ModalContainer'
import { FaChevronDown, FaChevronUp, FaVolumeMute, FaRegThumbsDown, FaRegThumbsUp, FaPlus, FaPlay } from "react-icons/fa";

export default function ModalContent(props) {
    const [toggleExpanded, setToggleExpanded] = useState(false);
    const [mainTrailerLink, setMainTrailerLink] = useState();
    const [mainTrailerHeight, setMainTrailerHeight] = useState();
    const [trailerLinks, setTrailerLinks] = useState();
    const [filmGenres, setfilmGenres] = useState();
    const [tmdbGenres, setTmdbGenres] = useState();
    const [similarContent, setSimilarContent] = useState();
    const [cast, setCast] = useState();
    const [director, setDirector] = useState();
    const [runtime, setRuntime] = useState();
    const [tmdbAgeCertificationList, setTmdbAgeCertificationList] = useState();
    const [ageCertification, setAgeCertification] = useState();
    const [kijkwijzerImageSrc, setKijkwijzerImageSrc] = useState();
    const [theID, setTheID] = useState();

    const toggleButtonRef = useRef(null);

    const movie = props.location.movie;
    let params = new URLSearchParams(props.location.search);



    if (movie !== undefined) {
        if (theID === undefined || theID !== movie.id) {
            setTheID(movie.id);
            setfilmGenres(movie.genre_ids);
            setToggleExpanded(false);
            setKijkwijzerImageSrc();
            setAgeCertification();
            setDirector();
            setSimilarContent();
            setRuntime();
        }
    }

    useEffect(() => {
        if (movie !== undefined) {
            const axios = require('axios');

            function GetMainTrailerData() {
                return axios.get(`https://api.themoviedb.org/3/movie/${movie?.id}/videos?api_key=${process.env.REACT_APP_NETFLIX_CLONE_API_KEY}&language=en-US`);
            }

            function GetGenresListData() {
                return axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_NETFLIX_CLONE_API_KEY}`);
            }

            function GetCastData() {
                return axios.get(`https://api.themoviedb.org/3/movie/${movie?.id}/credits?api_key=${process.env.REACT_APP_NETFLIX_CLONE_API_KEY}&language=en-US`);
            }

            function GetRuntimeData() {
                return axios.get(`https://api.themoviedb.org/3/movie/${movie?.id}?api_key=${process.env.REACT_APP_NETFLIX_CLONE_API_KEY}&language=en-US`);
            }

            function GetSimilarContentData() {
                return axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=${process.env.REACT_APP_NETFLIX_CLONE_API_KEY}&language=en-US&page=1`);
            }

            function GetAgeCertificationData() {
                return axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/release_dates?api_key=${process.env.REACT_APP_NETFLIX_CLONE_API_KEY}`);
            }

            Promise.all([GetMainTrailerData(), GetGenresListData(), GetCastData(), GetRuntimeData(), GetSimilarContentData(), GetAgeCertificationData()])
                .then(function (results) {
                    // Set link to trailer to auto play
                    let trailerData = results[0];
                    if (trailerData.data.results.length === 0) {
                        setMainTrailerLink(undefined);
                        setTrailerLinks(undefined);
                    } else {
                        setMainTrailerLink(trailerData.data.results[0].key);
                        trailerData.data.results[0].size < 721 ? setMainTrailerHeight(trailerData.data.results[0].size) : setMainTrailerHeight(720);
                        let tempArray = [];
                        trailerData.data.results.forEach(element => {
                            tempArray.push({
                                key: element.key,
                                type: element.type
                            });
                        });
                        setTrailerLinks(tempArray);
                    }

                    // Set list of genres
                    let genresData = results[1];
                    setTmdbGenres(genresData.data.genres);

                    // Set names of the cast
                    let castData = results[2];
                    setCast(castData.data.cast);
                    for (let index = 0; index < castData.data.crew.length; index++) {
                        const element = castData.data.crew[index];
                        if (element.job === "Director") {
                            setDirector(element.name);
                        }
                    }

                    // Set runtime
                    let runtimeData = results[3];
                    setRuntime(runtimeData.data.runtime);

                    // Set similar movies
                    let similarContentData = results[4];
                    setSimilarContent(similarContentData.data.results);

                    // Set age certification for clicked video
                    let ageCertificationData = results[5].data.results;
                    for (let i = 0; i < ageCertificationData.length; i++) {
                        if (ageCertificationData[i].iso_3166_1 == "NL") {
                            let movieCertification = ageCertificationData[i].release_dates[0].certification;
                            let tempObj;

                            switch (movieCertification) {
                                case "AL":
                                    tempObj = tmdbAgeCertificationList.filter(element => element.certification === "AL");
                                    setAgeCertification(tempObj[0].meaning);
                                    setKijkwijzerImageSrc("https://www.kijkwijzer.nl/upload/pictogrammen/1_120_AL.png");
                                    break;
                                case "6":
                                    tempObj = tmdbAgeCertificationList.filter(element => element.certification === "6");
                                    setAgeCertification(tempObj[0].meaning);
                                    setKijkwijzerImageSrc("https://www.kijkwijzer.nl/upload/pictogrammen/3_120_6.png");
                                    break;
                                case "9":
                                    tempObj = tmdbAgeCertificationList.filter(element => element.certification === "9");
                                    setAgeCertification(tempObj[0].meaning);
                                    setKijkwijzerImageSrc("https://www.kijkwijzer.nl/upload/pictogrammen/4_120_9.png");
                                    break;
                                case "12":
                                    tempObj = tmdbAgeCertificationList.filter(element => element.certification === "12");
                                    setAgeCertification(tempObj[0].meaning);
                                    setKijkwijzerImageSrc("https://www.kijkwijzer.nl/upload/pictogrammen/5_120_12.png");
                                    break;
                                case "16":
                                    tempObj = tmdbAgeCertificationList.filter(element => element.certification === "16");
                                    setAgeCertification(tempObj[0].meaning);
                                    setKijkwijzerImageSrc("https://www.kijkwijzer.nl/upload/pictogrammen/6_120_16.png");
                                    break;
                            }
                        }
                    }
                });
        }

        return () => {

        }
    }, [theID]);

    // Get tmdb age certification list for NL
    useEffect(() => {
        const axios = require('axios');
        axios.get(`https://api.themoviedb.org/3/certification/movie/list?api_key=${process.env.REACT_APP_NETFLIX_CLONE_API_KEY}`)
            .then(function (response) {
                setTmdbAgeCertificationList(response.data.certifications.NL);
            })
            .catch(function (error) {

            })
            .then(function () {

            });

        return () => {
            // Clean up
        }
    }, []);


    function ShowCast(all) {

        if (all) {
            // Show the entire cast
            let tempArray = [];

            for (let i = 0; i < cast.length; i++) {
                const element = cast[i];
                if (i === cast.length - 1) {
                    tempArray.push(element.name);
                } else {
                    tempArray.push(element.name + ", ");
                }
            }
            let stringOfCast = tempArray.join("");
            return stringOfCast;
        }
        else {
            // Show 3 names and more
            if (cast.length > 3) {
                return <>
                    <span>{cast[0].name + ", "}</span>
                    <span>{cast[1].name + ", "}</span>
                    <span>{cast[2].name + ", "}</span>
                    <span className="font-italic">more</span>
                </>
            } else {
                let tempArray = [];

                for (let i = 0; i < cast.length; i++) {
                    const element = cast[i];
                    if (cast.length === 0) {
                        setCast();
                    } else if (cast.length === 1){
                        tempArray.push(element.name);
                    } else if (i < cast.length - 1) {
                        tempArray.push(element.name + ", ");
                    } else if (i === cast.length - 1){
                        tempArray.push(element.name);
                    }
                }

                let stringOfCast = tempArray.join("");
                return stringOfCast;
                // onderstaande werkt niet om een of andere reden
                return tempArray.forEach(element => {
                    <span>{"element"}</span>
                });
            }
        }
    }

    function ShowGenres() {
        let tempArray = [];
        for (let i = 0; i < filmGenres.length; i++) {
            const element = filmGenres[i];

            for (let j = 0; j < tmdbGenres.length; j++) {
                const tmdbElement = tmdbGenres[j];
                if (element === tmdbElement.id) {
                    if (i === filmGenres.length - 1) {
                        tempArray.push(tmdbElement.name);
                    } else {
                        tempArray.push(tmdbElement.name + ", ");
                    }
                }
            }
        }

        return tempArray.map(element => {
            return <span>{element}</span>
        });
    }

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

    function toggleButton() {
        if (toggleExpanded) {
            toggleButtonRef.current.style.height = "400px";
            toggleButtonRef.current.style.marginBottom = "0px";
        }
        else {
            toggleButtonRef.current.style.height = "auto";
            toggleButtonRef.current.style.marginBottom = "100px";
        }
        setToggleExpanded(!toggleExpanded);
    };

    return (
        // In case the modal link is found (which is created on click), a modal is created with this information. 
        params.get("id") && (
            <Modal
                onClick={() => {
                    setToggleExpanded(false);
                    props.history.push(props.location.pathname);
                }}
            >
                <Container fluid id="modal-container" >

                    <Container fluid>
                        <Row xs={1} className="px-0">
                            <Col className="video-container px-0">
                                {mainTrailerLink ?
                                    <iframe src={`https://www.youtube.com/embed/${mainTrailerLink}?autoplay=1&mute=1&controls=0`} title="YouTube trailer for the current video" width="100%" height={mainTrailerHeight}></iframe>
                                    :
                                    <img key={movie?.id} src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.name} loading="lazy" />}
                            </Col>
                            <Row id="video-controls" className="align-items-end bg-transparent px-5">
                                <h1>{movie?.title}</h1>
                                <div className="d-flex justify-content-between w-100 mb-5">
                                    <div>
                                        <button className="d-inline-block btn bg-white py-2 px-3 mr-3" ><FaPlay className="mr-3" />Afspelen</button>
                                        <button className="circle-button mr-1"><FaPlus color="white" /></button>
                                        <button className="circle-button mr-1"><FaRegThumbsUp color="white" /></button>
                                        <button className="circle-button mr-1"><FaRegThumbsDown color="white" /></button>
                                    </div>
                                    <div>
                                        <button className="circle-button mr-5"><FaVolumeMute color="white" /></button>
                                    </div>
                                </div>
                            </Row>
                        </Row>
                        <Row id="film-summary" className="px-5 mb-4">
                            <Col xs={12} sm={8}>
                                <span className="match-text mr-2">{movie?.vote_average * 10}% match</span>
                                <span className="mr-2">{movie?.release_date.slice(0, 4)}</span>
                                <Image className="age-pic mr-2" src={kijkwijzerImageSrc} />
                                <span>{GetRuntime()}</span>
                                <p className="">{movie?.overview}</p>
                            </Col>
                            <Col xs={12} sm={4} className="summary-details">
                                <p><span>Cast: </span>{
                                    cast ? ShowCast() : "-"
                                }</p>

                                <p>
                                    <span>Genres: </span>{
                                        tmdbGenres && filmGenres ? ShowGenres() : "-"
                                    }
                                </p>
                                {/* <p><span>Deze titel is: </span>{"category?"}</p> */}
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="meer-zoals-dit-container" ref={toggleButtonRef}>
                        <Row className="px-5">
                            <Col>
                                <h2>Meer zoals dit</h2>
                            </Col>
                        </Row>
                        <Row xs={1} sm={2} lg={3} className="d-flex justify-content-between px-5">
                            {similarContent?.map(element => {
                                return <ModalFilmCard imgSrc={element.poster_path} releaseDate={element.release_date} overview={element.overview} voteAverage={element.vote_average} />
                            })}
                        </Row>
                    </Container>
                    <Container fluid>
                        <Row className="px-5">
                            <Col className="">
                                <div className="modal-hr" />
                                <button className="expand-mzd-button" onClick={toggleButton}>
                                    {toggleExpanded ? <FaChevronUp color="white" /> : <FaChevronDown color="white" />}
                                </button>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="trailers-en-meer-container">
                        <Row className="px-5 mt-5">
                            <Col>
                                <h2>Trailers en meer</h2>
                            </Col>
                        </Row>
                        <Row xs={1} md={2} lg={3} className="px-5">
                            {trailerLinks?.map(element => {
                                return <Col className="mb-5"><iframe src={`https://www.youtube.com/embed/${element.key}?autoplay=0&mute=0&controls=1`} title="YouTube clips with related content" width="100%" height="100%">
                                </iframe><span>{movie?.title + " (" + element.type + ")"}</span></Col>
                            })}
                        </Row>
                    </Container>

                    <Container fluid className="modal-content-footer">
                        <Row xs={1} className="px-5">
                            <Col>
                                <h2>Over {movie?.title}</h2>
                            </Col>
                            <Col>
                                <p><span>Regisseur: </span>{director ? director : "-"}</p>
                                <p id="footer-cast"><span>Cast: </span>{cast ? ShowCast(true) : "-"}</p>
                                <p><span>Genres: </span>{tmdbGenres && filmGenres ? ShowGenres() : "-"}</p>
                            </Col>
                        </Row>
                        <Row className="px-5">
                            <Col xs="auto">
                                <span>Leeftijdsclassificatie:</span>
                            </Col>
                            <Col xs="auto" className="px-0">
                                <Image className="age-pic" src={kijkwijzerImageSrc} />
                            </Col>
                            <Col>
                                <p>{ageCertification ? ageCertification : "-"}</p>
                            </Col>
                        </Row>
                    </Container>
                </Container>

            </Modal>
        )
    )
}
