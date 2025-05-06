import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { URL_IMAGE, fetchMovieDetail } from "../utilities/api";
import { LoadingSpinner } from "./LoadingSpinner";
import { formatReleaseDate, formatRuntime } from "../utilities/toolbelt";
import FavouriteButton from "./FavouriteButton";

const MovieCard = ({ data, onUnfavourite }) => {
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!data?.id) return;
    fetchMovieDetail(data.id)
      .then(setDetails)
      .catch((error) => console.log("Error fetching movie detail:", error));
  }, [data]);

  const handleFavouriteClick = () => {
    navigate("/favourites");
  };

  if (!data) {
    return (
      <div className="loading">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="movie-container">
      <Link to={`/moviedetail/${data.id}`}>
        <img
          alt={`${data.original_title} poster`}
          className="movie-card"
          src={`${URL_IMAGE}w185/${data.poster_path}`}
          srcSet={`${URL_IMAGE}w185/${data.poster_path} 185w,
                   ${URL_IMAGE}w300/${data.poster_path} 300w`}
          sizes="(min-width: 1024px) 300px, 185px"
        />
      </Link>

      <div className="movie-info-box">
        <div className="left">
          <FavouriteButton
            movie={data}
            onFavouriteClick={handleFavouriteClick}
            onUnfavourite={onUnfavourite} />
        </div>
        <div className="right">
          <p className="movie-title">{data.title}</p>
          <p className="movie-date">{formatReleaseDate(data.release_date)}</p>
          {details && (
            <div className="movie-meta">
              <p className="single-movie-runtime">
                {formatRuntime(details.runtime)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;