import React from 'react'
import Item from './Item';


function ItemList  ({item})  {
  console.log (item);
    return (
      <div>
          {item.map (itemIterado=>{
           return <div>
           <Item item= {itemIterado}/>
           <hr/> <hr />
           </div>
              })
          }
      </div>
    )
  }

  export default ItemList




