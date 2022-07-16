import React from "react";
import Rating from "./Rating";

// using ES6 modules
import { Link } from "react-router-dom";

export default function Product(props) {
  const { product } = props;

  return (
    <div className="card-outer">
      <div className="card-inner">
        <div className="card">
          <Link to={`ProductDetails/${product.id}`}>
            <img
              className="card-img-top"
              src={product.image}
              alt={product.name}
            />

            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>

              <p className="card-text">{product.smallDesc}</p>
              <div className="product-price">
                <div className="product-price--actual">
                  <span className="product-price--euro">€{product.actualPrice},</span>
                  <span className="product-price--cents">
                    <sup>{product.priceCents}</sup>
                  </span>
                </div>
                <i className="deliverymethod">{product.deliveryMethod} </i>
              </div>
              <hr />
              <div className="flexible">
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </div>
            </div>
          </Link>


        </div>
      </div>
    </div>
  );
}
