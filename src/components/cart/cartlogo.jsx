import React from "react";
import '../../utils/utils.css'
import './cart.css'

const CartLogo=({text})=>{

    return(
        <div className="flexing-center logo">
               <h1>{text}</h1>       
        </div>
    );
}
export default CartLogo;