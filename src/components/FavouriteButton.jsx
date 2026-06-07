import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { FaHeart, FaRegHeart } from "react-icons/fa";

function FavouriteButton({ movie, onFavouriteClick, onUnfavourite }) {
  const { favourites, addFavourite, removeFavourite } =
    useContext(GlobalContext);

  const isFavourite = favourites.find((fav) => fav.id === movie.id);

  function handleClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (isFavourite) {
      removeFavourite(movie);
      if (onUnfavourite) onUnfavourite();
    } else {
      addFavourite(movie);
      if (onFavouriteClick) onFavouriteClick();
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`favourite-btn ${isFavourite ? "active" : ""}`}
      aria-label="Toggle Favourite"
      type="button"
    >
      {isFavourite ? (
        <FaHeart className="favourite-icon" />
      ) : (
        <FaRegHeart className="favourite-icon" />
      )}
    </button>
  );
}

export default FavouriteButton;