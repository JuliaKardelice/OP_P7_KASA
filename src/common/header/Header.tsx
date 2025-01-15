import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

export const Header: React.FC = () => {
  return (
    <header>
      <img src={logo} alt="logo de Kasa" />
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
};
