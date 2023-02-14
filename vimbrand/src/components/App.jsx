import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./Navbar/Navbar";
import CartWidget from "./CartWidget/CartWidget";
import ItemListContainer from "./ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer";


const App = () => {
    return (
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/product/:id' element={<ItemDetailContainer/>}/>
        <Route path='/categories/:categories' element={<ItemListContainer/>}/>
      </Routes>
      </BrowserRouter>
        </>
    )
}
export default App;
