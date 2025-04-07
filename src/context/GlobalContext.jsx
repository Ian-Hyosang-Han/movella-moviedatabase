import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [favorites, setFavorites] = useState(loadFavsFromLocalStorage());
  // favorites will store a bunch of movie objects

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  function loadFavsFromLocalStorage() {
    const favs = localStorage.getItem("favorites");
    if (favs) {
      return JSON.parse(favs);
    } else {
      return [];
    }
  }

  function addFavorite(movie) {
    setFavorites([...favorites, movie]);
  }

  function removeFavorite(movie) {
    //filter out the movie we want to remove based on the id
    setFavorites(favorites.filter((fav) => fav.id !== movie.id));
    // so condition in plain english: if the movie id is not the same as the movie we want to remove, keep it
  }

  return (
    <GlobalContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };