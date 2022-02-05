
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './component/NavBar';
import ItemListConteiner from './ItemListContainer/ItemListConteiner';

function App() {
  return (
    <div>
    <NavBar/>
    <ItemListConteiner
    greeting= "Bienvenido a la tienda Black Monkey Style"
    />
    </div>
  );
}

export default App;
