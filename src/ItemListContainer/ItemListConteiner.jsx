import React, { useEffect, useState } from 'react';
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';
import { getAllItems } from '../service/firebase';






export default function ItemListConteiner({props}) {

let {categoriaId} = useParams();

const [item, setItem] = useState ([]);


useEffect (()=>{
  
  let guardarDatos = categoriaId? getAllItems() : getAllItemsfrom(categoriaId);
 guardarDatos
 .then((itemsPromise)=>{
   setItem(itemsPromise);
 })
},
[categoriaId]
);
 return( 
    <>
    <h2>{props.greeting}</h2>
    <section>
    <ItemList item= {item}/>    

    </section>
    </>
  );
  
}


