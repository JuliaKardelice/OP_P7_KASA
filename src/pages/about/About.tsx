import React from "react";
import './About.scss';
import aboutContent from '../../data/string.json';
import aboutBanner from '../../assets/aboutBanner.jpeg';
import { Collapse } from "../../components/collapse/Collapse";

/****PENSER À L'EXPORT AVANT DE DECLARER LE COMPOSANT*** */
export const About:React.FC = () =>{



/****LE COMPOSANT PARENT ABOUT INTERAGIT AVEC LE COMPOSANT ENFANT COLLAPSE EN UTILISANT LES PROPS TITLE ET CONTENTS QUE L'ON VA RECUPERER DANS LE JSON ** */
return (
<div className="About">
<div className="aboutBanner">
<img src={aboutBanner} alt="photo d'une montagne" />
</div>
<div className="content">
{Object.entries(aboutContent).map(([title,content])=>(
<Collapse title={title} key={title} content={content} />
)) 

} 
</div>

</div>


)

}