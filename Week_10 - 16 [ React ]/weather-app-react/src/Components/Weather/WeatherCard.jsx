import React from "react";
import moment from "moment";
import "../../Assets/weather-icons/css/weather-icons.min.css";
import Popup from "../Forecast/OpenPopup";

// import CurrentTime from "./CurrentTime";
// const timezone = {data.timezone };
// const todaysdate = new Date(data.current.city.current.dt * 1000);
// const todaysDate = new Intl.DateTimeFormat("en-UK", {
//   WEEKDAY: "long",
//   day: "2-digit",
//   month: "long",
//   year: "numeric",
// }).format(todaysdate);
const WeatherCard = (props) => {
  return (
    <div className={`weather-container ${props.weatherBackground}`}>
      {/* <p> {todaysDate}</p>
      <CurrentTime thetimezone /> */}

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
        {forecast(
          props.tempMin,
          props.tempMax,
          props.humidity,
          props.pressure,
          props.sunrise
        )}
        <Popup />
      </div>
    </div>
  );
};

function forecast(min, max, humidity, pressure) {
  if (max && min && humidity && pressure) {
    return (
      <div>
        <div className="weather">
          <p className="txt-left txt-lg"> Min Temp:</p>
          <p className="txt-right txt-lg">{min}&deg;C</p>
          <span className="clearfix"> </span>
          <p className="txt-left txt-lg"> Max Temp:</p>
          <p className="txt-right txt-lg">{max}&deg;C</p>
          <span className="clearfix"> </span>

          <p className="txt-left txt-lg"> Pressure:</p>
          <p className="txt-right txt-lg">{pressure} </p>
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
