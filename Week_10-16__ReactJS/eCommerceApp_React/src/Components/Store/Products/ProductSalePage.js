import React from "react";
import Product from "./ProductSaleMain";

export default function Main(props) {
  const { sales, onAdd, clearCart } = props;
  return (
    <>
      <div className="container-fluid white">
        <div className="container">
          <div className="row">
            <div className="card-wraper">
              {sales.map((product) => (
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
