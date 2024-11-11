import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Caroussel } from "../../components/caroussel/Caroussel";
import { CollapseBis } from "../../components/collapse/CollapseBis";
import cards_data from "../../data/logements.json";
import { Logement } from "../fiches_logements/FicheLogement";
import "./CardsPage.scss";

export const CardsPage: React.FC = () => {
  const { id } = useParams();
  const dataGroup = cards_data.find(
    (cardLogement: Logement) => cardLogement.id === id
  );

  if (!dataGroup) {
    // si dataGroup est undefined parce que l’identifiant extrait de l’URL avec useParams() ne correspond à aucun groupe de données dans cards_data, alors !dataGroup sera true
    return <Navigate to="/404" />;
  } else {
    return (
      <div className="CardsPage">
        <Caroussel id={id} />
        <div className="info">
          <div className="sec12">
            <div className="info-section info-section1">
              <div className="title-and-loc">
                <h2>{dataGroup.title}</h2>
                <p>{dataGroup.location}</p>
              </div>
              <div className="tags">
                {dataGroup.tags.map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </div>
            </div>
            <div className="info-section info-section2">
              <div className="account-info">
                <p>{dataGroup.host.name}</p>
                <img src={dataGroup.host.picture} alt="pp" />
              </div>
              <div className="stars-rating">
                {Array.from({ length: 5 }, (_, index) => (
                  <i
                    key={index}
                    className={`fa-solid fa-star ${
                      index < +dataGroup.rating
                        ? "active-star"
                        : "disabled-star"
                    }`}
                  ></i>
                ))}
              </div>
            </div>
          </div>
          <div className="info-section info-section3">
            <CollapseBis title="Description" content={dataGroup.description} />
            <CollapseBis
              title="Équipement"
              content={dataGroup.equipments.map((equipment, index) => (
                <span key={index}>{equipment}</span>
              ))}
            />
          </div>
        </div>
      </div>
    );
  }
};
