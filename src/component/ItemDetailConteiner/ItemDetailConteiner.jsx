import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getItem } from '../../service/firebase';


export default function ItemDetailConteiner(props) {

const [item, setItem] = useState (null);
const {id} = useParams();
useEffect (()=>{
  let guardarDatos = getItem (id);
  guardarDatos.then ((itemPromise) => {
    setItem (itemPromise);
  }).catch ( (error)=> {
    console.error(error);
  }).finally (()=>{
    console.log("promesa terminada");
  });
},[id])

  return ( 
    <>
   
    <h2>{props.greeting}</h2>
    <section>
    <ItemDetail item= {item}/>
    
    </section>
    
    
    </>
  );
  
}
