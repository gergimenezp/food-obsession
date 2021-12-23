import React from "react";
import Item from '../Item/Item'
import './ItemList.css'


function ItemList({items}) {



    return(
        <div className="itemList-container">
        {
            items === "saludo" ? (
                    <div className="welcomeContainer">
                        <div className="welcome">Welcome to Food Obsession</div>
                        <div className="slogan">Catering for your every need...</div>
                        <div className="empanadas-conteiner">
                            <div className="empanadas-img">
                                <img className="empanadas-brand" src="https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=13" alt="trademark got empanadas" />
                                <img className="empanadas-pic" src="https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=2" alt="empanadas" />
                            </div>
                            <div className="empanadas-txt">
                                <p>Empanadas are an exquisite South American food that can be found in every kitchen, from street vendors to the Presidential Palace.</p>
                                <p>These pastry wraps are often filled with a fragant blend of meats and spices. Empanadas are a tradition, the way they are made, the recipes, they are enjoyment. They are filled with the love and the tradition of my home, and I love to share them with all my friends.</p>
                                <p>Trying to recreate the Empanadas of my youth, I have made the preparation into a gourmet trip in which the traditional recipes: beef, shredded chicken, fish and ham and cheese pave the way to the non-traditional such as broccoli and mozzarella, spinach and feta cheese, creamy corn and crab and shrimp.</p>
                            </div>
                        </div>
                        <div className="registered">"got empanadas?" is a registered DBA name</div>
                    </div>
            ) : (
                items.map((e) => 
                    <Item className="listed-items" key={e.id} id={e.id} title={e.title} description={e.description} 
                    price={e.price} pictureURL={e.pictureURL} stock={e.stock} />
                )
            )
        }
        </div>
    );
};

export default ItemList;