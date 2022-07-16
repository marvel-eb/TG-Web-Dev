import React, { useState } from "react";
import { useParams } from "react-router-dom";
// import Main from "./Products/Main";
import Basket from "./Products/ShoppingCart";
import data from "../../databases/data";

import Logo from "../Contents/HeaderContents/Logo";
import Search from "../Contents/HeaderContents/Search/Search";
import Navigation from "../Layout/Navigation";
import CallAction from "../Contents/HeaderContents/CallAction/CallAction";
import Cart from "../Store/Products/CartCount";
import Footer from "../Layout/Footer";
import { FaTimes } from "react-icons/fa";
import Rating from "../Store/Products/Rating";
import { FaCartPlus, FaReadme } from "react-icons/fa";
// // using ES6 modules
import { Link } from "react-router-dom";
import GoTop from "../Contents/HeaderContents/GoTop";
const ProductDetails = (props) => {
  // const { currentUser } = props;
  const [cartItems, setCartItems] = useState([]);

  // Add Cart Item
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  // Remove Cart Item
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  // Clear all Cart Items
  // const addToCart = (item) => setCartLists([...cartLists, item]);
  // const removeFromCart = (index) =>
  // setCartItems((cartList) => cartList.filter((_, i) => i !== index));
  const clearCart = () => setCartItems([]);

  // SideBar Toggle - Checkout Cart
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  // Collabsable More... section
  const [toggle, setToggle] = useState(false);

  // Dynamic URL - Thijs
  const { id } = useParams();
  const product = data.products.find((product) => product.id === id);

  // console.log(product);

  return (
    <>
      <header className="sticky App-header">
        <div className="top-header">
          <Logo />
          <Search />
          <CallAction {...props} />

          <div className="cart">
            <div className="basket__toggler" onClick={showSidebar}>
              <Cart countCartItems={cartItems.length}> </Cart>
            </div>

            <div
              className={
                sidebar
                  ? "basket__toggle-content active"
                  : "basket__toggle-content"
              }
            >
              <button
                className="basket__toggler basket__toggle-close"
                onClick={showSidebar}
              >
                <FaTimes />
              </button>

              <Basket
                // onClick={showSidebar}
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
                clearCart={clearCart}
              ></Basket>
            </div>
          </div>
        </div>
        <Navigation />
      </header>
      <GoTop />

      <div className="container-fluid white">
        <div className="container margin-tb">
          <div className="detail-page">
            <div className="left-column">
              <img
                className="card-img-top"
                src={product.image}
                alt={product.name}
              />
            </div>

            <div className="right-column">
              <div className="product-description">
                <span class="category">
                  <Link
                    to={{
                      pathname: "#",
                    }}
                  >
                    {product.category}
                  </Link>
                </span>

                <h1 className="card-title">{product.name}</h1>

                <h5 className="card-text">{product.desc}</h5>
                <p className="card-text">{product.longDesc}</p>
                <span className="quote">
                  <Link
                    to={{
                      pathname: "/Contact",
                    }}
                  >
                    Get a Quote
                  </Link>
                </span>
                <br />
                <button
                  className="btn btn--secondary"
                  onClick={() => setToggle(!toggle)}
                >
                  <FaReadme className="s-icons" size="1.5em" />
                  Specifications
                </button>
                {toggle && (
                  <>
                    <br />
                    <h4>Product information</h4>
                    <br />
                    <div className="specs">
                      <div className="specs__list">
                        <div className="specs__row">
                          <div className="specs__title">
                            <font>Brand</font>
                          </div>
                          <div className="specs__value">
                            <font>{product.brand}</font>
                          </div>
                        </div>

                        <div className="specs__row">
                          <div className="specs__title">
                            <font>Color</font>
                          </div>
                          <div className="specs__value">
                            <font>{product.color}</font>
                          </div>
                        </div>
                        <div className="specs__row">
                          <div className="specs__title">
                            <font>Gurantee</font>
                          </div>
                          <div className="specs__value">
                            <font>{product.guarantee}</font>
                          </div>
                        </div>
                        <div className="specs__row">
                          <div className="specs__title">
                            <font>Storage</font>
                          </div>
                          <div className="specs__value">
                            <font>{product.storage}</font>
                          </div>
                        </div>
                        <div className="specs__row">
                          <div className="specs__title">
                            <font>Processor</font>
                          </div>
                          <div className="specs__value">
                            <font>{product.processor}</font>
                          </div>
                        </div>
                        <div className="specs__row">
                          <div className="specs__title">
                            <font>Memory</font>
                          </div>
                          <div className="specs__value">
                            <font>{product.memory}</font>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <br />
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </div>
              <div class="flexible margin-tb"></div>

              <div className="product-price">
                <div className="product-price--actual">
                  <span className="product-price--euro">
                    €{product.actualPrice},
                  </span>
                  <span className="product-price--cents">
                    <sup>{product.priceCents}</sup>
                  </span>
                </div>
                <i className="deliverymethod">{product.deliveryMethod} </i>
              </div>

              <div className="product-price">
                <button
                  className="btn btn--primary"
                  onClick={() => onAdd(product)}
                >
                  <FaCartPlus className="s-icons" size="1.5em" />
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer {...props} />
    </>
  );
};

export default ProductDetails;
