import React from "react";
import './Item.css';
import {Link} from 'react-router-dom';


function Item({ id, title, description, pictureURL, stock }) {

    String.prototype.trunc = 
      function(n){
          return this.substr(0,n-1)+(this.length>n? '...':'');
      };

    return(
        <div className="item">
            <div className="item-title">{title}</div>
            <img className="item-pic" src={pictureURL} alt={title} />
            <div className="item-description">{description.trunc(60)}</div>
            <button className="btn-detail"><Link to ={`/item/${id}`}>View details</Link></button>
            <div className="item-stock">Available stock: {stock}</div>
        </div>
    );
};

export default Item;