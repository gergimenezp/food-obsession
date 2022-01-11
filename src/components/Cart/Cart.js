import React, {useContext, useState, useEffect} from "react";
import CartContext from '../../context/CartContext';
import { Link } from "react-router-dom";
import './Cart.css';

function Cart(){

    const ValueContext = useContext(CartContext);

    const [shoppingBasket, setShoppingBasket] = useState(ValueContext.checkItems());

    let totalMount = shoppingBasket.reduce((total, p)=> total + (p.quantity * p.price), 0 )

    const handleErase = () => {
        ValueContext.clear();
        setShoppingBasket(ValueContext.checkItems());
    }

    const handleRemove = (id) =>{
        ValueContext.removeItem(id)
        setShoppingBasket(ValueContext.checkItems());
    }


    return(
        <>
        {shoppingBasket.length !== 0 ? (
            <div className="cart-detail">
                <h2 className="cart-title">Your cart review</h2>
                <ul>
                    {shoppingBasket.map((p)=> <li className="cart-item">{p.quantity} x <span className="cart-productName">{p.name}</span> (${p.price}) = <span className="red">${p.price * p.quantity}</span> <button>x</button></li>)}
                </ul>
                <h4 className="cart-total">Total: <span className="red">${totalMount}</span> </h4>
                
            </div>
        ) : (
            <div className="cart-detail">
                <h2 className="cart-title">You have no products in your cart</h2>
                <Link to = {"/"}><button>Go shopping!</button></Link>
            </div>
        )}
        </>
    )
}

export default Cart;