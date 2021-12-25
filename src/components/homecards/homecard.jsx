import React from "react";
import './card.css'
import '../../utils/utils.css'
import { Link } from "react-router-dom";
const HomeCard=({text,callback,image})=>{
    
 return (
    <div className="flexing-center home-card" style={{backgroundImage:`url(${image})`}} >
    <Link to="/products" className="item" onClick={()=>callback(text)}>
        {text}
     </Link>
     </div>
 )
}
export default HomeCard