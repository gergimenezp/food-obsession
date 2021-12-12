import React from 'react';
import Common from '../Common';
import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

function Rack() {
    return(
        <div className="contenedor">
            <Common.Label greeting="Hola, ¡bienvenido!" estilo="saludo"></Common.Label>
            <ItemCount initialValue={1} stock={7} />
        </div>
    )
}

export default Rack;