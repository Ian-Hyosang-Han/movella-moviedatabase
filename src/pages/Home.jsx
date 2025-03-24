import React, { useState, useEffect } from "react";
import { fetchMovies } from "../utilities/api";
import HeroMovie from "../components/HeroMovie";
import MoviesContainer from "../components/MoviesContainer";
// Library utilities { Swiper, Tabs }
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

// State variables to store different categories of movies
const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [heroMovies, setHeroMovies] = useState([]);

  // Fetch all movie data when the component mounts
  useEffect(() => {
    const fetchAllMovies = () => {
      fetchMovies("popular")
        .then((data) => setPopularMovies(data.results))
        .catch((error) => console.error("Error fetching popular movies:", error));
  
      fetchMovies("now_playing")
        .then((data) => setNowPlayingMovies(data.results))
        .catch((error) => console.error("Error fetching now playing movies:", error));
  
      fetchMovies("upcoming")
        .then((data) => setUpcomingMovies(data.results))
        .catch((error) => console.error("Error fetching upcoming movies:", error));
  
      fetchMovies("top_rated")
        .then((data) => setTopRatedMovies(data.results))
        .catch((error) => console.error("Error fetching top rated movies:", error));
    };
  
    fetchAllMovies();
  
    // Empty dependency array ensures this runs only once on mount
  }, []);

  // Select a random movie from the "Upcoming" category as the hero movies
  function getRandomMovies(movieList, count = 3) {
    if (!movieList || movieList.length === 0) return [];
    // Use the [...movelist] to create a copy, returns a negative or positive number to ensure random sorting
    const shuffled = [...movieList].sort(() => 0.5 - Math.random());
    // Selects and returns the first count elements from the shuffled array
    return shuffled.slice(0, count);
  }

  useEffect(() => {
    if (upcomingMovies.length > 0) {
      setHeroMovies(getRandomMovies(upcomingMovies, 3));
    }
  }, [upcomingMovies]); // Run whenever upcomingMovies changes

  return (
    <main className="home-page">
      <div className="hero-container">
        <Swiper
          className="home-banner"
          spaceBetween={50}
          slidesPerView={1}
          speed={800} // Controls slide transition speed
          effect={"fade"} // Add fade transition
          fadeEffect={{
            crossFade: true, // Enable cross-fade between slides
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          }}
          modules={[Pagination, EffectFade, Autoplay]} // Add EffectFade module
        >
          {heroMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <HeroMovie movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <MoviesContainer title="Popular" movies={popularMovies} />
      <MoviesContainer title="Now Playing" movies={nowPlayingMovies} />
      <MoviesContainer title="Upcoming" movies={upcomingMovies} />
      <MoviesContainer title="Top Rated" movies={topRatedMovies} />
    </main>
  );
};

export default Home;