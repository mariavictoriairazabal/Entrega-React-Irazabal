import React from 'react'
import { useCart } from '../../context/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Cart = () => {
    const { cart, getTotalAmountAndQuantity, removeItem } = useCart();
    const { cantidad, total } = getTotalAmountAndQuantity();

    const borrarItem = (id) => {
        console.log("entro a borrar item");
        removeItem(id);
    };

    return (
        <>
            {cart.length ? <>
                {cart.map(producto => (
                    <p className='carrito-datos' key={producto.id}>{producto.nombre} ${producto.precio} cantidad: {producto.quantity}
                        <DeleteIcon onClick={() => borrarItem(producto.id)}>Borrar</DeleteIcon>
                    </p>

                )
                )}
                <h2 className='datos-finales'>Cantidad de items: {cantidad}  Valor Total  ${total}</h2>

                <div className='finalizar-compra'>
                    <Link to='/checkout'><Button variant="outlined">Finalizar compra</Button></Link>
                </div>
            </>
                : <>

                    <h3>Aun no tienes productos en el carrito, vuelve al inicio y selecciona los productos que quieras agregar</h3>
                    <Link to='/'><Button variant="outlined">Inicio</Button></Link>

                </>
            }


        </>

    )
}

export default Cart;