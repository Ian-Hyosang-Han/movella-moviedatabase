import { URL_IMAGE } from "../utilities/api";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "./LoadingSpinner";

const MovieCard = ({ data }) => {
  if (!data) {
    return (
      <div className="loading">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="movie-container fadein">
      <Link className="focus-link" to={`/movie/${data.id}`}>
        <img
          alt={`${data.original_title} poster`}
          className="movie-card"
          src={`${URL_IMAGE}w185${data.poster_path}`}
        />
      </Link>
    </div>
  );
};

export default MovieCard;