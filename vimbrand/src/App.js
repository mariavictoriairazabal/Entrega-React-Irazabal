import './App.css';
import './components/navBar/NavBar.css';
import './components/ItemCount/ItemCount.css';
import './components/item/item.css';
import './components/itemList/itemList.css';
import './components/itemDetail/itemDetail.css';
import './components/itemsListContainer/ItemListContainer.css';
import './components/checkout/Checkout.css';
import './components/cart/Cart.css';
import NavBar from './components/navBar/NavBar';
import ItemListContainer from './components/itemsListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Cart from './components/cart/Cart';
import Checkout from './components/checkout/Checkout';

function App() {

  // const cartValue = useContext (CartProvider);
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer greeting={'¡Bienvenido a Athina pastelería!'} />}>
          </Route>
          <Route path="curso-react" element={<ItemListContainer greeting={'¡Bienvenido a Athina pastelería!'} />}>
          </Route>
          
          <Route path="/category/:id" element={<ItemListContainer greeting={'¡Bienvenido a Athina pastelería!'} />}>
          </Route>
          <Route path="/item/:id" element={<ItemDetailContainer></ItemDetailContainer>}>
          </Route>
          <Route path="/cart" element={<Cart></Cart>}>
          </Route>
          <Route path="/checkout" element={<Checkout></Checkout>}>
          </Route>

        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;