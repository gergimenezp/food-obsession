import React, {useState} from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';

function ItemListContainer() {

    let specials = [
        {
            id: 101,
            title: "Meatless Special",
            description: "Homemade gnocchi Alla Sorrentina - 4 portions",
            price: 48,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=34",
            stock: 10
        },
        {
            id: 102,
            title: "Taco Festival",
            description: "Chicken Enchiladas - 4 portions",
            price: 58,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=97",
            stock: 7
        },
        {
            id: 103,
            title: "Fish Special",
            description: "Grilled Salmon Fillet - 4 portions",
            price: 62,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=29",
            stock: 8
        },
        {
            id: 104,
            title: "lasagna",
            description: "Traditional lasagna with spinach - 4 portions",
            price: 62,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=17",
            stock: 3
        },
        {
            id: 105,
            title: "empanada sale",
            description: "Your choice of Criollas (beef), Chicken, Spinach & Feta or Ham & Cheese - per dozen",
            price: 26,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=161",
            stock: 20
        },{
            id: 106,
            title: "side salad",
            description: "Spinach, cherry tomatoes, red onions, avocados, garbanzo beans, Feta cheese and sunflower seeds with a homemade balsamic vinaigrette. - 4 portion",
            price: 24,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=14",
            stock: 8
        },
        {
            id: 107,
            title: "spiced Salmon Kebabs",
            description: "Clean simple flavors, healthy and fresh, they look good and taste better! - 4 portions",
            price: 56,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=30",
            stock: 3
        }
    ];

    let empanadas= [
        {
            id: 201,
            title: "Criolla",
            description: "Pastry wraps filled with ground Beef, onions, hard boil eggs and green olives. Exquisite South American traditional food that can be found in every kitchen, from street vendors to the Presidential Palace. Per dozen.",
            price: 29,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=3",
            stock: 21
        },
        {
            id: 202,
            title: "Chicken",
            description: "Pastry wraps filled with shredded chicken, onions, peppers and a fragant blend of spices - per dozen",
            price: 29,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=10",
            stock: 7
        },
        {
            id: 203,
            title: "Hawaiian",
            description: "Pastry wraps filled with ham, Mozzarella & Pineapples. A bitter-sweet special. Per dozen",
            price: 30,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=2",
            stock: 10
        },
        {
            id: 204,
            title: "Lebanese",
            description: "Pastry wraps filled with lemon marinated beef and a mid east traditional seasoning - per dozen",
            price: 31,
            pictureURL: "https://www.gastrotradicional.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/02/como-preparar-empanadas-arabes-1.jpg",
            stock: 5
        },
        {
            id: 205,
            title: "Egg & bacon",
            description: "Breakfast empanadas filled with egg, Cheese, Bacon and/or sausages - per dozen",
            price: 44,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=7",
            stock: 20
        },
	    {
            id: 206,
            title: "Salmon",
            description: "Breakfast empanadas filled with Smoked Salmon, Cream Cheese & Red Onions - per dozen",
            price: 44,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=6",
            stock: 8
        },
        {
            id: 207,
            title: "Vegetarian",
            description: "Breakfast or lunch empanadas filled with egg, cheese, potatoes, onions, bell peppers, tomatoes, mushrooms",
            price: 38,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=9",
            stock: 20
        }
    ];

    let dinner= [
        {
            id: 301,
            title: "side salad",
            description: "Spinach, cherry tomatoes, red onions, avocados, garbanzo beans, Feta cheese and sunflower seeds with a homemade balsamic vinaigrette. - 4 portion",
            price: 24,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=14",
            stock: 8
        },
        {
            id: 302,
            title: "spiced Salmon Kebabs",
            description: "Clean simple flavors, healthy and fresh, they look good and taste better! - 4 portions",
            price: 56,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=30",
            stock: 3
        }
    ]

    let lunch= [
        {
            id: 401,
            title: "Lebanese",
            description: "Pastry wraps filled with lemon marinated beef and a mid east traditional seasoning - per dozen",
            price: 31,
            pictureURL: "https://www.gastrotradicional.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/02/como-preparar-empanadas-arabes-1.jpg",
            stock: 5
        },
        {
            id: 402,
            title: "Egg & bacon",
            description: "Breakfast empanadas filled with egg, Cheese, Bacon and/or sausages - per dozen",
            price: 44,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=7",
            stock: 20
        }
    ];

    const {id} = useParams();

    const [items, setItems] = useState([]);

    useEffect(()=>{
        getCategory()
    },[])


    const getCategory = async (products) => {
        switch (id) {
            case "empanadas":
                products = empanadas
                break;
            case "dinner":
                products = dinner
                break;
            case "specials":
                products = specials
                break;
            case "lunch":
                products = lunch
                break;
            default:
                products = "saludo"
                break;
        }
        const prod = await new Promise ((resolve, reject) =>{
            setTimeout(()=>{
            resolve(products)
            }, 2000)
        });
        setItems(prod);
    }

    useEffect(()=>{
        setItems([])
        getCategory()
    },[id])

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