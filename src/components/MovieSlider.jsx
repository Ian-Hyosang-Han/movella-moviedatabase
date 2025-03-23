import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { URL_IMAGE } from "../utilities/api";

const MovieSlider = ({ title, movies }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4, slidesToScroll: 4 },
      },
      {
        breakpoint: 1600,
        settings: { slidesToShow: 5, slidesToScroll: 5 },
      },
    ],
  };

  return (
    <div className="movie-slider">
      <h2>{title}</h2>
      <Slider {...sliderSettings}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <Link to={`/detail/${movie.id}`} className="focus-link">
              <img
                className="movie-card"
                src={`${URL_IMAGE}w185/${movie.poster_path}`}
                alt={`${movie.title} poster`}
              />
            </Link>
            <div className="movie-info">
              {/* <p>{movie.title}</p>
              <p>{movie.vote_average ? movie.vote_average.toFixed(1) : "NR"}</p> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;