import React from 'react'
import movieDataRequests from "../../../utilities/config";
import CatSlider from "./CatSlider";



export default function FilmsCategories(props) {
    return (
        <>
            <CatSlider
                modal={props}
                title="Comedy"
                fetchUrl={movieDataRequests.fetchComedy}
                // isLargeRow
            />

            <CatSlider
                modal={props}
                title="Action"
                fetchUrl={movieDataRequests.fetchAction}
                // isLargeRow
            />
            <CatSlider
                modal={props}
                title="Thriller"
                fetchUrl={movieDataRequests.fetchThriller}
                // isLargeRow
            />
            <CatSlider
                modal={props}
                title="Family"
                fetchUrl={movieDataRequests.fetchFamily}
                // isLargeRow
            />
            <CatSlider
                modal={props}
                title="Fantasy  "
                fetchUrl={movieDataRequests.fetchFantasy}
                // isLargeRow
            />
            <CatSlider
                modal={props}
                title="Crime"
                fetchUrl={movieDataRequests.fetchCrime}
                // isLargeRow
            />
            <CatSlider
                modal={props}
                title="Adventure"
                fetchUrl={movieDataRequests.fetchAdventure}
                // isLargeRow
            />
        </>
    )
}
