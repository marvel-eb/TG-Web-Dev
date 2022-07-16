import React from "react";
import sales from "../../Assets/images/products/sales.png";
// using ES6 modules
import { Link } from "react-router-dom";
export default function ProductBanner(props) {
  return (
    <>
      <div className="banner-wrapper">
        <div className="container-fluid light">
          <div className="container">
            <div className="row">
              <div className="banner">
                <div className="featured-wrapper">
                  <img className="card-img-top" src={sales} alt="Product" />

                  <div className="featured">
                    <h5 className="card-title">New Arrivals</h5>
                    <p className="card-text">
                      iMac 2021 - <span className="tagline"> Collections</span>
                    </p>
                  </div>

                  <div className="row">
                    <div className="featured-product-price">
                      <hr />
                      <div className="featured-product-price--actual">
                        <span className="featured-product-price--discount">
                          2199,
                          <span className="featured-product-price--cents">
                            <sup>99</sup>
                          </span>
                        </span>

                        <span className="featured-product-price--euro">
                          1934,-
                        </span>

                        <i className="deliverymethod">Free Delivery</i>
                      </div>
                    </div>
                  </div>

                  <Link to="/ProductDetails/imac-2021">
                    <button className="btn banner-btn btn--primary">
                      Buy Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
}
