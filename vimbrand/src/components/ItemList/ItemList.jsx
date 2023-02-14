import React from 'react';
import Item from '../Item/Item';

const ItemList = ({productList}) => {
    console.log(productList)
    return (
        <>
            {productList.map(prod => <Item key={prod.id} product={prod}/>)}
        </>
    );
}

export default ItemList;