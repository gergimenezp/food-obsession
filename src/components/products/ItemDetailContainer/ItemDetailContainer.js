import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

function ItemDetailContainer() {

    let catalog = '../catalog.json';

    let product = {
        id: "6",
        title: "side salad",
        description: "Spinach, cherry tomatoes, red onions, avocados, garbanzo beans, Feta cheese and sunflower seeds with a homemade balsamic vinaigrette. - 4 portion",
        price: "$24",
        pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=14",
        stock: "8"
    };

    const [item, setItem] = useState([]);

    useEffect(()=>{
        getItem()
    },[])

    const getItem = async () => {
        const prod = await new Promise ((resolve, reject) =>{
            setTimeout(()=>{
            resolve(product)
            }, 2000)
        });
        setItem(prod);
    }

    return(
        <div>
        {item.length === 0 ? (
                <div className="loading">Loading...</div>
            ) : (<ItemDetail item={item}/>)}
        </div>
    )
}

export default ItemDetailContainer;