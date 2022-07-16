import axios from "axios";
// BASE OF THE MAIN MOVIE URL
const baseInstance = axios.create({
  baseURL: `https://immense-garden-85870.herokuapp.com/api/v1/`,

  // // FEATURED URL - RESERVED_DO NOT REMOVE PLZ
  // featuredURL: "https://api.themoviedb.org/3",
});

const movieInstance = axios.create({
   baseURL: `https://immense-garden-85870.herokuapp.com/api/v1/movie/`,
});


export { baseInstance, movieInstance };
