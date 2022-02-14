import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';


const baseDeDatosCar = 
  [{
    "id": 1,
    "marca": "Nike",
    "modelo": "Remera",
    "talle": "s"
    
  }, {
    "id": 2,
    "marca": "Nike",
    "modelo": "Pantalon",
    "talle": "M"
  }, {
    "id": 3,
    "marca": "Adidas",
    "modelo": "Buzo",
    "talle": "M"
    
  }, {
    "id": 4,
    "marca": "Adidas",
    "modelo": "Short",
    "talle": "L"
  }, {
    "id": 5,
    "marca": "New Balance",
    "modelo": "Campera",
    "talle": "Xl"
  }]

function obtenerBaseDatos (){
  let error = false
  return new Promise ((resolve, reject)=>{
    setTimeout (
      ()=> {resolve(baseDeDatosCar)},
      500);
      if (error) {
        reject ( new error ('error en la promise'))
      } 
    }
  )
}




export default function ItemListConteiner(props) {

const [item, setItem] = useState ([]);

useEffect (()=>{
  let guardarDatos = obtenerBaseDatos ();
  guardarDatos.then ((itemPromise) => {
    setItem (itemPromise);
  }).catch ( (error)=> {
    console.error(error);
  }).finally (()=>{
    console.log("promesa terminada");
  });
},[])

  return ( 
    <>
    <h1>{props.greeting}</h1>
    <section>
    

    </section>
    </>
  );
  
}


