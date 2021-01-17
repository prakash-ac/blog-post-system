import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';


const Nav = (props) => {
    return (
        <nav className="Nav">
            <ul className="NavLinks">

                <NavLink className="NavItem" to="/posts">
                    <li>Posts</li>
                </NavLink>

                <NavLink className="NavItem" to="/users">
                    <li>Users</li>
                </NavLink>
                
            </ul>
        </nav>
    )
}

export default Nav;