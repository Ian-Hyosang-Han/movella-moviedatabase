import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ImSearch } from "react-icons/im";

function SearchMovies() {
  const [movieTitle, setMovieTitle] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (movieTitle.trim() !== "") {
      const encodedTitle = encodeURIComponent(movieTitle);
      navigate(`/search/${encodedTitle}`);
      setMovieTitle("");
      setIsNavOpen(false);
    }
  };

  const handleButtonClick = () => {
    if (!isNavOpen) {
      // 열기
      setIsNavOpen(true);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    } else if (movieTitle.trim() === "") {
      // 닫기 (텍스트 없을 때)
      setIsNavOpen(false);
    } else {
      // 텍스트 있을 경우 → 검색
      handleSubmit(new Event("submit"));
    }
  };

  // ESC 키로 닫기
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsNavOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <form
      className={`searchBox ${isNavOpen ? "active" : ""}`}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        ref={inputRef}
        className="searchInput"
        placeholder="Search movies..."
        value={movieTitle}
        onChange={(e) => setMovieTitle(e.target.value)}
      />
      <button
        type="button"
        className="searchButton"
        onClick={handleButtonClick}
      >
        <ImSearch className="search-icon" />
      </button>
    </form>
  );
}

export default SearchMovies;