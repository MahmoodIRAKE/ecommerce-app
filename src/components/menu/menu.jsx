import React from "react";
import '../../utils/utils.css'
import './menu.css'
import { Link } from "react-router-dom";
const Menu = () => {

    return (
        <div className="flexing-center col menu">
            <Link to="/" className="item">
                Home
            </Link>
            <Link to="/categories" className="item">
                Category
            </Link>
        </div>
    );

}
export default Menu;