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
     <button onClick={aumentar} className="btn btn-success">+</button>
     <h4>{count}</h4>
     <button onClick={disminuir} className="btn btn-success">-</button>
     <button className="btn btn-outline-success" onClick={()=>onAdd(count)}>Agregar al Carrito</button>
 </div>);
}
