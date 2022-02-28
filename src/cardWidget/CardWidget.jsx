import React from 'react';
import useCartContext from "../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'


export default function CardWidget() {
  const {countItemsInCart} = useCartContext()
  return (
    <div>
    <Link to="/cart">
    <FontAwesomeIcon icon={faShoppingCart}
    />
    </Link>
    {countItemsInCart() !==0 && <div><small>{countItemsInCart()}</small></div>}
    </div>
  );
};


