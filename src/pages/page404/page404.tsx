import React from "react";
import "./page404.scss";

export const Page404: React.FC = () => {
  return (
    <div className="page404">
      <p className="txt404">Oups ! la page que vous demandez n'existe pas/</p>
      <p className="return">Retourner sur la page d'accueil</p>
    </div>
  );
};
