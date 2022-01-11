import React, {useState} from "react";
import CartContext from "./CartContext";

function CustomContext({children}){

    let list = []

    const [productsInCart, setProductsInCart] = useState(list)

    function checkItems(){
        return productsInCart
    }

    function isInCart(id){
        if(productsInCart.find((p) => p.id === id) === undefined){
            return false
        }
        else{
            return true
        }
    }

    function addItem(prod){
        if (isInCart(prod.id) === false){
            productsInCart.push(prod)
        }
        else {
            alert("This item is already in your cart")
        }
    }

    const removeItem = (id) => setProductsInCart(productsInCart.filter(prod => prod.id !== id));

    const clear = () => setProductsInCart(list);

    const itemsAdded = () => productsInCart.reduce((total, p)=> total + p.quantity, 0 );

    const cartTotal = () => productsInCart.reduce((total, p)=> total + (p.quantity * p.price), 0 );

    return(
        <CartContext.Provider value={{addItem, isInCart, checkItems, removeItem, clear, itemsAdded, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CustomContext;