import React from "react";
import './Item.css'


function Item({ title, description, pictureURL, stock }) {

    String.prototype.trunc = 
      function(n){
          return this.substr(0,n-1)+(this.length>n? '...':'');
      };

    return(
        <div className="item">
            <div className="item-title">{title}</div>
            <img className="item-pic" src={pictureURL} alt={title} />
            <div className="item-description">{description.trunc(60)}</div>
            <button className="btn-detail">View details</button>
            <div className="item-stock">Available stock: {stock}</div>
        </div>
    );
};

export default Item;