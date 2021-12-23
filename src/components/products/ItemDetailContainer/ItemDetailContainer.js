import React, {useState, useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'

function ItemDetailContainer() {

    let catalog  = [
        {
            id: 101,
            category: "specials",
            title: "Meatless Special",
            description: "Homemade gnocchi Alla Sorrentina - 4 portions",
            price: 48,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=34",
            stock: 10
        },
        {
            id: 102,
            category: "specials",
            title: "Taco Festival",
            description: "Chicken Enchiladas - 4 portions",
            price: 58,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=97",
            stock: 7
        },
        {
            id: 103,
            category: "specials",
            title: "Fish Special",
            description: "Grilled Salmon Fillet - 4 portions",
            price: 62,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=29",
            stock: 8
        },
        {
            id: 104,
            category: "specials",
            title: "lasagna",
            description: "Traditional lasagna with spinach - 4 portions",
            price: 62,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=17",
            stock: 3
        },
        {
            id: 105,
            category: "specials",
            title: "empanada sale",
            description: "Your choice of Criollas (beef), Chicken, Spinach & Feta or Ham & Cheese - per dozen",
            price: 26,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=161",
            stock: 20
        },{
            id: 106,
            category: "specials",
            title: "side salad",
            description: "Spinach, cherry tomatoes, red onions, avocados, garbanzo beans, Feta cheese and sunflower seeds with a homemade balsamic vinaigrette. - 4 portion",
            price: 24,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=14",
            stock: 8
        },
        {
            id: 107,
            category: "specials",
            title: "spiced Salmon Kebabs",
            description: "Clean simple flavors, healthy and fresh, they look good and taste better! - 4 portions",
            price: 56,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=30",
            stock: 3
        },
        {
            id: 201,
            category: "empanadas",
            title: "Criolla",
            description: "Pastry wraps filled with ground Beef, onions, hard boil eggs and green olives. Exquisite South American traditional food that can be found in every kitchen, from street vendors to the Presidential Palace. Per dozen.",
            price: 29,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=3",
            stock: 21
        },
        {
            id: 202,
            category: "empanadas",
            title: "Chicken",
            description: "Pastry wraps filled with shredded chicken, onions, peppers and a fragant blend of spices - per dozen",
            price: 29,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=10",
            stock: 7
        },
        {
            id: 203,
            category: "empanadas",
            title: "Hawaiian",
            description: "Pastry wraps filled with ham, Mozzarella & Pineapples. A bitter-sweet special. Per dozen",
            price: 30,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=2",
            stock: 10
        },
        {
            id: 204,
            category: "empanadas",
            title: "Lebanese",
            description: "Pastry wraps filled with lemon marinated beef and a mid east traditional seasoning - per dozen",
            price: 31,
            pictureURL: "https://www.gastrotradicional.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/02/como-preparar-empanadas-arabes-1.jpg",
            stock: 5
        },
        {
            id: 205,
            category: "empanadas",
            title: "Egg & bacon",
            description: "Breakfast empanadas filled with egg, Cheese, Bacon and/or sausages - per dozen",
            price: 44,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=7",
            stock: 20
        },
	    {
            id: 206,
            category: "empanadas",
            title: "Salmon",
            description: "Breakfast empanadas filled with Smoked Salmon, Cream Cheese & Red Onions - per dozen",
            price: 44,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=6",
            stock: 8
        },
        {
            id: 207,
            category: "empanadas",
            title: "Vegetarian",
            description: "Breakfast or lunch empanadas filled with egg, cheese, potatoes, onions, bell peppers, tomatoes, mushrooms",
            price: 38,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=9",
            stock: 20
        },
        {
            id: 301,
            category: "dinner",
            title: "Meatballs with Spaghetti",
            description: "They are tender, loaded with herbs and cheese and covered with a classic tomato sauce. Siriously italian. 4 portion",
            price: 68,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=32",
            stock: 8
        },
        {
            id: 302,
            category: "dinner",
            title: "Spinach Artichoke Pasta",
            description: "Spinach + artichoke + pasta =  spinach Artichoke dip made into a pasta dish. With Garlic Bread. 4 portion.",
            price: 60,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=33",
            stock: 5
        },
        {
            id: 303,
            category: "dinner",
            title: "napolitan fried steak",
            description: "Traditional argentinian 'milanesas alla napotilatna'. Fried stake with tomato sauce and melted mozzarella. 4 portion.",
            price: 63,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=27",
            stock: 16
        },
        {
            id: 401,
            category: "lunch",
            title: "Wraps",
            description: "With lettuce, tomatoes, cabbage, onions, pickles. With dressing or salsa on the side, homemade balsamic vinaigrette, Caesar or Ranch; red or green salsa. Gluten free tortillas available. - Per unit",
            price: 10,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=70",
            stock: 35
        },
        {
            id: 402,
            category: "lunch",
            title: "quinoa salad",
            description: "With grilled chiken breast, tomatoes, basil, feta cheese, red onions, spinach, sunflower seed. with dressing on the side, homemade balsamic vinaigrette, Caesar or Ranch. - 1 portion",
            price: 10,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=67",
            stock: 16
        },
        {
            id: 403,
            category: "lunch",
            title: "steak sandwich",
            description: "Grilled steak sandwich with Chimichurri Sauce with your choice of lettuce, tomatoes, onions. Can replace Chimichurri with Mayonnaise, mustard and/or ketchup.  French baguette, White, wheat or whole grain bread, gluten free available. 1 portion",
            price: 13,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=84",
            stock: 9
        },
        {
            id: 404,
            category: "lunch",
            title: "Turkey sandwich",
            description: "With cheese, lettuce, tomatoes, onions, pickles. Mayonnaise, mustard, ketchup or Chimichurri Sauce. White, wheat or whole grain bread, gluten free available. Low carb? No problem, get the meat with lettuce to wrap and veggies on the side. Gluten free bread available. 1 portion",
            price: 13,
            pictureURL: "https://ss-static-01.esmsv.com/id/65684/galeriaimagenes/obtenerimagen/?id=79",
            stock: 30
        }
    ];

    const {id} = useParams();

    const product = catalog.find((elem) => elem.id == id);

    const [item, setItem] = useState([]);

    useEffect(()=>{
        getItem()
    },[id])

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