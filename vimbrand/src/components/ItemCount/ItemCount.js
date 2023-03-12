import React, { useState } from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [value, setValue] = useState(initial);
    const sumarUno = (stock) => {
        if (stock > value) {
            setValue(prevState => prevState + 1);
        }

    }
    const restarUno = () => {
        if (value > 1) {
            setValue(prevState => prevState - 1);

        }
    }

    return (
        <>
            <div className="itemcount-div">
                <Fab size="small" color="secondary" aria-label="add" onClick={() => restarUno()}>
                    <RemoveIcon />
                </Fab>

                <label className="itemcount-label">{value}</label>

                <Fab size="small" color="primary" aria-label="add" onClick={() => sumarUno(stock)}>
                    <AddIcon />
                </Fab>

            </div>
            <div className="itemcount-div">
                <Button variant="outlined" onClick={()=> onAdd(value)}> Agregar al carrito </Button>
            </div>

        </>
    )
}

export default ItemCount;
