// Development Components
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Home from "../pages/Home";
import About from "../pages/About";
// import Favorites from "../pages/Favorites";
import NotFound from "../pages/NotFound";
import MovieDetail from "../pages/MovieDetail";
// Components
import Footer from "../components/Footer";
import Header from "../components/Header";
import Favourites from "../pages/Favourites";
import NoFavourites from "../pages/NoFavourites";
import { GlobalProvider } from '../context/GlobalContext.jsx';

const AppRouter = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/no-favourites" element={<NoFavourites />} />
          <Route path="/moviedetail/:id" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default AppRouter;