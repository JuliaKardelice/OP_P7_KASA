import React from "react";
import "./Thumb.scss";


export interface ThumbProps {
    
    title: string;
    thumbId : string;
    coverSrc : string;
    
   /* coverSrc : string; */
    }

export const Thumb:React.FC<ThumbProps> = ({title, thumbId, coverSrc
}) => {

return(
<>
<a href="#">
<div className="thumb" >
<img src={coverSrc} alt="Couverture de l'appartement"/>
<h2 id={thumbId}>{title}</h2>
</div>
</a>
</>

)
};