import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


const baseDeDatos = 
  [{
    "id": 1,
    "marca": "Samsung",
    "modelo": "A22",
    "precio": "$32000",
    "descripcion":"Pantalla. 720 x 1080 pixeles, camara frontal 13 megapixeles, memoria 4GB"
  }, {
    "id": 2,
    "marca": "Samsung",
    "modelo": "A52",
    "precio": "$63000",
    "descripcion":"Pantalla. 1080 x 2400 pixeles, camara frontal 32 megapixeles, memoria 6GB"
  }, {
    "id": 3,
    "marca": "Samsung",
    "modelo": "A72",
    "precio": "$82000",
    "descripcion":"Pantalla 6.7 pulgadas, camara frontal 32 megapixeles, memoria 6GB"
  }, {
    "id": 4,
    "marca": "Samsung",
    "modelo": "A02",
    "precio": "$23000",
    "descripcion":"Pantalla 6.5 pulgadas, camara frontal 5 megapixeles, memoria 2GB"
  }, {
    "id": 5,
    "marca": "Samsung",
    "modelo": "A12",
    "precio": "33000",
    "descripcion":"Pantalla. 720 x 1080 pixeles, camara frontal 8 megapixeles, memoria 3GB"
  }]

function getItem (idItem){
  let error = false
  return new Promise ((resolve, reject)=>{
    setTimeout (
      ()=> {
        let item = baseDeDatos.find ((item)=>{
          return item.id === idItem
        });
        resolve (item);
        
      },
      2000);
      if (error) {
        reject ( new error ('error en la promise'))
      } 
    }
  )
}




export default function ItemDetailConteiner(props) {

const [item, setItem] = useState ([]);
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
   
    <h1>{props.greeting}</h1>
    <section>
    <ItemDetail item= {item}/>
    
    </section>
    
    
    </>
  );
  
}
