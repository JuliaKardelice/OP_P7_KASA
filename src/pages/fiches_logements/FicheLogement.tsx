import React from "react";
import { useParams } from "react-router-dom";
import { Caroussel } from "../../components/caroussel/Caroussel";
import { Collapse } from "../../components/collapse/Collapse";
import { StarsRating } from "../../components/rating/starsRating";
import LogementContent from "../../data/logements.json";
import "./FicheLogement.scss";

export interface Logement {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: {
    name: string;
    picture: string;
  };
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}

export const FicheLogement: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Récupération de l'ID à partir des paramètres

  // Pourquoi logement n'est-il pas définit ?
  const logement = LogementContent.find((logement) => logement.id === id);

  // Mettre l'erreur 404

  // Pour le rating

  return (
    <div className="fiche-logement">
      <section className="carroussel">
        <Caroussel pictures={logement?.pictures} />
      </section>
      <section className="descriptionPart">
        <div className="logementInformation">
          <h1> {logement.title}</h1>
          <p> {logement.location}</p>
          <div className="logementTages">
            {logement?.tags}
            <ul className="tagsList"></ul>
          </div>
        </div>
        <div className="hostInformation">
          <p> {logement?.host.name}</p>
          <div className="hostPicture">
            <img src={logement.host.picture} alt="photo du locataire" />
          </div>
          <div className="ratingStars">
            <StarsRating rate={logement?.rating} />
          </div>
        </div>
        <section className="collapse-part">
          {/* Collapse description */}
          <Collapse title="Description" content={logement.description} />
          {/* Collapse "équipement attention tableau mapper"*/}
          <Collapse title="Equipement" content={logement?.equipments} />
        </section>
      </section>
    </div>
  );
};
