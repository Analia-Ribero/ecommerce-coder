import React, {useState} from 'react'
import useCartContext from "../../context/CartContext";
import generateOrder from "../../services/firebase"


function CartForm() {
    const {itemsInCart, getTotalPrice} = useCartContext();
    const {buyer, setBuyer}= useState ({
        name:'',
        phone: '',
        email:'' 
       });
function handleImput(event){
const target = event.target;
const value = target.value;
const nameInp = target.name
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
    generateOrder(data);
}

return (
    <div class="container mt-6 ">
        <h3>Ingresar los datos para finalizar la compra</h3>
        <form className="py-6">
            <div>
                <label for="buyer-name">Apellido y Nombre</label>
                <input onChange={handleImput} value={buyer.name} type="text" name="buyername"></input>
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
            <button className= "btn btn-success">Finalizar</button>    
            <button className= "btn btn-danger"> Cancelar </button>
            </div>
        </form>
    </div>
)
}
export default CartForm