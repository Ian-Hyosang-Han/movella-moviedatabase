import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ score }) => {
  const thresholds = [
    { min: 10, stars: 5 },
    { min: 9.0, stars: 4.5 },
    { min: 8.0, stars: 4 },
    { min: 7.0, stars: 3.5 },
    { min: 6.0, stars: 3 },
    { min: 5.0, stars: 2.5 },
    { min: 4.0, stars: 2 },
    { min: 3.0, stars: 1.5 },
    { min: 2.0, stars: 1 },
    { min: 1.0, stars: 0.5 },
    { min: 0,   stars: 0 },
  ];

  const found = thresholds.find((t) => score >= t.min);
  const starCount = found ? found.stars : 0;

  const full = Math.floor(starCount);
  const half = starCount % 1 !== 0;
  const empty = 5 - full - (half ? 1 : 0);

  return (
    <div className="star-rating">
      {Array(full).fill().map((_, i) => <FaStar key={`full-${i}`} color="#FFD700" />)}
      {half && <FaStarHalfAlt color="#FFD700" />}
      {Array(empty).fill().map((_, i) => <FaRegStar key={`empty-${i}`} color="#FFD700" />)}
      <span className="rating-text">{score.toFixed(1)} / 10</span>
    </div>
  );
};

export default StarRating;