import React from "react";
import moment from "moment";

import "../../Assets/weather-icons/css/weather-icons.min.css";
import Popup from "../Forecast/OpenPopup";

const WeatherCard = (props) => {
  return (
    <div className={`weather-container gggg ${props.weatherBackground}`}>
      <div className="location-box">
        <p className="city">{props.cityName}</p>

        <div className="timestamp">
          <p className="txt-sm">
            <time>
              {moment().format("dddd")} | {moment().format("hh:mm")} |
              {moment().format("LL")}
            </time>
          </p>
        </div>

        <div className="tempContainer">
          <div className="leftButton"></div>

          <div className="mainTemp">
            <i className={`wi ${props.weatherIcon}`} />
            {props.tempCelsius ? <p>{props.tempCelsius} &deg;C</p> : null}
            <p className="conditions">
              {props.description.charAt(0).toLowerCase() +
                props.description.slice(1).toLowerCase()}
            </p>
          </div>

          <div className="rightButton"></div>
        </div>
        {maxMinHumidTemp(props.tempMin, props.tempMax, props.humidity)}
        <Popup />
      </div>
    </div>
  );
};

function maxMinHumidTemp(min, max, humidity) {
  if (max && min && humidity) {
    return (
      <div>
        <div className="weather">
          <p className="txt-left txt-lg"> Min Temp:</p>
          <p className="txt-right txt-lg">{min}&deg;C</p>
          <span className="clearfix"> </span>
          <p className="txt-left txt-lg"> Max Temp:</p>
          <p className="txt-right txt-lg">{max}&deg;C</p>
          <span className="clearfix"> </span>
          <p className="txt-left txt-lg"> Humidity:</p>
          <p className="txt-right txt-lg">{humidity} 0%</p>
          <span className="clearfix"> </span>
        </div>
      </div>
    );
  }
}

export default WeatherCard;
