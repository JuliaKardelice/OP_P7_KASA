import React, { useState } from "react";
import "./Caroussel.scss";

export interface CarousselProps {
  pictures: string[];
}

export const Caroussel: React.FC<CarousselProps> = ({ pictures }) => {
  const [currentIndexImage, setCurrentIndexImage] = useState<number>(0); ///l'image actuelle a pour index 0 à l'état initial de la variable on type pour définir un nombre (et pas un string par exemple...)

  const nextImage = () => {
    setCurrentIndexImage((currentIndexImage + 1) % pictures.length);
  };
  const prevImage = () => {
    setCurrentIndexImage(
      (currentIndexImage - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="imgDiv">
      <img src={pictures[currentIndexImage]} alt="Photo descriptive" />

      {pictures.length > 1 && (
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
            {currentIndexImage + 1}/{pictures.length}
          </p>
        </>
      )}
    </div>
  );
};
