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

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/favorite" element={<Favorites />} /> */}
        <Route path="/moviedetail/:id" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;