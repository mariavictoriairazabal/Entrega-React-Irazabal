import React from "react";
import Navbar from "./Navbar/Navbar";
import CartWidget from "./CartWidget/CartWidget";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

const App = () => {
    return (
        <>
        <Navbar/>
        <ItemListContainer greeting={"Bienvenidos a VIM"}/>
        </>
    )
}
export default App;
