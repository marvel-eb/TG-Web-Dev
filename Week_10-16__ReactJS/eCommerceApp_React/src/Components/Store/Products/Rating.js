import { v4 as uuidv4 } from "uuid";
import React from "react";
// import data from "../../../databases/data";

// import { FaStarHalfAlt, FaStar } from "react-icons/fa";


const Rating = ({ value, text, color }) => {
    return (
        <div className='rating'>
            {[1, 2, 3, 4, 5].map((rate) => (
                <span key={uuidv4()}>
                    <i
                        style={{ color }}
                        className={
                            value + 1 === rate + 0.5
                                ? "fas fa-star-half-alt"
                                : value >= rate
                                    ? "fas fa-star"
                                    : "far fa-star"
                        }
                    ></i>
                </span>
            ))}
            <span>{text && text}</span>
        </div>
    );
};

Rating.defaultProps = {
    color: "#FFA41C",
};

export default Rating;

