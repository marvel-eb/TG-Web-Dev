import React from "react";
import movieDataRequests from "../../../utilities/config";
import CatSlider from "./CatSlider";
// import DemoEphrem from "../DemoEphrem";
export default function HomeCategories(props) {
    return (
        <>

            {/* <DemoEphrem
                title="Zeroes"
                fetchUrl={movieDataRequests.fetchZeroes}
                isLargeRow
            /> */}


            <CatSlider
                modal={props}
                title="Zeroes"
                fetchUrl={movieDataRequests.fetchZeroes}
            // isLargeRow
            />

            <CatSlider
                modal={props}
                title="Nineties"
                fetchUrl={movieDataRequests.fetchNineties}
            // isLargeRow
            />
            <CatSlider
                modal={props}
                title="Eighties"
                fetchUrl={movieDataRequests.fetchEighties}              
            // isLargeRow
            />
            <CatSlider
                modal={props}
                title="Disney"
                fetchUrl={movieDataRequests.fetchDisney}          
            // isLargeRow
            />
             <CatSlider
                modal={props}
                title="Scarlett Johansson"
                fetchUrl={movieDataRequests.fetchActress}            
            // isLargeRow
            />
            <CatSlider
                modal={props}
                title="Ryan Reynolds"
                fetchUrl={movieDataRequests.fetchActor}       
            // isLargeRow
            />



        </>
    );
}
