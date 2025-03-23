import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { appTitle } from '../globals/globals'
import { fetchMovieDetail, URL_IMAGE } from "../utilities/api";

const MovieDetail = () => {
    // Get movie ID from URL
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {

        // Get movie data
        const getMovie = async () => {
            const data = await fetchMovieDetail(id);
            setMovie(data);
        };
        getMovie();
    }, [id]);

    if (!movie) {
        return <p>Loading...</p>;
    }

    return (
        <div className="movie-detail-poster">
            <img
                className="detail-image"
                src={`${URL_IMAGE}w1280/${movie.backdrop_path}`}
                alt={`${movie.title} poster`} />
            <div className="detail-movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
                <p className="hero-movie-rating">
                    Rating: {movie.vote_average ? movie.vote_average.toFixed(1) : "NR"}
                </p>
            </div>
        </div>
    );
}

export default MovieDetail;