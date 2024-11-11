import React from "react";
import {
  NavLink,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import "./App.scss";
import logo from "./assets/logo.png";
import { About } from "./pages/about/About";

export const App: React.FC = () => {
  return (
    <>
      <Router>
        <header>
          <img src={logo} alt="logo de Kasa" />
          <nav>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "")}
              to="/"
            >
              Accueil
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              A Propos
            </NavLink>
          </nav>
        </header>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Route path="/page404" element={Page404} />
      </Router>
      <footer>
        <img src={logo} alt="logo de Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
};
