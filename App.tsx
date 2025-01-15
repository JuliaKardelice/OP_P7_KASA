import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import { Footer } from "./src/common/footer/Footer";
import { Header } from "./src/common/header/Header";
import { About } from "./src/pages/about/About";
import { CardsPage } from "./src/pages/cardsPage/CardsPage";
import { Gallery } from "./src/pages/gallery/Gallery";
import { Page404 } from "./src/pages/page404/Page404";
export const App: React.FC = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/card/:id" element={<CardsPage />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Page404 />} />
          {/* <Route path="/home" element={<Home />}/> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
};
