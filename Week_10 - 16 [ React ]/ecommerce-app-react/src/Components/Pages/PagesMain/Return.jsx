import React from "react";

import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
const Return = (props) => {
  return (
    <>
      <Header {...props} />

      <div className="container-fluid light">
        <div className="container margin-tb">
          <h1>Return conditions</h1>
          <hr />
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <p>What can and cannot be returned, return period and costs</p>
          <h4>Return period </h4>
          <p>
            At ReactShop you have a withdrawal period of 30 days (the period in
            which you can register your item as a return in your account ). This
            period starts on the day you close the service or receive the item.
            Once you have registered your return, you have 14 days to return the
            package.
          </p>
          <h4>Free return</h4>
          <p>
            In principle, returns are free of charge, with one exception: For
            second-hand items, the return costs can be for your own account,
            this is stated in the terms and conditions of the seller. Returns
            are also possible via the model withdrawal form .
          </p>
        </div>
      </div>

      <Footer {...props} />
    </>
  );
};

export default Return;
