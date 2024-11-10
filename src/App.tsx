import React from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.scss";
import logo from "./assets/logo.png";
import { Header } from "./common/header/Header";
import { About } from "./pages/about/About";
import { FicheLogement } from "./pages/fiches_logements/FicheLogement";
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
          <Route path="/card/:id" element={<FicheLogement />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
          {/* <Route path="/home" element={<Home />}/> */}
        </Routes>
      </Router>
      <footer>
        <img src={logo} alt="logo de Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
};
