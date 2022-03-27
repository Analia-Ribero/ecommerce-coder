import React from 'react'
import { Link } from "react-router-dom"

function Item ({item}) {
    return (
      <>
      <div className="btn-group text-center py-4" >
          <h4>{item.id}</h4>
          <img width="250" alt="imagen del producto" src={item.Img}/>
          <h4> {item.Marca} </h4>
          <h4> {item.Modelo} </h4>
          <h4> {item.Precio} </h4>
          <h4>{item.Descripcion}</h4>
          <button className="btn btn-outline-blue">
          <Link to= {`/item/${item.id}`}>Detalles del Producto</Link>
          </button>
          
      </div>
      <hr />
      </>
    )
  }
  
  export default Item


