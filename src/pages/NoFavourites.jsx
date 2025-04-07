import { Link } from "react-router-dom";
import { BiSolidBookHeart } from "react-icons/bi";

const NoFavourites = () => {
  return (
    <div className="no-favourites-page">
      <div className="icon-wrapper">
        <BiSolidBookHeart size={64} fill="#3c2a4d" />
        <BiSolidBookHeart size={64} fill="#ffffff" />
        <BiSolidBookHeart size={64} fill="#b5936e" />
        <BiSolidBookHeart size={64} fill="#ffffff" />
        <BiSolidBookHeart size={64} fill="#9a6cc6" />
      </div>
      <h2>You haven't added any favourites yet</h2>
      <p>Start exploring and add movies to your favourites to see them here!</p>
      <Link to="/" className="btn-go-home">
        Browse Movies
      </Link>
    </div>
  );
};

export default NoFavourites;