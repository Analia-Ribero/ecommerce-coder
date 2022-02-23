import React, {useState} from 'react';

export default function ItemCount({stock,initial,onAdd}) {
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
    

  return (
 <div>
     <button onClick={aumentar}>Agregar</button>
     <h4>{count}</h4>
     <button onClick={disminuir}>Eliminar</button>
     <button onClick={()=>onAdd(count)}>Agregar al Carrito</button>
 </div>);
}
