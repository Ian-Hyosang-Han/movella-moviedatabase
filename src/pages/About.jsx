import { useEffect, useState } from "react";
import { fetchMovies, ORIGINAL_IMAGE_URL } from "../utilities/api";

const About = () => {
  const [backdrop, setBackdrop] = useState("");

  useEffect(() => {
    fetchMovies("top_rated")
      .then((data) => {
        const moviesWithBackdrop = data.results.filter(
          (movie) => movie.backdrop_path
        );

        const randomMovie =
          moviesWithBackdrop[
            Math.floor(Math.random() * moviesWithBackdrop.length)
          ];

        if (randomMovie?.backdrop_path) {
          setBackdrop(`${ORIGINAL_IMAGE_URL}${randomMovie.backdrop_path}`);
        }
      })
      .catch((error) => console.log("Error fetching about backdrop:", error));
  }, []);

  return (
    <main
      className="about-wrapper"
      style={backdrop ? { backgroundImage: `url(${backdrop})` } : undefined}
    >
      <section className="about-container">
        <p className="about-kicker">About Movella</p>
        <h1>Storytelling in Motion</h1>

        <div className="about-copy">
          <p>
            Movella is a cinematic discovery experience built for people who
            love stories, atmosphere, and the quiet pull of a memorable film.
          </p>

          <p>
            The project brings together movie browsing, curated discovery,
            favourites, trailers, cast details, and rich visual presentation in
            one responsive interface.
          </p>

          <p>
            Inspired by the relationship between movies and novellas, Movella
            treats every film as a compact world worth exploring one frame at a
            time.
          </p>
        </div>

        <div className="about-stats">
          <div>
            <span>TMDB</span>
            <p>Movie Data</p>
          </div>
          <div>
            <span>Top Rated</span>
            <p>Dynamic Backdrops</p>
          </div>
          <div>
            <span>Responsive</span>
            <p>Modern UI</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;