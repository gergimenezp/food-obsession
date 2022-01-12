import React, {useState} from "react";
import CartContext from "./CartContext";

function CustomContext({children}){

    const [productsInCart, setProductsInCart] = useState([])

    const checkItems = () => {
        return productsInCart
    }

    const isInCart = (id) => {
        if(productsInCart.find((p) => p.id === id) === undefined){
            return "no"
        }
        else{
            return "yes"
        }
    }

    const addItem = (prod) => {
        if (isInCart(prod.id) === "no"){
            setProductsInCart( prev => [...prev, prod] );
        }
        else {
            alert("This item is already in your cart")
        }
    }

    const removeItem = (id) => setProductsInCart(productsInCart.filter(prod => prod.id !== id));

    const clear = () => setProductsInCart([]);

    const itemsAdded = () => productsInCart.reduce((total, p)=> total + p.quantity, 0 );

    const cartTotal = () => productsInCart.reduce((total, p)=> total + (p.quantity * p.price), 0 );

    return(
        <CartContext.Provider value={{addItem, isInCart, checkItems, removeItem, clear, itemsAdded, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CustomContext;