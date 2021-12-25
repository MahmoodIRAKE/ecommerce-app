
import React from "react";
import {default as products} from '../api/products'
import CardProduct from "../components/productcard/cardProduct";
const Products=({cart,chosenCategory,setCart})=>{
    const [temp,setTemp]=React.useState([]);
    const showProducts=()=>{
        return products.map((item)=>{
            if(item.category.includes(chosenCategory.toLowerCase())){
            return <CardProduct text={item.name} img={item.img} key={item.id} item={item} callback={addToCart}/>
            }
        })
    }
    const addToCart=(item)=>{
        temp.concat(cart)
        temp.push(item);
        setCart(temp);
    }

   
    return (
        <div className="flexing-center page">
               {showProducts()}
        </div>
    )
}
export default Products;