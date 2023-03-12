import React from 'react'
import Item from '../item/Item';

const ItemList = ({ items }) => {
    return (
        <div className='item-list'>
            {items.map(producto => <Item item={producto} key={producto.id} />)}
        </div>
    )

}

export default ItemList;