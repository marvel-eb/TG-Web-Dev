import React from "react";
import movieDataRequests from "../../utilities/config";
// import CatSlider from "../Contents/MovieContents/CatSlider";
import DemoEphrem from "./DemoEphrem";


import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";


export default function HomeCategories(props) {
    return (
        <>

            <Header />

            <div className="container-fluid bg-dark mt-5">
                <DemoEphrem
                    title="Zeroes"
                    fetchUrl={movieDataRequests.fetchZeroes}
                    isLargeRow
                />


                {/* <CatSlider
                props={props}
                title="Zeroes"
                fetchUrl={movieDataRequests.fetchZeroes}
                isLargeRow
            /> */}


            </div>

            <Footer />
        </>
    );
}
