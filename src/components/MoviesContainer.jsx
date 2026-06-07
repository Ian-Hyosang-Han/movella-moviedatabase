import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NextArrow = ({ className, style, onClick }) => (
  <div className={className} style={style} onClick={onClick}>
    <FaChevronRight size={45} />
  </div>
);

const PrevArrow = ({ className, style, onClick }) => (
  <div className={className} style={style} onClick={onClick}>
    <FaChevronLeft size={45} />
  </div>
);

const MoviesContainer = ({ title, movies, flex = false }) => {
  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: 9,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipe: true,
    draggable: true,
    infinite: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1820,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 5,
          arrows: true,
        },
      },
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 5,
          arrows: true,
        },
      },
      {
        breakpoint: 1310,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 4,
          arrows: true,
        },
      },
      {
        breakpoint: 970,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 545,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
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

  return (
    <div className="movies-container">
      <div className="movies-section-heading">
        <span className="movies-section-kicker">Explore</span>
        <h2>{title}</h2>
      </div>
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
}

export default MoviesContainer;