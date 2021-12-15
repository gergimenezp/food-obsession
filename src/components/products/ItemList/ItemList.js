import React from "react";
import Item from '../Item/Item'
import './ItemList.css'


function ItemList({items}) {



    return(
        <div className="itemList-container">
        {
            items.map((e) => 
                <Item className="listed-items" key={e.id} id={e.id} title={e.title} description={e.description} 
                price={e.price} pictureURL={e.pictureURL} stock={e.stock} />
            )
        }
        </div>
    );
};

export default ItemList;