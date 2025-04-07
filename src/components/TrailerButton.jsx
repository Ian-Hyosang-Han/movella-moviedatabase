import { useState } from "react";
import { FaYoutube } from "react-icons/fa";

const TrailerButton = ({ trailer }) => {
  const [showTrailer, setShowTrailer] = useState(false);

  if (!trailer) return <p>No trailer available.</p>;

  return (
    <>
      <button
        onClick={() => setShowTrailer(true)}
        className="trailer-button"
        aria-label="Play Trailer"
      >
        <FaYoutube />
      </button>

      {showTrailer && (
        <div className="trailer-modal" onClick={() => setShowTrailer(false)}>
          <div
            className="trailer-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setShowTrailer(false)}
            >
              
            </button>
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default TrailerButton;