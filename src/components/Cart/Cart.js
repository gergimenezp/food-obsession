import React, { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import editIcon from "../../assets/img/edit.png";
import delIcon from "../../assets/img/delete.png";

function Cart() {
  const ValueContext = useContext(CartContext);

  const shoppingBasket = ValueContext.checkItems();

  const totalToPay = ValueContext.cartTotal();

  const handleErase = () => {
    ValueContext.clear();
  };

  const handleRemove = (id) => {
    ValueContext.removeItem(id);
  };

  const handleEnd = () => {
    ValueContext.purchaseEnd();
  };

  return (
    <>
      {shoppingBasket.length !== 0 ? (
        <div className="cart-detail">
          <h2 className="cart-title">Your cart review</h2>
          <div>
            {shoppingBasket.map((p) => (
              <div className="cart-item">
                {p.quantity} x{" "}
                <span className="cart-productName">
                  {p.name} {p.category}
                </span>{" "}
                <span className="red">${p.price * p.quantity}</span>{" "}
                <Link to={`/item/${p.id}`}>
                  <button className="edit-btn">
                    <img src={editIcon} className="edit-icon" alt="edit" />
                  </button>
                </Link>
                <button className="del-btn" onClick={() => handleRemove(p.id)}>
                  <img src={delIcon} className="del-icon" alt="delete" />
                </button>
              </div>
            ))}
          </div>
          <h4 className="cart-total">
            Total: <span className="red">${totalToPay}</span>{" "}
          </h4>
          <div className="finish-container">
            <button className="clear-cart" onClick={handleErase}>
              Clear Cart
            </button>
            <Link to={"/Form"}>
              <button className="place-order" onClick={handleEnd}>
                Place order
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="cart-detail">
          <h2 className="cart-title">You have no products in your cart</h2>
          <Link to={"/"}>
            <button className="place-order">Go shopping!</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
