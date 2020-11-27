import React from 'react';
import logo from '../assets/static/logo.png'
import userIcon from '../assets/static/user-icon.png'
import '../assets/styles/components/Header.scss'

const Header = () => (
    <header className="header">
        <img src={logo} alt="logo" className="header__img"/>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt=""/>
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar sesion</a></li>
            </ul>
        </div>
    </header>
);

export default Header;