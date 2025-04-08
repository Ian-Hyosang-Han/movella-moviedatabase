import React, { useState, useEffect } from "react";
import { fetchMovies } from "../utilities/api";
import HeroInfo from "../components/HeroInfo";
import HeroBanner from "../components/HeroBanner";
import MoviesContainer from "../components/MoviesContainer";
// Library utilities { Swiper, Tabs }
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [heroMovies, setHeroMovies] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const today = new Date();

    const fetchAllMovies = async () => {
      try {
        const [popular, nowPlaying, topRated] = await Promise.all([
          fetchMovies("popular"),
          fetchMovies("now_playing"),
          fetchMovies("top_rated"),
        ]);

        setPopularMovies(popular.results);
        setNowPlayingMovies(nowPlaying.results);
        setTopRatedMovies(topRated.results);

        // Fetch upcoming from both CA and US
        const caUpcoming = await fetchMovies("upcoming", "CA");
        const usUpcoming = await fetchMovies("upcoming", "US");

        // Combine and deduplicate
        const combined = [...caUpcoming.results, ...usUpcoming.results];
        const uniqueMap = new Map();
        combined.forEach((movie) => {
          if (!uniqueMap.has(movie.id)) {
            uniqueMap.set(movie.id, movie);
          }
        });

        // Filter future release dates only
        const filtered = Array.from(uniqueMap.values()).filter((movie) => {
          return new Date(movie.release_date) > today;
        });

        setUpcomingMovies(filtered);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchAllMovies();
  }, []);

  function getRandomMovies(movieList, count = 3) {
    if (!movieList || movieList.length === 0) return [];
    const shuffled = [...movieList].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }

  useEffect(() => {
    if (upcomingMovies.length > 0) {
      setHeroMovies(getRandomMovies(upcomingMovies, 3));
    }
  }, [upcomingMovies]);

  return (
    <main className="home-page">
      <div className="hero-container">
        <Swiper
          className="home-banner"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          spaceBetween={50}
          slidesPerView={1}
          speed={800}
          effect={"fade"}
          fadeEffect={{ crossFade: true }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            renderBullet: (index, className) =>
              `<span class="${className}"></span>`,
          }}
          modules={[Pagination, EffectFade, Autoplay]}
        >
          {heroMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <HeroBanner movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
        {heroMovies.length > 0 && (
          <HeroInfo movie={heroMovies[activeIndex]} />
        )}
      </div>
      <MoviesContainer title="Upcoming" movies={upcomingMovies} />
      <MoviesContainer title="Now Playing" movies={nowPlayingMovies} />
      <MoviesContainer title="Popular" movies={popularMovies} />
      <MoviesContainer title="Top Rated" movies={topRatedMovies} />
    </main>
  );
};

export default Home;