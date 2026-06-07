import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Landing from "../pages/Landing";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import MovieDetail from "../pages/MovieDetail";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Favourites from "../pages/Favourites";
import NoFavourites from "../pages/NoFavourites";
import { GlobalProvider } from "../context/GlobalContext.jsx";

const AppContent = () => {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  return (
    <>
      {!isLanding && <Header />}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/no-favourites" element={<NoFavourites />} />
        <Route path="/moviedetail/:id" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {!isLanding && <Footer />}
    </>
  );
};

const AppRouter = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default AppRouter;