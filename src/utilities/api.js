// Make sure your API key is stored properly in the environment variable
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// Images URL
const ORIGINAL_IMAGE_URL = "https://www.themoviedb.org/t/p/original/";
const URL_IMAGE = "https://www.themoviedb.org/t/p/";

// Function to retrieve data from TMDb API (for multiple movies)
function fetchMovies(endpoint) {
    return fetch(`https://api.themoviedb.org/3/movie/${endpoint}?api_key=${API_KEY}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .catch((error) => {
            console.error(error);
            throw error; // Return an empty object in case of error
        })
}

// Function to retrieve a single movie detail by ID
function fetchMovieDetail(movieId) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .catch((error) => {
            console.log(error);
            throw error;
        });
};

export { fetchMovies, fetchMovieDetail, URL_IMAGE, ORIGINAL_IMAGE_URL };