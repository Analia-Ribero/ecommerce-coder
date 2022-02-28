import React, { useState,createContext,useContext } from 'react'



const CartContext = createContext ();

const useCartContext = function (){
 return useContext (CartContext);
}

export function CartContextProvider({ children }){

  const [itemsInCart,setItemInCart]= useState ([]);
  function addItem(item,quantity){
    setItemInCart([ ...itemsInCart,{ ...item, quantity}]);
  }  
  
  function isInCart (id) {
    let found = itemsInCart.some( (item) =>{
return item.id === id;
    })
    return found;
  }
  
function removeItem(id){
  if (isInCart(id)) {
    let filterCart = itemsInCart.filter((item)=>{
      return item.id !== id;
    })
    setItemInCart (filterCart)
  }
}
function clearCart(){
  setItemInCart([])
}
function countItemsInCart(){
  let total = 0;
  itemsInCart.forEach ((item)=>{
    total += item.quantity;
  }) 
  return total
}

  return( 
<CartContext.Provider value={{ removeItem, addItem, isInCart,itemsInCart, clearCart, countItemsInCart}}>
{ children }
</CartContext.Provider>
    )
}


export default useCartContext;
