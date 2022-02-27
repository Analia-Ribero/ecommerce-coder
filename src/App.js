
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import ItemListConteiner from './ItemListContainer/ItemListConteiner'; 
import ItemDetailConteiner from './component/ItemDetailConteiner/ItemDetailConteiner';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartContextProvider } from './context/CartContext';
import CartView from '../Cart/CartView';


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
    <div>
    <NavBar/>
    <Routes>
      <Route 
      path="/"
      element={<ItemListConteiner greeting= "Bienvenidos a BlackMonkey" />}
      />
      <Route 
      path="/categoria/:categoriaId"
      element={<ItemListConteiner greeting= "Nuestros Productos"/>}
      />
      <Route 
      path="/item/:id"
       element={<ItemDetailConteiner/>}
       />
    <Route 
      path="/cart"
       element={<CartView/>}
       />
  
    </Routes>
    </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
