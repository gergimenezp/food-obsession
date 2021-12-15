import React, {useState} from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

function ItemListContainer() {

    let products = [
        {
            id: "1",
            title: "Meatless Special",
            description: "Homemade gnocchi Alla Sorrentina - 4 portions",
            price: "$48",
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=34",
            stock: "10"
        },
        {
            id: "2",
            title: "Taco Festival",
            description: "Chicken Enchiladas - 4 portions",
            price: "$58",
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=97",
            stock: "7"
        },
        {
            id: "3",
            title: "Fish Special",
            description: "Grilled Salmon Fillet - 4 portions",
            price: "$62",
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=29",
            stock: "8"
        },
        {
            id: "4",
            title: "lasagna",
            description: "Traditional lasagna with spinach - 4 portions",
            price: "$62",
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=17",
            stock: "3"
        },
        {
            id: "5",
            title: "empanada sale",
            description: "Your choice of Criollas (beef), Chicken, Spinach & Feta or Ham & Cheese - per dozen",
            price: "$26",
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=161",
            stock: "20"
        }
    ];

    const [items, setItems] = useState([]);

    const prod = new Promise ((resolve, reject) =>{
        setTimeout(()=>{
        resolve(products)
        }, 2000)
    })
    prod.then((res)=>{
        setItems(res);
    })

    return(
        <div className="contenedor">
            {items.length === 0 ? (
                <div className="loading">Loading...</div>
            ) : (
            <ItemList items={items}/>)}
        </div>
    )
}

export default ItemListContainer;