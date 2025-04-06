import { URL_IMAGE } from "../utilities/api";
import { Link } from "react-router-dom";
import { LoadingSpinner } from "./LoadingSpinner";

const MovieCard = ({ data }) => {
  if (data) {
    return (
      <Link className="movie-container" to={`/moviedetail/${data.id}`}>
        <img
          alt={`${data.original_title} poster`}
          className="movie-card"
          src={`${URL_IMAGE}w185/${data.poster_path}`} // fallback
          srcSet={`${URL_IMAGE}w185/${data.poster_path} 185w,
                   ${URL_IMAGE}w300/${data.poster_path} 300w`}
          sizes="(min-width: 1024px) 300px, 185px"
        />
      </Link>
    );
  } else {
    return (
      <div className="loading">
        <LoadingSpinner />
      </div>
    );
  }
};

export default MovieCard;