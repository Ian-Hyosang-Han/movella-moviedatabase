import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ImSearch } from "react-icons/im";

function SearchMovies() {
    const [movieTitle, setMovieTitle] = useState("");
    const [isNavOpen, setIsNavOpen] = useState(false);
    const inputRef = useRef(null);
  
    const navigate = useNavigate();
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (isNavOpen && movieTitle.trim() !== "") {
        const encodedTitle = encodeURIComponent(movieTitle);
        navigate(`/search/${encodedTitle}`);
      } else {
        setIsNavOpen(true);
        inputRef.current?.focus();
      }
    };
  
    // Handle input change
    const handleInputChange = (e) => {
      setMovieTitle(e.target.value);
    };
  
    // Handle input blur (close search input)
    const handleBlur = () => {
      setIsNavOpen(false);
    };
  
    return (
      <form
        onSubmit={handleSubmit}
        className={`searchBox ${isNavOpen ? "active" : ""}`}
        onBlur={handleBlur}
      >
        <input
          type="text"
          ref={inputRef}
          className="searchInput"
          placeholder="Search Movies..."
          value={movieTitle}
          onChange={handleInputChange}
        />
        <button type="submit" className="searchButton">
          <ImSearch className="search-icon" />
        </button>
      </form>
    );
  }
  
  export default SearchMovies;
