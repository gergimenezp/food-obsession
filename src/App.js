import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar'
import ItemDetailContainer from './components/products/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/products/ItemListContainer/ItemListContainer'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path = "/" element = {<ItemListContainer/>}/>
        <Route exact path = "/category/:id" element = {<ItemListContainer/>}/>
        <Route exact path = "/item/:id" element = {<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
