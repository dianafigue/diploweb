import React from 'react';
import '../../styles/components/layout/Header.css'
import Nav from './Nav';

const Header = (props) => {
    return (
        <header>
        <div>
            <img src="img/logo.png" width="150" alt="torneo"/>
            <h1>Futbol Femenino Sköl</h1>
        </div>
            <Nav />
    </header>
    );
}

export default Header;