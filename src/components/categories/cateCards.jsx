import React from "react";
import './cate.css'
import '../../utils/utils.css'
import { Link } from "react-router-dom";
const CategoryCard=({text,setCategory})=>{

 return (
      <div className="flexing-center card" onClick={()=>setCategory(text)}>
        <Link to="/products" className="item">
        {text}
     </Link>
     </div>
 )

}
export default CategoryCard;