import React from "react";
import './container.css'
import Menu from'../../components/menu/menu'
import Home from "../home";
import Categories from "../categories";
import Products from "../productPage";
import Cart from "../cartPage";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
const Container = () => {
  const [cart,setCart]=React.useState([]);
  const [chosenCategory,setCategory]=React.useState('sda');
  console.log(cart.length)
    return (
        <div className="container flexing-center">
            <BrowserRouter> 
           <div className='flexing-center page-container'>
             <Menu cart={cart}/>
            <Routes>
             <Route path="/" exact element={<Home setCategory={setCategory}/>}/>
             <Route path="/categories" exact element={<Categories setCategory={setCategory}/>}/>
             <Route path="/products" exact element={<Products cart={cart} chosenCategory={chosenCategory} setCart={setCart}/>}/>
             <Route path="/cart" exact element={<Cart cart={cart} setCart={setCart}/>}/>
           </Routes> 
           </div>
          </BrowserRouter>
        </div>
    );

}
export default Container;