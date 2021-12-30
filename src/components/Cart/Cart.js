import React, {useContext} from "react";
import CartContext from '../../context/CartContext';
import './Cart.css';

function Cart(){

    const ValueContext = useContext(CartContext);

    let totalMount = ValueContext.checkItems().reduce((total, p)=> total + (p.quantity * p.price), 0 )
        

    return(
        <div className="cart-detail">
            <h2 className="cart-title">Your cart review</h2>
            <ul>
                {ValueContext.checkItems().map((p)=> <li className="cart-item">{p.quantity} x <span className="cart-productName">{p.name}</span> (${p.price}) = <span className="red">${p.price * p.quantity}</span></li>)}
            </ul>
            <h4 className="cart-total">Total: <span className="red">${totalMount}</span> </h4>
        </div>
    )
}

export default Cart;