import React from "react";

// // using ES6 modules
import { Link } from "react-router-dom";
export default function ShoppingCart(props) {
  const { cartItems, onAdd, onRemove, clearCart } = props;
  const itemsPrice = cartItems.reduce(
    (a, current) => a + current.qty * current.actualPrice,
    0
  );
  const taxPrice = itemsPrice * 0.21;
  const shippingPrice = itemsPrice > 50 ? 0 : 10;

  const totalPrice = itemsPrice + taxPrice + shippingPrice;



  return (
    <div className="block">
      <h2>Your Cart Items</h2>

      <hr className="margin-tb" />
      <div>
        {cartItems.length === 0 && <div>Sorry, Your cart is empty</div>}
        {cartItems.map((item) => (
          <>
            <div key={item.id} className="row">
              <div className="col">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={item.image}
                    alt={item.name}
                  />
                  <hr />

                  <p className="card-title">{item.name}</p>
                </div>
              </div>
              <div className="col col-xs ">
                <button
                  onClick={() => onRemove(item)}
                  className="btn--remove-add  remove-item"
                >
                  -
                </button>

                <button
                  onClick={() => onAdd(item)}
                  className="btn--remove-add  add-item"
                >
                  +
                </button>
              </div>

              <div className="col  text-right">
                <span>
                  <strong> {item.qty} x </strong>€ {item.actualPrice.toFixed(2)}{" "}
                </span>
              </div>
            </div>

            <hr />
          </>
        ))}

        {cartItems.length !== 0 && (
          <>
            <div className="row">
              <div className="col">Items Price:</div>
              <div className="col"></div>
              <div className="col text-right">€ {itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col">Tax: </div>
              <div className="col"></div>
              <div className="col text-right">€ {taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col">Shipping Cost:</div>
              <div className="col"></div>
              <div className="col text-right">€ {shippingPrice.toFixed(2)}</div>
            </div>

            <div className="row">
              <div className="col">
                <strong>Total Price:</strong>
              </div>
              <div className="col"></div>
              <div className="col text-right">
                <strong>€{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr className="margin-tb" />
            <div className="row">
              <button
                className="btn btn--clearCart btn-block"
                onClick={clearCart}
              >
                Clear Cart
              </button>
            </div>
            <div className="row cartCheckout">
              <Link to="/LogIn">
                <button className="btn btn--primary btn-block">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
