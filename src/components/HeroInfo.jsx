import React, { useEffect, useState } from "react";
import { fetchMovies } from "../utilities/api";
import { useNavigate } from "react-router-dom";

const HeroInfo = ({ movie }) => {
    const [director, setDirector] = useState("");
    const [leadActors, setLeadActors] = useState([]);
    const [trailer, setTrailer] = useState(null);
    const [showTrailer, setShowTrailer] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (!movie) return;

        fetchMovies(`${movie.id}/credits`)
            .then((data) => {
                const dir = data.crew.find((p) => p.job === "Director");
                const cast = data.cast.slice(0, 2);
                setDirector(dir?.name || "Unknown");
                setLeadActors(cast.map((a) => a.name));
            })
            .catch(console.error);

        fetchMovies(`${movie.id}/videos`)
            .then((data) => {
                const trailerVideo = data.results.find(
                    (vid) => vid.type === "Trailer" && vid.site === "YouTube"
                );
                setTrailer(trailerVideo || null);
            })
            .catch((error) => {
                console.log("Error fetching trailer:", error);
            });
    }, [movie]);

    return (
        <div className="hero-moreinfo">
            <div className="hero-credits">
                <p><strong>Director:</strong> {director}</p>
                <p><strong>Cast:</strong> {leadActors.join(", ")}</p>
            </div>

            <div className="hero-actions">
                {trailer ? (
                    <>
                        <button
                            onClick={() => setShowTrailer(true)}
                            className="trailer-button"
                        >
                            ▶
                        </button>

                        {showTrailer && (
                            <div
                                className="trailer-modal"
                                onClick={() => setShowTrailer(false)}
                            >
                                <div
                                    className="trailer-modal-content"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <button
                                        className="close-modal"
                                        onClick={() => setShowTrailer(false)}
                                    >
                                        ×
                                    </button>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        )}
                    </>
                ) : (
                    <p>No trailer available.</p>
                )}

                <button
                    className="moreinfo-btn"
                    onClick={() => navigate(`/movie/${movie.id}`)}
                >
                    More Info
                </button>
            </div>
            <hr />
        </div>
    );
}

export default HeroInfo;