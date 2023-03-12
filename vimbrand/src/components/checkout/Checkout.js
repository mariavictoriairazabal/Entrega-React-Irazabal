import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { db } from "../../firebase";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Checkout = () => {

  const [comprador, setComprador] = useState({});
  const [orderId, setOrderId] = useState("");
  const { cart, getTotalAmountAndQuantity, clear } = useCart();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const { cantidad, total } = getTotalAmountAndQuantity();

  const MySwal = withReactContent(Swal)

  const datosComprador = (e) => {
    setComprador({
      ...comprador,
      [e.target.id]: e.target.value,
    });
  };

  const finalizarCompra = (e) => {
    if (Object.values(comprador).length !== 3) {
      e.preventDefault();
      MySwal.fire({
        title: "Tienes que completar todos los campos",
      })

    } else {
      e.preventDefault();
      setLoader(true);
      const ventas = collection(db, "orders");
      addDoc(ventas, {
        comprador,
        items: cart,
        total: total,
        date: serverTimestamp(),
      })
        .then((res) => {
          setOrderId(res.id);
          clear();
        })
        .catch((error) => console.log(error))
        .finally(() => setLoader(false));
    }
  };

  return (<>
    {!orderId && <div className='checkout-box' >
      <div className='checkout-container'>
        <h3 className='datos'>Ingrese sus datos</h3>

        <TextField className='input-text' id="name" label="Ingrese su nombre..." variant="outlined" onChange={datosComprador} />
        <br></br>
        <TextField className='input-text' id="number" label="Numero de telefono..." variant="outlined" onChange={datosComprador} />
        <br></br>
        <TextField className='input-text' id="email" label="Email..." variant="outlined" onChange={datosComprador} />
        <br></br>
        <Button variant="outlined" onClick={finalizarCompra}>Enviar</Button>
      </div>

    </div>}


    {orderId && <>
    <h3 className='datos'>Su pedido fue realizado con exito!</h3>
    <span className='datos'> Su numero de orden es {orderId}</span>
    </>}
  </>
  )
}

export default Checkout;