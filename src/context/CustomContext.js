import React from "react";
import CartContext from "./CartContext";

function CustomContext({children}){
    let arr = []

    function addItem(prod){
        if (isInCart(prod.id) === false){
            arr.push(prod)
        }
        else {
            alert("This item is already in your cart")
        }
    }

    function isInCart(id){
        if(arr.find((p) => p.id === id) === undefined){
            return false
        }
        else{
            return true
        }
    }

    function checkItems(){
        return arr
    }

    return(
        <CartContext.Provider value={{addItem, isInCart, checkItems}}>
            {children}
        </CartContext.Provider>
    )
}

export default CustomContext;