import React from "react";
import useCartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartForm from "./CartForm";

function CartView() {
    const {itemsInCart, removeItem, clearCart} = useCartContext()
   

    if(itemsInCart.length===0) {
    return(
            <div className="container">
                <h3>Su Carrito esta Vacio</h3>
                <p>Te invitamos a continuar tu compra</p>
                <Link to="/">Ir</Link>
            </div>
        )
    }

    else {
        return(
            <div className= "container">
                <h3>Carrito de Compras</h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Marca</th>
                        <th>Modelo</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            itemsInCart.map( item =>(
                                <tr key={item.id}>
                                    <td>{item.Marca}</td>
                                    <td>{item.Modelo}</td>
                                    <td>{item.Precio}</td>
                                    <td>{item.quantity}</td>
                                    <td> {(item.Precio * item.quantity)}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>removeItem(item.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <button onClick={()=>{alert('compra exitosa')}} className="btn btn-success mx-2">Pagar</button>
                <button onClick={clearCart} className="btn btn-danger">Vaciar el carrito</button>
             <CartForm/>
            </div>
        )
    }
}
export default CartView