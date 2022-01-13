import React, { useState, useEffect } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'

function ItemDetailContainer() {

    const {id} = useParams();

    const [item, setItem] = useState([]);

    useEffect(()=>{
        const db = getFirestore();

        const prodRef = doc(db, "items", id );
        getDoc(prodRef).then((snapshot)=>{
            if (snapshot.exists()) {
                setItem({id: snapshot.id, ...snapshot.data() });
            }
        });
    }, [id]);

    return(
        <div>
        {item.length === 0 ? (
                <div className="loading">Loading...</div>
            ) : (<ItemDetail item={item}/>)}
        </div>
    )
}

export default ItemDetailContainer;