
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import ItemListConteiner from './ItemListContainer/ItemListConteiner'; 
import ItemCount from './component/ItemCount/ItemCount'


function App() {
  return (
    <div>
    <NavBar/>
    <ItemListConteiner
    greeting= "Bienvenido a la tienda Black Monkey Style"
    />
    <ItemCount
    initial={1}
    stock={10}/>
    </div>
  );
}

export default App;
