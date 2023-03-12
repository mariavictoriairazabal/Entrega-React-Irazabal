import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {

    const { nombre, precio, stock, detail, img, id } = item;
    const navigate = useNavigate();
    const clickHandler = () => {
        navigate(`/item/${id}`);
    }
    return (
        <div className='item'>
            <div onClick={clickHandler}>
                <h1 className='item-title'>{nombre}</h1>
                {precio && <h3>${precio}</h3>}
                {img && <img className='item-img' src={img}></img>}
            </div>
            <div className="itemcount-div">
                <Button variant="outlined" onClick={clickHandler}> Ver mas</Button>
            </div>

        </div>
    )
}

export default Item;