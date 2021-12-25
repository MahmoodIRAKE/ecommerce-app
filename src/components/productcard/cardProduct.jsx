import React from "react";
import '../../utils/utils.css'
import './product.css'

const CardProduct=({text,img,callback,item})=>{

    return(
        <div className="flexing-center card1 col">
               <img src={img} alt="sold" width='100%' height='50%'  />
               <h1>{text}</h1> 
                <button onClick={()=>callback(item)} className="btn">Buy</button>  
        </div>
    );
}
export default CardProduct;