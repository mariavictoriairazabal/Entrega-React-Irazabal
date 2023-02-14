import React from 'react';
import { useState,useEffect } from 'react';
import {consultarBDD} from '../../assets/funciones'
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [producto, setproducto] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        consultarBDD('../json/products.json').then(productos =>{
            console.log(id)
            const prod = productos.find(product => product.id ===parseInt(id))
            setproducto(prod)
        })
    }, []);
    return (
        <div className='card mb-3 container itemDetail'>
            <ItemDetail item={producto}/>
        </div>
    );
}

export default ItemDetailContainer ;
