import './App.css';
import NavBar from './components/navbar/NavBar'
import ItemDetailContainer from './components/products/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/products/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div>
        <NavBar />
        {/*<ItemListContainer />*/}
        <ItemDetailContainer />
    </div>
  );
}

export default App;
