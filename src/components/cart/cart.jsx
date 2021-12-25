import React from "react";
import '../../utils/utils.css'
import './cart.css'

const CartProduct=({text,img})=>{

    return(
        <div className="flexing-center card2" >
              <img src={img} alt="sold" width='100%' height='50%'  />
              <h1>{text}</h1>       
        </div>
    );
}
export default CartProduct;