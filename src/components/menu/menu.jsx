import React from "react";
import '../../utils/utils.css'
import './menu.css'
import { Link } from "react-router-dom";
import CartLogo from "../cart/cartlogo";
const Menu = ({cart}) => {

    return (
        <div className="flexing-center col menu">
            <Link to="/" className="item">
                Home
            </Link>
            <Link to="/categories" className="item">
                Category
            </Link>
            <Link to="/cart" className="item">
                <CartLogo text={cart.length}/>
            </Link>
        </div>
    );

}
export default Menu;