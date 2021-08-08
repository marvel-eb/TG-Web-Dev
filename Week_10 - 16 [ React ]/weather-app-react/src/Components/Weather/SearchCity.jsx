import React from "react";

const formInputSearch = (props) => {
  return (
    <div>
      <form className="margin" onSubmit={props.loadweather}>
        <div>{props.errorMessage ? errorMessage() : ""}</div>

        <input
          type="text"
          placeholder="City - search"
          name="city"
          autoComplete="on"
        />

        <button className="btn btn--submit">Check Weather</button>
      </form>
    </div>
  );
};

const errorMessage = (props) => {
  return (
    <div className="alert-danger" role="alert">
      <p> OMG you are wrong again. Please, Enter the correct city name...!</p>
    </div>
  );
};

export default formInputSearch;
