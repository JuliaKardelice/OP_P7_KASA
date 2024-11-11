import React from "react";
import { NavLink } from "react-router-dom";
import "./Page404.scss";

export const Page404: React.FC = () => {
  return (
    <div className="page404">
      <div className="numbe404">
        <h1> 404</h1>
      </div>
      <p className="txt404">Oups ! la page que vous demandez n'existe pas</p>
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <p className="return">Retourner sur la page d'accueil</p>
        </NavLink>
      </div>
    </div>
  );
};
