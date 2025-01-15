import React, { useState } from "react";
import cards_data from "../../data/logements.json";
import { Logement } from "../../pages/cardsPage/CardsPage";
import "./Caroussel.scss";
export interface CarousselProps {
  id?: string;
}

export const Caroussel: React.FC<CarousselProps> = ({ id }) => {
  const [currentIndexImage, setCurrentIndexImage] = useState<number>(0); ///l'image actuelle a pour index 0 à l'état initial de la variable on type pour définir un nombre (et pas un string par exemple...)
  const images =
    (cards_data as Logement[]).find((card) => card.id === id)?.pictures || [];
  const nextImage = () => {
    setCurrentIndexImage((currentIndexImage + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentIndexImage(
      (currentIndexImage - 1 + images.length) % images.length
    );
  };

  return (
    <div className="imgDiv">
      <img src={images[currentIndexImage]} alt="Photo descriptive" />

      {images.length > 1 && (
        <>
          <div className="left-right-div">
            <span className="left" onClick={prevImage}>
              <i className="fa-solid fa-chevron-left"></i>
            </span>
            <span className="right" onClick={nextImage}>
              <i className="fa-solid fa-chevron-right"></i>
            </span>
          </div>
          <p>
            {currentIndexImage + 1}/{images.length}
          </p>
        </>
      )}
    </div>
  );
};
