import React, {useState} from "react";
import { Link } from "react-router-dom";
import './ItemCount.css';
import editIcon from "../../../../assets/img/edit.png";


function ItemCount({compType, value, add, sub, category, toCart, remove}) {

    const [type, setType] = useState(compType);

    const handleToCart = () =>{
        toCart();
        setType("yes");
    }

    const handleEdit = () => {
        remove();
        setType("no");
    }

    console.log(type);

    console.log(compType);

    return(
        
        <div>
            {type === "no" ? (
                <div>
                    <div className="count-container">
                        <button className="btn-sub" onClick={sub}> sub - </button>
                        <p>{value}</p>
                        <button className="btn-add" onClick={add}> add + </button>
                    </div>
                    <button className="btn-toCart" onClick={handleToCart}>Add to Cart</button>
                </div>
            ) : (
                <div>
                    <div className="added-container">
                        <p className="added">{compType} added to cart</p>
                        <button className="edit" onClick={handleEdit}><img src={editIcon} className="edit-icon" alt="edit" /></button>
                    </div>
                    <Link to = {'/cart'}><button className="btn-toCart">Pay and finish</button></Link>
                    <Link to = {`/category/${category}`}><button className="btn-toList">Continue shopping</button></Link>
                </div>
            )}
        </div>
    );
};

export default ItemCount;