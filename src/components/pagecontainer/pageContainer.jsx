import React from "react";
import './container.css'
import Menu from "../menu/menu";
import Home from "../../pages/home";
import Categories from "../../pages/categories";
import {BrowserRouter,Route,Routes} from 'react-router-dom'
const Container = () => {

    return (
        <div className="container flexing-center">
            <BrowserRouter> 
           <div className='flexing-center page-container'>
             <Menu/>
            <Routes>
             <Route path="/" exact element={<Home/>}/>
             <Route path="/categories" exact element={<Categories/>}/>
           </Routes> 
           </div>
          </BrowserRouter>
        </div>
    );

}
export default Container;