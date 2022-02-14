import React from 'react'



function ItemList  ({item})  {
  console.log (item);
    return (
      <div>
          {item.map (itemIterado=>{
               <item item = {itemIterado}/>
            
              })
          }
      </div>
    )
  }

  export default ItemList




