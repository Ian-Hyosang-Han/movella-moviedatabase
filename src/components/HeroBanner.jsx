import React from 'react';
import { URL_IMAGE } from '../utilities/api';
import { formatReleaseDate } from '../utilities/toolbelt';

const HeroBanner = ({ movie }) => {
    return (
      <div className="hero-slider">
        <img
          className="hero-image"
          src={`${URL_IMAGE}/w1280/${movie.backdrop_path}`}
          alt={`${movie.title} poster`}
        />
        <div className="hero-info-container">
          <h1 className="hero-title">{movie.title}</h1>
          <h2 className="hero-release-date">{formatReleaseDate(movie.release_date)}</h2>
        </div>
      </div>
    );
  };
  
  export default HeroBanner;