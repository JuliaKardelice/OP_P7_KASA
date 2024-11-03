import React from "react";
import "./Tag.scss"

export interface TagProps {
    text:string;

    }
export const Tag:React.FC<TagProps> = ({text}) => {

return(
<>
<div className="tag">
<p> {text} </p>
</div>

</>)
};