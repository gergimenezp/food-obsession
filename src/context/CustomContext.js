import React from "react";
import CartContext from "./CartContext";

function CustomContext({children}){
    let productsInCart = []

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

    function removeItem(i){
        productsInCart.splice(i, 1)
    }

    function clear(){
        productsInCart = []
    }

    const itemsAdded = () => productsInCart.reduce((total, p)=> total + p.quantity, 0 )

    return(
        <CartContext.Provider value={{addItem, isInCart, checkItems, removeItem, clear, itemsAdded}}>
            {children}
        </CartContext.Provider>
    )
}

export default CustomContext;