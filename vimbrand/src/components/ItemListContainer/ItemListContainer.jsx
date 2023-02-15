import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import {consultarBDD} from '../../assets/functions'
import { useState, useEffect } from 'react';
const ItemListContainer = () => {
    const [productos, setProducts] = useState([]);
    const {categories} = useParams();
    useEffect(() => {
        if(categories){
            consultarBDD('../json/products.json').then(products => {
                const productList = products.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === categories)
                const cardProduct = ItemList({productList})
                setProducts(cardProduct)
        })
        } else{
            consultarBDD('./json/products.json').then(products => {
                const productList = products.filter(prod => prod.stock > 0)
                const cardProduct = ItemList({productList})
                setProducts(cardProduct)
        })
        }
    },[categories]);
    <div className="row cardProducts">{productos}</div>
    ;
}

export default ItemListContainer; 