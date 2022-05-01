import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import  useCartContext  from '../../context/CartContext';

function ItemDetail ({item}) {

  
  const { addItem,isInCart } = useCartContext();

function onAdd(count){
addItem (item, count);
}

if (item){

    return (
      <div>
        <div class="card" style={{width: "18rem"}}>
          
          <img width="200" alt="foto producto" src= {item.Img}/>
          <h4>{item.Marca}</h4>
          <h4>{item.Modelo}</h4>
          <h4>{item.Precio} </h4>
          </div>
        { isInCart(item.id)? (
          <Link to="/cart"><button>Finalizar Compra</button></Link>
          ) : (
          <ItemCount
          stock= {10}
          initial={1}
          onAdd={onAdd}
          />
          )}
    </div>
    )
  }
  else{
    return <h2>Cargando</h2>
  }
} 


  export default ItemDetail