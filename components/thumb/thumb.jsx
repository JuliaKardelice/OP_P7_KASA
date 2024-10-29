import React from "react";
import "./Tag.scss"

export interface ThumbProps {

    thumbTitle:string;
    thumbID: string;
    thumbImg:string;

    }

export const Thumb:React.FC<ThumbProps> = ({thumbTitle,thumbImg,thumbID}) => {

return(
<>
<div className="tag" id={thumbID}>
<img src={thumbImg} alt="" />
<p> {thumbTitle}</p>
</div>

</>

)
};