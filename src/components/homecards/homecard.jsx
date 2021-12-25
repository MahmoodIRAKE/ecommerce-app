import React from "react";
import './card.css'
import '../../utils/utils.css'

const HomeCard=({text,callback,image})=>{
    console.log(image)
 return (
     <div className="flexing-center home-card" style={{backgroundImage:`url(${image})`}}>
        {text}
     </div>
 )
}
export default HomeCard