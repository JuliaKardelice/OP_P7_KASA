import React from "react";
import './FicheLogement.scss';
import LogementContent from "../../data/logements.json"
import { Tag } from "../../components/tag/Tag";
import { Collapse } from "../../components/collapse/Collapse";

export interface LogementsProps {
    coverSrc : string;
    title:string;
    location:string;
    rating:string;

    }
export interface Host {
  name: string;
  picture: string;
}

export const FicheLogement:React.FC = ()=> {

return (

<div className="ficheLogement">
<section className="carroussel">
<img className="cover" src="" alt="cover de l'appart" />
</section>
<section className="description">

<h1> {logementTitle} </h1>
<h2>location</h2>
</section>

<section className="collapse">

</section>

</div>


)

    
}
