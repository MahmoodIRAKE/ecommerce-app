import React from "react";
import  CartProduct from "../components/cart/cart";
const Cart=({cart,setCart})=>{
    const showProducts=()=>{
        return cart.map((item)=>{
          return <CartProduct text={item.name} img={item.img} key={item.id} item={item} />
            
        })
    }

    return (
        <div className="flexing-center page col">
          {showProducts()}
        <button onClick={()=>setCart([])} >Pay Now</button> 
        </div>
    )
}
export default Cart;