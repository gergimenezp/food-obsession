import React, {useState, useContext} from "react";
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import './ItemDetail.css';
import CartContext from "../../../context/CartContext";

function ItemDetail({item}) {

    const myContext = useContext(CartContext)

    const [value, setValue] = useState(1);

    const more = () => {
        if(value < item.stock) setValue((p) => p + 1);
    };

    const less = () => {
        if(value > 1) setValue((p) => p - 1);
    };

    const type = myContext.isInCart(item.id);

    const toCart = () => {
        myContext.addItem({id: item.id, quantity: value, name: item.title, price: item.price})
    };

    return(
        <>
            <div className="item-detail">
                <div className="presentation">
                <div className="item-detail-title">{item.title}</div>
                <img className="item-detail-pic" src={item.pictureURL} alt={item.title} />
                </div>
                <div className="description">
                <div className="item-detail-description">{item.description}</div>
                <div className="item-detail-price">Price: ${item.price}</div>
                <ItemCount compType={type} value={value} add={more} sub={less} toCart={toCart} category={item.category} />
                </div>
            </div>
            <div className="back-container">
                <Link to = {`/category/${item.category}`}><button className="back-button"> Go back to {item.category}</button></Link>
            </div>
            
        </>
    )
}

export default ItemDetail;