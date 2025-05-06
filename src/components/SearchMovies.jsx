import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ImSearch } from "react-icons/im";
import { fetchSearchMovies } from "../utilities/api";

function SearchMovies() {
  const [movieTitle, setMovieTitle] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const searchMovies = (query) => {
    if (!query.trim()) return;
    fetchSearchMovies(query)
      .then((data) => {
        setSearchResults(data.results || []);
      })
      .catch((err) => {
        console.error("Search failed:", err);
        setSearchResults([]);
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setMovieTitle(value);
    if (value.trim()) {
      searchMovies(value);
    } else {
      setSearchResults([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieTitle.trim()) {
      searchMovies(movieTitle);
    }
  };

  const handleButtonClick = () => {
    if (!isNavOpen) {
      setIsNavOpen(true);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else if (movieTitle.trim()) {
      searchMovies(movieTitle); // ✅ 검색 실행
    } else {
      setIsNavOpen(false);
      setSearchResults([]);
    }
  };

  const handleMovieSelect = (movieId) => {
    setMovieTitle("");
    setSearchResults([]);
    setIsNavOpen(false);
    navigate(`/moviedetail/${movieId}`);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsNavOpen(false);
        setSearchResults([]);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className={`searchBoxWrapper ${isNavOpen ? "active" : ""}`}>
      <form className={`searchBox ${isNavOpen ? "active" : ""}`} onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          className="searchInput"
          placeholder="Search movies..."
          value={movieTitle}
          onChange={handleChange}
        />
        <button
          type="button"
          className="searchButton"
          onClick={handleButtonClick}
        >
          <ImSearch className="search-icon" />
        </button>
      </form>

      {searchResults.length > 0 && (
        <ul className="searchDropdown">
          {searchResults.slice(0, 8).map((movie) => (
            <li
              key={movie.id}
              className="searchResultItem"
              onClick={() => handleMovieSelect(movie.id)}
            >
              {movie.title}{" "}
              {movie.release_date ? `(${movie.release_date.slice(0, 4)})` : ""}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchMovies;