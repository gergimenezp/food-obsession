import React, {useState, useEffect} from 'react';
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';

function ItemListContainer() {

    const {id} = useParams();

    const [items, setItems] = useState([]);
    
    useEffect(()=>{
        setItems([]);
               
        if (id !== undefined){

            const db = getFirestore();
            let cat = id;

            const q = query(collection(db, "items"), where("category", "==", cat));
            getDocs(q).then((snapshot) =>{
                setItems(snapshot.docs.map((doc)=> ({ id: doc.id, ...doc.data() })));
            });
        } else {
            setItems("saludo")
        }
    },[id]);

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