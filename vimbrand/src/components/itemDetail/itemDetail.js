import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useCart } from '../../context/CartContext';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



const ItemDetail = ({ item }) => {

    const { nombre, precio, stock, detail, img, id } = item;
    const [showCount, setShowCount] = useState(true);
    const { addItem } = useCart();

    const MySwal = withReactContent(Swal)

    const onAdd = (value) => {
        // alert(value);
        MySwal.fire({
            title: "Agregaste " + value + " producto/s al carrito" ,
        })
        setShowCount(false);
        addItem(item, value);
    }

    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(`/item/${id}`);
    }

    const redirectToCart = () => {
        navigate('/cart');
    }
    return (
        <div className='container-item-detail'>
            <div onClick={clickHandler}>
                <h1 className='item-title'>{nombre}</h1>
                {precio && <h3>${precio}</h3>}
                <h3 className='item-detail'>{detail}</h3>
                {img && <img className='item-img' src={img}></img>}
            </div>
            {showCount && <ItemCount initial={1} stock={stock} onAdd={onAdd} />}
            {!showCount && <div className="itemcount-div">
                <Button variant="outlined" onClick={redirectToCart}> Terminar mi compra</Button>
            </div>}
        </div>
    )
}

export default ItemDetail;