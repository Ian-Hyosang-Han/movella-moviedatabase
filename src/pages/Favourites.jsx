import React from "react";
import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import MovieCard from "../components/MovieCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Favourites = () => {
  // Access favorites array and remove function from global context
  const { favourites, removeFavourite } = useContext(GlobalContext);
  // Hook for programmatic navigation
  const navigate = useNavigate();
  // State to track page exit animation
  const [isExiting, setIsExiting] = useState(false);

  const nodeRefs = useRef({});

  // Effect hook to handle empty favorites state
  useEffect(() => {
    if (favourites.length === 0) {
      // Trigger exit animation
      setIsExiting(true);
      // Navigate to no-favorites page after animation completes
      setTimeout(() => {
        navigate("/no-favourites");
      }, 300); // Duration matches CSS transition
    }
  }, [favourites, navigate]); // Re-run when favorites or navigate changes

  // Handler for removing movies from favorites
  const handleRemoveFavourite = (movie) => {
    removeFavourite(movie);
  };

  return (
    <main className={`favourites-page ${isExiting ? "page-exit" : ""}`}>
      <section className="favourites-hero">
        <p className="favourites-kicker">Saved Collection</p>
        <h1 className="fave-header">Favourites</h1>
        <p className="favourites-subtitle">
          Your personal watchlist of films worth returning to.
        </p>
      </section>

      <TransitionGroup className="movie-grid">
        {favourites.map((movie) => {
          if (!nodeRefs.current[movie.id]) {
            nodeRefs.current[movie.id] = React.createRef();
          }

          return (
            <CSSTransition
              key={movie.id}
              timeout={300}
              classNames="fade"
              nodeRef={nodeRefs.current[movie.id]}
            >
              <div className="favourite-grid-item" ref={nodeRefs.current[movie.id]}>
                <MovieCard
                  data={movie}
                  onUnfavourite={() => handleRemoveFavourite(movie)}
                />
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </main>
  );
}

export default Favourites;