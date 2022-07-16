import React from "react";

import { FaCartPlus } from "react-icons/fa";
// using ES6 modules
// import { Link } from "react-router-dom";

export default function Product(props) {
  const { product, onAdd } = props;

  return (
    <div className="card-outer">
      <div className="card-inner">
        <div className="card">
          <img className="card-img-top" src={product.image} alt={product.name} />

          <div className="card-body">

            <h5 className="card-title">{product.name}</h5>

            <p className="card-text">{product.smallDesc}</p>

            <div className="product-price">
              <span className="sale-product-price--discount">
                {product.actualPrice}
              </span>
              <div className="sale-product-price--actual">
                <span className="sale-product-price--euro">
                  €{product.discountPrice},
                </span>
                <span className="sale-product-price--cents">{product.priceCents}</span>
                <i className="deliverymethod">{product.deliveryMethod} </i>
              </div>
            </div>
            <hr />
          </div>
          <div className="card-footer">
            <button className="btn btn--primary" onClick={() => onAdd(product)}>
              <FaCartPlus className="s-icons" size="1.5em" />
              Add To Cart
            </button>



          </div>
        </div>  </div>  </div>
  );
}



