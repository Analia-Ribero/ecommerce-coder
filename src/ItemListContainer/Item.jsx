import React from 'react'
import { Link } from "react-router-dom"

function Item ({item}) {
    return (
      <div>
          <h4>{item.id}</h4>
          <h4> {item.marca} </h4>
          <h4> {item.modelo} </h4>
          <h4> {item.precio} </h4>
          <h4>{item.descripcion}</h4>
          <button className='btn btn-dark'>
          <Link to= {`/item/${item.id}`}>Detalles del Producto</Link>
          </button>
      </div>
    )
  }
  
  export default Item


