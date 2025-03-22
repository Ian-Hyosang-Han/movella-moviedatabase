// Development Components
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages

// Components

const AppRouter = () => {
  return (
    <BrowserRouter>
    {/* <Header /> */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorites />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default AppRouter;