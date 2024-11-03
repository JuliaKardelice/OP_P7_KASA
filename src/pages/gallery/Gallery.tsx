import React from "react";
import "./Gallery.scss";
import logementContent from "../../data/logements.json";
import mainBanner from "../../assets/homeBanner.png"
import { Link } from "react-router-dom";

export interface Logement {
    id: string
    title: string
    cover: string
    pictures: string[]
    description: string
    host: {
        name: string
        picture: string
    }
    rating: string
    location: string
    equipments: string[]
    tags: string[]

}


export const Gallery: React.FC = () => {


    return (

        <div className="gallery">
            <div className="mainBanner">
                <img src={mainBanner} alt="bannière du site" />
                <h1> Chez vous, partout et ailleurs</h1>
            </div>
            <div className="cards-container">
                {logementContent.map((cardData: Logement) => (
                    <Link key={cardData.id} to={{ pathname: `card/${cardData.id}` }}>
                        <div className="card">
                            <img src={cardData.cover} alt="image du logement" />
                            <h2>{cardData.title}</h2>
                        </div>
                    </Link>
                ))

                }
            </div>
        </div>

    )
}