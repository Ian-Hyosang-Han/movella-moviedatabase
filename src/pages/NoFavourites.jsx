import { Link } from "react-router-dom";

const NoFavourites = () => {
  return (
    <main className="no-favourites-page">
      <section className="no-favourites-panel">
        <p className="no-favourites-kicker">Saved Collection</p>
        <h1>No favourites yet</h1>
        <p>
          Build your own shortlist by saving films from the home page or movie
          detail pages.
        </p>
        <Link to="/home" className="btn-go-home">
          Browse Movies
        </Link>
      </section>
    </main>
  );
};

export default NoFavourites;