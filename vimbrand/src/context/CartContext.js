import React, { createContext, useContext } from 'react'
import { useState } from 'react';

export const CartContext = createContext();


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    // ejemplo para borrar

    const removeItem = (id) => {
        setCart(cart.filter((producto) => {
            return producto.id !== id;
        }));
    }
    // addItem 
    const addItem = (item, quantity) => {
        item.quantity = quantity; // setea la cantidad indicada al item
        const exist = isInCart(item.id);//valida si ya existe en el carrito
        if (exist) {//si existe ...
            const carritoActualizado = cart.map((prod) => { //recorre el cart 
                if (prod.id === item.id) { //si el id es el mismo 
                    return { ...prod, quantity: prod.quantity + item.quantity } //actualiza la cantidad
                }
                 else {
                    return { ...prod} //sino setea un item nuevo
                }
            })
            setCart(carritoActualizado)
        }
        else {

            setCart([...cart, item]);
        }
    }

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const getTotalAmountAndQuantity = () => {
        let contador = 0;
        let cantidad = 0;
        cart.forEach(element => {
            contador = contador + (element.precio * element.quantity);
            cantidad = cantidad + element.quantity;
        });
        return {"cantidad": cantidad, "total": contador};
    }

    return (
        <CartContext.Provider value={{ cart, removeItem, addItem, clear, isInCart, getTotalAmountAndQuantity }} >
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)