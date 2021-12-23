import React from "react";
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import './ItemDetail.css'

function ItemDetail({item}) {

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
                <ItemCount initialValue={1} stock={Number(item.stock)} />
                </div>
            </div>
            <div className="back-container">
                <Link to = {`/category/${item.category}`}><button className="back-button"> Go back to {item.category}</button></Link>
            </div>
            
        </>
    )
}

export default ItemDetail;