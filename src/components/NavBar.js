import React from 'react';
import './NavBar.css';
import logo from './logoFO.png';

function NavBar(){
    return(
        <nav className="myNav">
            <div className="logoContainer">
                <img src={logo} alt="food-obsession" />
                <h1 className="nombreSitio">Food Obsession</h1>
            </div>
            <div className="botonera">
                <div>Home</div>
                <div>Got Empanadas?</div>
                <div>Dinner</div>
                <div>Specials</div>
                <div>Organic Lunch</div>
            </div>
        </nav>
    );
}

export default NavBar;