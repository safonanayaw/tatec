import React from 'react'
import { useState } from 'react';
import logo from '../../assets/images/logo.png'
import MenuIcon from "../../assets/images/menuIcon.png";

import './navBar.css';

const NavBar = () => {

const [isExpanded, setExpanded] = useState(false);

const handleToggle = () => {
    setExpanded(!isExpanded);
    console.log('Image click');
}


    return (
        <nav className="nav">
            <img className="nav__logo" src={logo} alt="Logo" />
            <img
            onClick={handleToggle}
            className={`nav__image ${isExpanded ? 'collapsible--expanded nav__toggler' : ''}`}
            src={MenuIcon}
            alt="Toggle Menu"
            />
            <ul className={`list nav__list collapsible__content ${isExpanded ? 'collapsible--expanded' : ''}`}>
            <li className="nav__item"><a href="#">Home</a></li>
            <li className="nav__item"><a href="#">About</a></li>
            <li className="nav__item"><a href="#">Product</a></li>
            <li className="nav__item"><a href="#">Services</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;

