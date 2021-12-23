import React from "react";
import ItemCount from "../../ItemCount/ItemCount";
import './ItemDetail.css'

function ItemDetail({item}) {

    return(
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
    )
}

export default ItemDetail;