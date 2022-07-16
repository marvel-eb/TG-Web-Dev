import React from "react";

import { FaShoppingCart } from "react-icons/fa";

const Cart = (props) => {
  return (
    <div className="cart">
      <span>
        <FaShoppingCart className="s-icons" size="2em" />
        <br /> Cart
        {props.countCartItems ? (
          <i className="cartCount">{props.countCartItems}</i>
        ) : (
          ""
        )}
      </span>
    </div>
  );
};

export default Cart;
