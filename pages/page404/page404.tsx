import React from "react";
import "./page404.scss";
import { useParams } from 'react-router-dom';



export const page404:React.FC = ()=> {

return (

<div className="page404">

<p className="txt404" >Oups ! la page que vous demandez n'existe pas/</p>

<p className="return">Retourner sur la page d'accueil</p> 
</div>


)




}