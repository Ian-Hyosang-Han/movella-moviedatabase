// Make sure your API key is stored properly in the environment variable
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// Images URL
const IMAGE_BASE = "https://image.tmdb.org/t/p/";
const ORIGINAL_IMAGE_URL = `${IMAGE_BASE}original/`;
const URL_IMAGE = IMAGE_BASE;

// Function to retrieve data from TMDb API (for multiple movies)
function fetchMovies(endpoint, region = "US") {
  return fetch(
    `https://api.themoviedb.org/3/movie/${endpoint}?api_key=${API_KEY}&language=en-US&region=${region}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
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
}

// Get movie credits (director, cast)
function fetchMovieCredits(movieId) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch credits");
      }
      return response.json();
    });
}

// Get movie trailer (YouTube only)
function fetchMovieTrailer(movieId) {
  return fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch trailer");
      }
      return response.json();
    })
    .then((data) => {
      return data.results.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
      ) || null;
    });
}

// Get search movies
function fetchSearchMovies(query) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}`
  )
    .then((res) => {
      if (!res.ok) throw new Error("Failed to fetch search results");
      return res.json();
    });
}

export {
  fetchMovies,
  fetchMovieDetail,
  fetchMovieCredits,
  fetchMovieTrailer,
  fetchSearchMovies,
  URL_IMAGE,
  ORIGINAL_IMAGE_URL,
};