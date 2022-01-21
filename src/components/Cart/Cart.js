import React, {useContext, useState} from "react";
import { addDoc, collection, getFirestore, doc, updateDoc, getDoc } from 'firebase/firestore';
import CartContext from '../../context/CartContext';
import { Link } from "react-router-dom";
import './Cart.css';

function Cart(){

    const ValueContext = useContext(CartContext);

    const shoppingBasket = ValueContext.checkItems();

    const totalToPay = ValueContext.cartTotal();

    console.log(shoppingBasket);

    const [orderId, setOrderId] = useState(0);

    const handleErase = () => {
        ValueContext.clear();
    }

    const handleRemove = (id) =>{
        ValueContext.removeItem(id)
    }

    var today = new Date();

    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' @ '+today.getHours() + ":" + today.getMinutes();

    const handlePlace = () => {

        const order = {
            buyer: {name: "Juan Carlos Gonzalez", phone: "555-234589", mail: "juancarlos@gonzalez.com"},
            items: shoppingBasket.map((p)=>{
                return{
                    id: p.id,
                    quantiy: p.quantity,
                    title: p.name,
                    price: p.price,
                }
            }),
            date: date,
            total: totalToPay
        };

        const db = getFirestore();

        const ordersCollection = collection(db, "orders");

        addDoc(ordersCollection, order).then(({id}) => {
            setOrderId(id);
            ValueContext.clear();
        });

        shoppingBasket.map((p)=>{
            const itemDoc = doc(db, "items", p.id);
            getDoc(itemDoc).then((snapshot)=>{
                updateDoc(itemDoc, { stock: snapshot.data().stock - p.quantity })
            });
        });

    }

    if(orderId != 0){
        return (
            <div className="cart-detail">
                <h2 className="cart-title">Thank you for your purchase</h2>
                <h3>Your order id is {orderId}</h3>
                <Link to = {"/"}><button>Finish</button></Link>
            </div>
        )
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
                <button onClick={handlePlace}>Place order</button>
                
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