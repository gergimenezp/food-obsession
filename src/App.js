import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar'
import ItemDetailContainer from './components/products/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/products/ItemListContainer/ItemListContainer'
import Cart from './components/Cart/Cart';
import CustomContext from './context/CustomContext';
import Form from './components/Form/Form';

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
          <Route exact path = "/form" element = {<Form/>}/>
        </Routes>
      </BrowserRouter>
    </CustomContext>
  );
}

export default App;
