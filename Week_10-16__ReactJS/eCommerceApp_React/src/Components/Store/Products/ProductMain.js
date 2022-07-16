import React from "react";
import Product from "./ProductMainPage";

export default function MainMainPage(props) {
  const { products, onAdd, clearCart } = props;

  return (
    <>
      <div className="container-fluid white">
        <div className="container">
          <div className="row">
            <div class="card-wraper">
              {products.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  onAdd={onAdd}
                  clearCart={clearCart}
                ></Product>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
