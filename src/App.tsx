import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.scss";
import { Footer } from "./common/footer/Footer";
import { Header } from "./common/header/Header";
import { About } from "./pages/about/About";
import { CardsPage } from "./pages/cardsPage/CardsPage";
import { Gallery } from "./pages/gallery/Gallery";
import { Page404 } from "./pages/page404/Page404";
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
