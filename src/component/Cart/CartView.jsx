import React from "react";
import useCartContext from "../../context/CartContext"
import { Link } from "react-router-dom"

function CartView() {
    const {itemsInCart, removeItemInCart, clearCart} = useCartContext();

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
                                    <td>{item.modelo}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>${(item.quantity*item.price).toFixed(2)}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=> removeItemInCart(item.id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <button onClick={()=>{alert('compra exitosa')}} className="btn btn-success mx-2">Pagar</button>
                <button onClick={clearCart} className="btn btn-danger">Vaciar el carrito</button>
            </div>
        )
    }
}

export default CartView