import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { BiSolidBookHeart } from "react-icons/bi";

function FavouriteButton({ movie, onFavouriteClick, onUnfavourite }) {
  const { favourites, addFavourite, removeFavourite } = useContext(GlobalContext);

  // determine whether the movie is already in favorites
  const isFavourite = favourites.find((fav) => {
    return fav.id === movie.id;
  });

  function handleClick(e) {
    e.stopPropagation();
    if (isFavourite) {
      removeFavourite(movie);
      if (onUnfavourite) onUnfavourite();
    } else {
      addFavourite(movie);

      if (onFavouriteClick) {
        onFavouriteClick();
      }
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`favourite-btn ${isFavourite ? "active" : ""}`}
      aria-label="Toggle Favourite"
    >
      <BiSolidBookHeart className="favourite-icon" />
    </button>
  );
}

export default FavouriteButton;