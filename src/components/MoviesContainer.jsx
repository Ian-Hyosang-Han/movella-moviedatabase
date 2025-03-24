import React from "react";
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MoviesContainer = ({ title, movies, flex = false }) => {
  const settings = {
    dots: false,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <FaChevronRight />,
    prevArrow: <FaChevronLeft />,
    centerMode: true,
    centerPadding: "10%",
    initialSlide: Math.floor(movies.length / 2) - 1, // 초기 슬라이드를 가운데로 설정
    swipe: true,
    draggable: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 3000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1820,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1720,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1310,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false,
        },
      },
      {
        breakpoint: 545,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          arrows: false,
        },
      },
    ],
  };

  const renderLoadingCards = () => {
    const loadingCards = [];
    for (let index = 0; index < settings.slidesToShow; index++) {
      loadingCards.push(<MovieCard key={index} data={""} />);
    }
    return loadingCards;
  };

  if (flex) {
    return (
      <>
        {title && <h2>{title}</h2>}
        <div className="movies-container movies-flexed">
          {movies
            ? movies.map((movie) => <MovieCard key={movie.id} data={movie} />)
            : renderLoadingCards()}
        </div>
      </>
    );
  }

  return (
    <div className="movies-container">
      <h2>{title}</h2>
      {movies ? (
        <Slider {...settings}>
          {movies.map((movieData, index) => (
            <MovieCard key={index} data={movieData} />
          ))}
        </Slider>
      ) : (
        <Slider {...settings}>{renderLoadingCards()}</Slider>
      )}
    </div>
  );
};

export default MoviesContainer;