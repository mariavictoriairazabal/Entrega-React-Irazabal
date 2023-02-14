import React from "react";
import {Link} from "react-router-dom";


const Item = ({product}) => {
    return (
        <>
<div className="card cardProduct">
    <img src={`../img/${product.img}`} className="card-img-top" alt="..." />
    <div className="card-body">
    <h5 className="card-title">{product.nombre} {product.modelo}</h5>
    <p className="card-text">{product.marca}</p>
    <p className="card-text">${new Intl.NumberFormat('de-DE').format(product.precio)}</p>
    <button className="btn btn-primary"><Link className='nav-link' to={`/product/${product.id}`}>Ver producto</Link></button>
    </div>
</div>

        </>
    );
}

export default Item;