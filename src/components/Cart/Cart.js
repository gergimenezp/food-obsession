import React, {useContext} from "react";
import CartContext from '../../context/CartContext';
import { Link } from "react-router-dom";
import './Cart.css';

function Cart(){

    const ValueContext = useContext(CartContext);

    const shoppingBasket = ValueContext.checkItems();

    const totalToPay = ValueContext.cartTotal();

    const handleErase = () => {
        ValueContext.clear();
    }

    const handleRemove = (id) =>{
        ValueContext.removeItem(id)
    }

    return(
        <>
        {shoppingBasket.length !== 0 ? (
            <div className="cart-detail">
                <h2 className="cart-title">Your cart review</h2>
                <ul>
                    {shoppingBasket.map((p)=> <li className="cart-item">{p.quantity} x <span className="cart-productName">{p.name}</span> (${p.price}) = <span className="red">${p.price * p.quantity}</span> <button onClick={()=>handleRemove(p.id)}>x</button></li>)}
                </ul>
                <h4 className="cart-total">Total: <span className="red">${totalToPay}</span> </h4>
                <button onClick={handleErase}>Clear Cart</button>
                
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