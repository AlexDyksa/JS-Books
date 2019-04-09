import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Logo = () => (
    <div className="app-logo">
        <Link to="/" className="app-logo__link">
            <img src="/img/logo.jpg" alt="logo" />
            JS<br />Books
        </Link>
    </div>
);

export default Logo;