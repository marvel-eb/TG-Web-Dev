import React from "react";

const Subscribe = (props) => {
  return (
    <div>
      <h4>
        <strong>SUBSCRIBE</strong>
      </h4>

      <div className="subscribe">
        <div className="subscribe--search">
          <form action="#">
            <input
              type="subscribe"
              aria-label="Subscribe news letter"
              // class="subcribe-data"
              placeholder="Subscribe"
              required
            />
            <button type="submit" className="btn subscribe--submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
