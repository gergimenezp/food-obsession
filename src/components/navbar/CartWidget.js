import React, {useContext, useEffect} from "react";
import carro from '../../assets/img/cart.png';
import CartContext from '../../context/CartContext';
import './NavBar.css'

function CartWidget(){

    const ValueContext = useContext(CartContext);

    const shoppingBasket = ValueContext.checkItems();

    const renderItems = ValueContext.itemsAdded();

    useEffect(()=>{
        ValueContext.checkItems();
    })

    return(
        <>
            {shoppingBasket.length !== 0 ? (
                <div className="shoppingCartContainer">
                    <img src={carro} alt="Shopping Cart" className="shoppingCart"/>
                    <div className="itemsInCart">{renderItems}</div>
                </div>
            ) : (
                <div></div>
            )}
        </>
    )
}

export default CartWidget