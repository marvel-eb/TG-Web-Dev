import React, { useState, useEffect } from "react";
import { auth, firestore } from "../../../firebase/utils";
import app from "../../../firebase/utils";
import { FaEdit } from "react-icons/fa";
import FooterGuest from "../../Contents/FooterContents/FooterGuest";
import HeaderNavUser from "../../../Components/Contents/HeaderContents/HeaderNavUser";
import { Link } from "react-router-dom";
const Dashboard = (props) => {
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
      <div className="container-fluid- user-auth-page__wrapper mt-5">
        <div className="container-fluid bg-dark ">
          <HeaderNavUser />
        </div>
        <div className="bg-light mt-5">
          <div className="container py-5">
            <div className="row">
              <div className="col-12 col-md-8 mx-auto">
                <div className="jumbotron bg-transparent-">
                  <div className="row text-center">
                    <div className="text-center col-12">
                      <h1>My Account</h1>

                      {currentUser && (
                        <>
                          <h3>Hi!, {currentUser.displayName}</h3>

                          <p>Here you will find your profile details.</p>

                          <div className="row">
                            <div className=" col-xl-4 col-lg-5 col-md-5 col-sm-6 bg-light text-dark py-3">
                              <div className="card-body account-detail__body text-left">
                                <h6>
                                  Edit / view your login details <FaEdit />
                                </h6>
                                <br />
                                <img
                                  className="profile-image mb-3"
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
                            <div class=" col-xl-8 col-lg-7 col-md-7 col-sm-6 bg-white py-3">
                              <Link to="/HomeScreen">
                                <h2 className="text-danger mt-5">
                                  Click to watch Video
                                </h2>
                              </Link>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FooterGuest />
      </div>
    </>
  );
};
export default Dashboard;
