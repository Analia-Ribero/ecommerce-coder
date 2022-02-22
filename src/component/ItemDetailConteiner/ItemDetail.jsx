import React from 'react'
import ItemCount from '../ItemCount/ItemCount'



function ItemDetail ({item}) {

if (item){

    return (
      <div>
          <h4>{item.id}</h4>
          <h4>{item.marca}</h4>
          <h4>{item.modelo}</h4>
          <h4>{item.precio} </h4>
          <ItemCount
          stock= {5}
          initial={1}/>
    </div>
    )
  }
  else{
    return <h2>Cargando</h2>
  }
} 


  export default ItemDetail