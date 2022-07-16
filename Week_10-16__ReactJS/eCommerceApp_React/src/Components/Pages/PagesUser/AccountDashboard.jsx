// import React from "react";
import React, { useState, useEffect } from "react";
import { app, auth, firestore } from "../../../firebase/utils";

import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";

import { FaRegAddressCard, FaBox, FaUserCheck, FaEdit } from "react-icons/fa";

const Account = (props) => {
  // Display User datas from Firebase Database

  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  // Listen for user authentication status changes
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("User Logged In:", user);
    } else {
      console.log("User Logged Out");
    }
  });
  // Get Data

  firestore
    .collection("users")
    .get()
    .then((snapshot) => {
      console.log(snapshot.docs);
    });

  return (
    <>
      <Header {...props} />

      <div className="container-fluid light">
        <div className="container margin-tb">
          <h1>My Account</h1>
          <hr />
        </div>
      </div>

      <div className="container-fluid">
        <div className="container ">
          {currentUser && (
            <>
              <h3>Hi!, {currentUser.displayName}</h3>

              <p>
                Here you will find your profile details, the status of your
                orders, returns and payments.
              </p>
              <div className="card-wraper">
                <div className="rounded-card card-inner">
                  <div className="account-detail__header">
                    <div>
                      <FaUserCheck size="2em" style={{ marginRight: 10 }} />{" "}
                      <br />
                    </div>
                    <div>
                      <h4 className="card-title"> My Profile</h4>
                    </div>
                  </div>
                  <hr />

                  <div className="card-body account-detail__body">
                    <h6>
                      Edit / view your login details <FaEdit />
                    </h6>
                    <br />
                    <img
                      className="profile-image"
                      src={currentUser.photoURL}
                      width="100"
                      height="100"
                      alt="avatar"
                    />
                    <p>Full Name:{currentUser.displayName}</p>
                    <p>Email: {currentUser.email}</p>
                    <p>Tele :{currentUser.phoneNumber}</p>
                    <p>Zip Code: {currentUser.postalCode}</p>
                    <p>Profession: {currentUser.profession}</p>
                  </div>
                </div>
                <div className="rounded-card card-inner">
                  <div className="account-detail__header">
                    <div>
                      <FaBox size="2em" style={{ marginRight: 10 }} /> <br />
                    </div>
                    <div>
                      <h4 className="card-title"> My Orders</h4>
                    </div>
                  </div>
                  <hr />
                  <div className="card-body account-detail__body">
                    <h6> Repurchase, track, or return your items</h6> <br />
                    <p>You have not placed any orders in past 3 months </p>
                  </div>
                </div>
                <div className="rounded-card card-inner">
                  <div className="account-detail__header">
                    <div>
                      <FaRegAddressCard
                        size="2em"
                        style={{ marginRight: 10 }}
                      />{" "}
                      <br />
                    </div>
                    <div>
                      <h4 className="card-title"> Customer Service</h4>
                    </div>
                  </div>
                  <hr />
                  <div className="card-body account-detail__body">
                    <h6>Contact us for any inquiries</h6> <br />
                    <address>
                      <p>Asmterdam, Netherlands</p>
                      <p>
                        <a href="mailto:contact@ephremshop.com">
                          contact@ephishop.com
                        </a>
                      </p>
                      <p>
                        <a href="tel:+13115552368">(+31) (06) - 34-2368</a>
                      </p>
                    </address>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <Footer {...props} />
    </>
  );
};

export default Account;
