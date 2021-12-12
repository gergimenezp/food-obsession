import React, {useState} from "react";
import './ItemCount.css';


function ItemCount({initialValue, stock}) {

    const [value, setValue] = useState(initialValue);

    const handleAdd = () => {
        if(value < stock) setValue((p) => p + 1);
    };

    const handleSub = () => {
        if(value > initialValue) setValue((p) => p - 1);
    };

    return(
        <div>
            <div className="producto">Aquí va mi producto</div>
                <div className="count-container">
                    <button className="btn-sub" onClick={handleSub}> sub - </button>
                    <p>{value}</p>
                    <button className="btn-add" onClick={handleAdd}> add + </button>
                </div>
            <button className="btn-toCart">Add to Cart</button>
        </div>
    );
};

export default ItemCount;