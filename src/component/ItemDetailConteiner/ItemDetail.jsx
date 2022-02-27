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
          <h4>{item.id}</h4>
          <h4>{item.marca}</h4>
          <h4>{item.modelo}</h4>
          <h4>{item.precio} </h4>

        { isInCart(item.id)? (
          <Link to="/cart"><button>Finalizar Compra</button></Link>
          ) : (
          <ItemCount
          stock= {5}
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