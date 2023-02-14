import React from "react";
import {Link} from "react-router-dom"

const Categories = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to='/categories/dresses' className="nav-link">DRESSES</Link>
        </li>
        <li className="nav-item">
            <Link to='/categories/heels' className="nav-link">HEELS</Link>
        </li>
        <li className="nav-item">
            <Link to='/categories/accesories' className="nav-link">ACCESORIES</Link>
        </li>
        <li className="nav-item">
            <Link to='/categories/bags' className="nav-link">BAGS</Link>
        </li>
        </ul>
    );
}

export default Categories;