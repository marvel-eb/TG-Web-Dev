import React from 'react';
import { Col, Container, Row, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FaRegPlayCircle, FaPlus, } from 'react-icons/fa'

export default function ModalFilmCard({ imgSrc, overview, releaseDate, voteAverage }) {

    const ratingToPercentage = (rating) => {
        return (rating * 10).toFixed(0);
    }

    return (
        <Col className="px-3 mb-5">
        <Col className="modal-film-container px-0 mx-0">
            <Container fluid className="film-card-container">
                <Row>
                    <Col xs={12} className="px-0" >
                        <Image fluid src={`https://image.tmdb.org/t/p/original/${imgSrc}`} className="mzd-image" />
                        <FaRegPlayCircle className="play-button" color="white" />
                    </Col>
                    <Col xs={12}>
                        {/* <OverlayTrigger key="top" placement="top" overlay={
                            <Tooltip id="tooltip-top">
                                Toevoegen aan Mijn Lijst
                            </Tooltip>
                        }> */}
                        {/* </OverlayTrigger> */}
                    </Col>
                </Row>
                <Row className="mt-3 mb-4">
                    <Col xs={8}>
                        <p className="match-text">{ratingToPercentage(voteAverage)}% match</p>
                        <Image className="age-pic mr-2" src="https://www.kijkwijzer.nl/upload/pictogrammen/1_120_AL.png" />
                        <span>{releaseDate.slice(0, 4)}</span>
                    </Col>
                    <Col xs={4}>
                        <button className="circle-button">< FaPlus color="white" /></button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>{overview}</p>
                    </Col>
                </Row>
            </Container>
        </Col>
        </Col>
    )
}
