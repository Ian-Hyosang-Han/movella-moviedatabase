import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMovies, ORIGINAL_IMAGE_URL } from "../utilities/api";
import { LoadingSpinner } from "../components/LoadingSpinner";

const Landing = () => {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadRandomMovie() {
      try {
        const data = await fetchMovies("popular");
        const candidates = data.results.filter((item) => item.backdrop_path);

        const randomMovie =
          candidates[Math.floor(Math.random() * candidates.length)];

        setMovie(randomMovie);
      } catch (error) {
        console.error(error);
      }
    }

    loadRandomMovie();
  }, []);

  if (!movie) return <LoadingSpinner />;

  return (
    <main
      className="landing"
      style={{
        backgroundImage: `url(${ORIGINAL_IMAGE_URL}${movie.backdrop_path})`,
      }}
    >
      <div className="landing__overlay" />

      <section className="landing__content">
        <h1 className="landing__title">MOVELLA</h1>

        <button
          type="button"
          className="landing__button"
          onClick={() => navigate("/home")}
        >
          ENTER
        </button>
      </section>
    </main>
  );
};

export default Landing;