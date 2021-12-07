import React from "react";
import carro from '../../assets/img/cart.png'
import './NavBar.css'

function CartWidget(){
    return(
        <img src={carro} alt="Shopping Cart" className="shoppingCart"/>
    )
}

export default CartWidget