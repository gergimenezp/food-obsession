import React from 'react';
import './NavBar.css';
import logo from '../../assets/img/logoFO.png';
import CartWidget from './CartWidget';
import {Link, NavLink} from 'react-router-dom';

function NavBar(){
    return(
        <div className='myNav-container'>
            <nav className="myNav">
                <div className="logo-container">
                        <Link to = {'/'}><img src={logo} alt="food-obsession" /></Link>
                        <Link to = {'/'}><h1 className="siteName">Food Obsession</h1></Link>
                </div>
                <div className="botonera">
                    <div><NavLink to={'/category/empanadas'} className= {({ isActive }) => isActive? "current-category": "category"}>Got Empanadas?</NavLink></div>
                    <div><NavLink to={'/category/dinner'} className= {({ isActive }) => isActive? "current-category": "category"}>Dinner</NavLink></div>
                    <div><NavLink to={'/category/specials'} className= {({ isActive }) => isActive? "current-category": "category"}>Specials</NavLink></div>
                    <div><NavLink to={'/category/lunch'} className= {({ isActive }) => isActive? "current-category": "category"}>Organic Lunch</NavLink></div>
                </div>
                <Link to = {'/cart'}><CartWidget /></Link>
            </nav>
        </div>
    );
}

export default NavBar;