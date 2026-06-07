import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  URL_IMAGE,
  fetchMovieDetail,
  fetchMovieTrailer,
} from "../utilities/api";
import { LoadingSpinner } from "./LoadingSpinner";
import { formatReleaseDate, formatRuntime } from "../utilities/toolbelt";
import FavouriteButton from "./FavouriteButton";
import TrailerButton from "./TrailerButton";

const MovieCard = ({ data, onUnfavourite }) => {
  const [details, setDetails] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    if (!data?.id) return;

    Promise.all([
      fetchMovieDetail(data.id),
      fetchMovieTrailer(data.id),
    ])
      .then(([movieDetails, movieTrailer]) => {
        setDetails(movieDetails);
        setTrailer(movieTrailer);
      })
      .catch((error) => console.log("Error fetching movie detail:", error));
  }, [data]);

  if (!data) {
    return (
      <div className="loading">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <article className="movie-container">
      <Link className="movie-poster-link" to={`/moviedetail/${data.id}`}>
        <img
          alt={`${data.original_title || data.title} poster`}
          className="movie-card"
          src={`${URL_IMAGE}w300/${data.poster_path}`}
        />
      </Link>

      <div className="movie-hover-card">
        <div className="movie-hover-content">
          <p className="movie-title">{data.title}</p>

          <div className="movie-meta-row">
            {data.release_date && (
              <span>{formatReleaseDate(data.release_date)}</span>
            )}

            {data.vote_average ? (
              <span>{data.vote_average.toFixed(1)}</span>
            ) : null}

            {details?.runtime ? (
              <span>{formatRuntime(details.runtime)}</span>
            ) : null}
          </div>

          {data.overview && (
            <p className="movie-summary">{data.overview}</p>
          )}

          <div className="movie-hover-actions">
            <TrailerButton trailer={trailer} />

            <FavouriteButton
              movie={data}
              onUnfavourite={onUnfavourite}
            />

            <Link className="movie-info-link" to={`/moviedetail/${data.id}`}>
              More Info
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;