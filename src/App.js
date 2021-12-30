import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar'
import ItemDetailContainer from './components/products/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/products/ItemListContainer/ItemListContainer'
import CartContext from './context/CartContext'
import Cart from './components/Cart/Cart';
import CustomContext from './context/CustomContext';

function App() {

  return (
    <CustomContext>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path = "/" element = {<ItemListContainer/>}/>
          <Route exact path = "/category/:id" element = {<ItemListContainer/>}/>
          <Route exact path = "/item/:id" element = {<ItemDetailContainer />}/>
          <Route exact path = "/cart" element = {<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </CustomContext>
  );
}

export default App;
