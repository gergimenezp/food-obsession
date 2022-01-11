import React, {useEffect} from 'react';
import './NavBar.css';
import logo from '../../assets/img/logoFO.png';
import CartWidget from './CartWidget';
import {Link, NavLink} from 'react-router-dom';

function NavBar(){
    return(
        <nav className="myNav">
            <div className="logoContainer">
                    <Link to = {'/'}><img src={logo} alt="food-obsession" /></Link>
                    <Link to = {'/'}><h1 className="nombreSitio">Food Obsession</h1></Link>
            </div>
            <div className="botonera">
                <div><NavLink to={'/category/empanadas'} className= {({ isActive }) => isActive? "currentCategory": "category"}>Got Empanadas?</NavLink></div>
                <div><NavLink to={'/category/dinner'} className= {({ isActive }) => isActive? "currentCategory": "category"}>Dinner</NavLink></div>
                <div><NavLink to={'/category/specials'} className= {({ isActive }) => isActive? "currentCategory": "category"}>Specials</NavLink></div>
                <div><NavLink to={'/category/lunch'} className= {({ isActive }) => isActive? "currentCategory": "category"}>Organic Lunch</NavLink></div>
            </div>
            <Link to = {'/cart'}><CartWidget /></Link>
        </nav>
    );
}

export default NavBar;