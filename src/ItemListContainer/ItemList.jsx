import React from 'react'
import Item from './Item';


function ItemList  ({item})  {
  console.log (item);
    return (
      <div>
          {item.map (itemIterado=>{
           return (
           <Item 
           key={itemIterado.id}
           item= {itemIterado}/>
           )
          
              })
          }
      </div>
    )
  }

  export default ItemList




