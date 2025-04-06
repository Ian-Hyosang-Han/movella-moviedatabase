import React, { useEffect, useState } from "react";
import { fetchMovieCredits, fetchMovieTrailer } from "../utilities/api";
import { useNavigate } from "react-router-dom";
import TrailerButton from "./TrailerButton";

const HeroInfo = ({ movie }) => {
  const [director, setDirector] = useState("");
  const [leadActors, setLeadActors] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!movie) return;

    // Fetch credits (director & lead cast)
    fetchMovieCredits(movie.id)
      .then((data) => {
        const dir = data.crew.find((p) => p.job === "Director");
        const cast = data.cast.slice(0, 2);
        setDirector(dir?.name || "Unknown");
        setLeadActors(cast.map((a) => a.name));
      })
      .catch(console.error);

    // Fetch trailer
    fetchMovieTrailer(movie.id)
      .then(setTrailer)
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
        <TrailerButton trailer={trailer} />

        <button
          className="moreinfo-btn"
          onClick={() => navigate(`/moviedetail/${movie.id}`)}
        >
          More Info
        </button>
      </div>
      <hr />
    </div>
  );
};

export default HeroInfo;