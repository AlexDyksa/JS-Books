import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

const Navigation = () => (
    <nav className="app-nav">
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/about">About JS</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
    </nav>
);

export default Navigation;