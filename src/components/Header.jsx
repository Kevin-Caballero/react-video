import React from 'react';
import '../assets/styles/components/Header.scss'

const Header = () => (
    <header className="header">
        <img src="../assets/img/logo.png" alt="logo" className="header_img"/>
        <div className="header_menu">
            <div className="header_menu-profile">
                <img src="../assets/img/user.png" alt=""/>
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