import React from "react";

// import React, { useState } from "react";
import ProductMain from "./Products/ProductMain";
import data from "../../databases/data";

const ProductOverview = (props) => {
  const { products } = data;

  return (
    <>
      <div className="row">
        <ProductMain products={products}></ProductMain>
      </div>
    </>
  );
};

export default ProductOverview;
