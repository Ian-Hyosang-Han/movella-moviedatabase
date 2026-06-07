import { URL_IMAGE } from "../utilities/api";
import { formatReleaseDate } from "../utilities/toolbelt";

const HeroBanner = ({ movie }) => {
  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : "Upcoming";

  return (
    <article className="hero-banner">
      <div className="hero-slider">
        <img
          className="hero-image"
          src={`${URL_IMAGE}/w1280/${movie.backdrop_path}`}
          alt={`${movie.title} backdrop`}
        />
      </div>

      <div className="hero-info-container">
        <p className="hero-kicker">Featured Release</p>

        <h1 className="hero-title">{movie.title}</h1>

        <div className="hero-meta">
          <span className="hero-badge">HD</span>
          <span>{releaseYear}</span>
          <span>{movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}</span>
          <span>{formatReleaseDate(movie.release_date)}</span>
        </div>

        {movie.overview && (
          <p className="hero-overview">{movie.overview}</p>
        )}
      </div>
    </article>
  );
};

export default HeroBanner;