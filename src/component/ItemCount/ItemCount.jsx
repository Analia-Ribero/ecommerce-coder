import React, {useState} from 'react';

export default function ItemCount({stock,initial}) {
    let [count,setCount]= useState (initial)

    function aumentar (){
        if(count<stock){
        setCount (count+1)}
    }
    function disminuir (){
    if(count >1){
        setCount (count-1)
    }
    }
    function onAdd (){
        alert ("Se agregaron"+count+ "productos al carrito");
    }

  return (
 <div>
     <button onClick={aumentar}>Agregar</button>
     <h4>{count}</h4>
     <button onClick={disminuir}>Eliminar</button>
     <button onClick={onAdd}>finalizar compra</button>
 </div>);
}
