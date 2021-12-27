import React, {useState} from "react";
import { Link } from "react-router-dom";
import './ItemCount.css';


function ItemCount({value, add, sub, category}) {

    const [type, setType] = useState("counter");

    const handleToCart = () =>{
        setType("")
    }

    return(
        
        <div>
            {type == "counter" ? (
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
                    <p className="added">{value} added to cart</p>
                    <Link to = {'/cart'}><button className="btn-toCart">Pay and finish</button></Link>
                    <Link to = {`/category/${category}`}><button className="btn-toList">Continue shopping</button></Link>
                </div>
            )}
        </div>
    );
};

export default ItemCount;