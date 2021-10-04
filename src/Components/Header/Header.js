import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const activeStyle = {
        fontWeight: 'bold',
        color: 'blue'


    }
    return (
        <div className="header">
            <nav>

                <NavLink className="navlink" to="./home" activeStyle={activeStyle}>Home</NavLink>
                <NavLink className="navlink" to="./services" activeStyle={activeStyle}>Services</NavLink>
                <NavLink className="navlink" to="./instructors" activeStyle={activeStyle}>Instructors</NavLink>
                <NavLink className="navlink" to="./aboutus" activeStyle={activeStyle}>About us</NavLink>



            </nav>
        </div>
    );
};

export default Header;