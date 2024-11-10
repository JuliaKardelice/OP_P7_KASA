import React, { useEffect, useState } from "react";
import "./starsRating.scss";

export interface RatingProps {
  rate: number;
}
/// changer le type de rating de string à number

export const StarsRating: React.FC<RatingProps> = ({ rate }) => {
  const [fillStars, setTotalStars] = useState([]);
  // const pRef = useRef mettre le nombre de star selon la class basic ou filled... <|>  ou bien utiliser l'icone remplie et la modifier avec la key ou l'index ?//
  useEffect(() => {
    let fillStarsTemp = [];
    console.log(rate);

    for (let i = 0; i < 5; i++) {
      if (rate > i) {
        fillStarsTemp.push("active");
      } else {
        fillStarsTemp.push("inactive");
      }
    }
    setTotalStars(fillStarsTemp);
  }, []);
  /// Le tableau est vide parceque tu ne lances la fonction qu'une seule fois, si l'on veut relancer à un raffraichissement on met entre crocher la variable qui raffachira
  /// Utiliser les class css dynamiquement ? le nombre de Li est toujours égale à 5
  return (
    <div className="starsRating">
      {fillStars.map((star) => (
        <i
          className={`fa-solid fa-star ${star === "active" ? "full" : "basic"}`}
        ></i>
      ))}
      <div>{rate}</div>
    </div>
  );
};
