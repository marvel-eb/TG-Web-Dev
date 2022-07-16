import React, { useState } from "react";

import ProductMain from "./Products/ProductSalePage";

import Basket from "./Products/ShoppingCart";
import data from "../../databases/data";

import Logo from "../Contents/HeaderContents/Logo";
import Search from "../Contents/HeaderContents/Search/Search";
import Navigation from "../Layout/Navigation";
import CallAction from "../Contents/HeaderContents/CallAction/CallAction";
import Cart from "./Products/CartCount";

// import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import GoTop from "../Contents/HeaderContents/GoTop";
const Sale = (props) => {
  // const { currentUser } = props;

  const { sales } = data;
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

  return (
    <>
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
                  X
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

        <div className="row">
          <div className="container-fluid light">
            <div className="container margin-tb">
              <h1>Outlet</h1>
              <hr />
              <h4>Up to 75% -90% discount on every product</h4>
            </div>
          </div>
          <ProductMain
            sales={sales}
            onAdd={onAdd}
            clearCart={clearCart}
          ></ProductMain>
        </div>
      </>

      <Footer {...props} />
    </>
  );
};

export default Sale;
