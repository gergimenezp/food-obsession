import React, {useState} from "react";
import ItemCount from "../../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import './ItemDetail.css'

function ItemDetail({item}) {

    const [value, setValue] = useState(1);

    const more = () => {
        if(value < item.stock) setValue((p) => p + 1);
    };

    const less = () => {
        if(value > 1) setValue((p) => p - 1);
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
                <ItemCount value={value} add={more} sub={less} category={item.category} />
                </div>
            </div>
            <div className="back-container">
                <Link to = {`/category/${item.category}`}><button className="back-button"> Go back to {item.category}</button></Link>
            </div>
            
        </>
    )
}

export default ItemDetail;