import React, {useState} from 'react'
import useCartContext from "../../context/CartContext";
import { generateOrder } from "../../service/firebase";


function CartForm() {
    const {itemsInCart, getTotalPrice} = useCartContext();
   
    const [buyer, setBuyer]= useState ({
        name:'',
        phone: '',
        email:'' 
       });
function handleImput(event){
const value = event.target.value;
const nameInp = event.target.name
setBuyer({
    ...buyer,
    [nameInp]: value
})

}



function handleSubmit(event){
    event.preventDefault();
    const totalPrice = getTotalPrice();
    const orderData = {
        buyer, items : [...itemsInCart], totalPrice
    }
    generateOrder(orderData);
}

return (
    <div class="container mt-6 ">
        <h4 className="btn-group text-center py-4" >Ingresar los datos para finalizar la compra</h4>
        <form className="py-6">
            <div>
                <label for="buyer-name">Apellido y Nombre</label>
                <input onChange={handleImput} value={buyer.name} type="text" name="name"></input>
            </div>
            <hr/>
            <div>
                <label for="phone">Telefono</label>
                <input onChange={handleImput} value={buyer.phone} type="text" name="phone"></input>
            </div>
            <hr/>
            <div>
                <label for="email">email</label>
                <input onChange={handleImput} value={buyer.email} type="text" name="email"></input>
            </div>
            <hr/>
            <div className= "btn-group text-center mt-5">
            <button onClick={handleSubmit}  className= "btn btn-success">Finalizar</button>    
            
            </div>
        </form>
    </div>
)
}
export default CartForm