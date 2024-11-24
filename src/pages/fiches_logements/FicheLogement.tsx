import React from "react";
import { useParams } from "react-router-dom";
import { Caroussel } from "../../components/caroussel/Caroussel";
import { Collapse } from "../../components/collapse/Collapse";
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
  console.log(logement?.rating);

  // Mettre l'erreur 404

  // Pour le rating

  return (
    <div className="fiche-logement">
      <section className="carroussel">
        <Caroussel id={logement?.id} />
      </section>
      <div className="content">
        <section className="descriptionPart">
          <h1> {logement?.title}</h1>
          <p> {logement?.location}</p>
          <div className="logementTags">
            {logement?.tags}
            <ul className="tagsList"></ul>
          </div>

          <div className="hostInformation">
            <p> {logement?.host.name}</p>
            <div className="hostPicture">
              <img src={logement?.host.picture} alt="photo du locataire" />
            </div>
          </div>
          <div className="ratingStars">{logement?.rating}</div>
        </section>
        <section className="collapse-part">
          {/* Collapse description */}
          <Collapse title="Description" content={logement?.description} />
          {/* Collapse "équipement attention tableau mapper"*/}
          <Collapse title="Equipement" content={logement?.equipments} />
        </section>
      </div>
    </div>
  );
};
