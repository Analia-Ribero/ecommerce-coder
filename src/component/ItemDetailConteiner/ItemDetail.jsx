import React from 'react'


function ItemDetail ({item}) {

if (item){
    
    return (
      <div>
          <h4>{item.id}</h4>
          <h4> {item.marca} </h4>
          <h4> {item.modelo} </h4>
          <h4> {item.talle} </h4>
      </div>
    )
  }
} 


  export default ItemDetail