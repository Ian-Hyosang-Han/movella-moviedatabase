import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
    fetchMovieDetail,
    fetchMovieCredits,
    fetchMovieTrailer,
    URL_IMAGE,
    ORIGINAL_IMAGE_URL
} from "../utilities/api";
import {
    formatRuntime,
    formatReleaseDate,
} from "../utilities/toolbelt";
// import FavoriteButton from "../components/FavoriteButton";
import TrailerButton from "../components/TrailerButton";
import StarRating from "../components/StarRating";

const MovieDetail = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        fetchMovieDetail(id)
            .then(setMovie)
            .catch((error) => console.log("Error fetching movie details:", error));

        fetchMovieTrailer(id)
            .then(setTrailer)
            .catch((error) => console.log("Error fetching trailer:", error));

        fetchMovieCredits(id)
            .then((data) => setCast(data.cast))
            .catch((error) => console.log("Error fetching cast:", error));
    }, [id]);

    useEffect(() => {
        if (!movie?.backdrop_path) return;

        const imageURL = `${ORIGINAL_IMAGE_URL}${movie.backdrop_path}`;
        const originalStyle = document.body.style.background;

        document.body.style.background = `
      linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.95)),
      url(${imageURL}) center/cover no-repeat fixed
    `;
        return () => {
            document.body.style.background = originalStyle;
        };
    }, [movie?.backdrop_path]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="single-movie-wrapper">
            <div className="single-movie-grid">
                {/* 1행: 제목 */}
                <h1 className="single-movie-title">{movie.title}</h1>

                {/* 오른쪽 포스터: 전체 행을 커버 */}
                <div className="single-movie-poster">
                    <img
                        className="movie-poster"
                        src={`${URL_IMAGE}w342/${movie.poster_path}`}
                        alt={`${movie.title} poster`}
                    />
                </div>

                {/* 2행: 개봉일 / 장르 / 런타임 */}
                <div className="movie-meta">
                    <p>{formatReleaseDate(movie.release_date)}</p>
                    <ul className="single-movie-genre">
                        {movie.genres &&
                            movie.genres.map((genre, index) => (
                                <li key={index}>{genre.name}</li>
                            ))}
                    </ul>
                    <p className="single-movie-runtime">{formatRuntime(movie.runtime)}</p>
                </div>

                {/* 3행: 트레일러 버튼 및 별점 */}
                <div className="movie-actions">
                    <TrailerButton trailer={trailer} />
                    <StarRating score={movie.vote_average} />
                </div>

                {/* 4행: overview 타이틀 */}
                <h3 className="overview-title">Overview</h3>

                {/* 5행: overview 내용 */}
                <p className="single-movie-overview">{movie.overview}</p>
            </div>

            {/* 캐스트 */}
            <div className="movie-cast-slider">
                {cast.length > 0 ? (
                    cast.slice(0, 10).map((actor) => (
                        <div key={actor.id} className="actor-card">
                            <img
                                className="actor-image"
                                src={
                                    actor.profile_path
                                        ? `${URL_IMAGE}w185/${actor.profile_path}`
                                        : "https://via.placeholder.com/185x278.png?text=No+Image"
                                }
                                alt={actor.name}
                            />
                            <div className="actor-name">
                                <p>{actor.name}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No cast information available.</p>
                )}
            </div>
        </div>
    );
};

export default MovieDetail;