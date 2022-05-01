import React from 'react'
import { Link } from "react-router-dom"

function Item ({item}) {
    return (
      <>
      <div className="mx-auto d-block">
      <div className="row">
        <div className="col-md-4">
      <div className="card-body" >
      <img className="container" width="250" alt="imagen del producto" src={item.Img}/>  
          <h6 class="card-text"> {item.Marca} </h6>
          <h6 class="card-text"> {item.Modelo} </h6>
          <h6 class="card-text"> {item.Precio} </h6>
          <h6 class="card-text">{item.Descripcion}</h6>
          <button>
          <Link to= {`/item/${item.id}`}>Detalles del Producto</Link>
          </button>
          </div>
          </div>
      </div>
      </div>
      <hr/>
      </>
    )
  }
  
  export default Item


