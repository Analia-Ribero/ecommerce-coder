import React from 'react'
import ItemCount from './component/ItemCount/ItemCount'

function ItemDetail ({item}) {

if (item){

    return (
      <div>
          <h4>{item.id}</h4>
          <h4> {item.marca} </h4>
          <h4> {item.modelo} </h4>
          <h4> {item.precio} </h4>
          <ItemCount
    initial={1}
    stock={10}/>
      </div>
    )
  }
} 


  export default ItemDetail