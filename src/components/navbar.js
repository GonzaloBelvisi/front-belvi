import React from 'react';
import TecnoLogo from "../assets/Images/TecnoLogo.png"

export default function navbar() {
    return <div onClick={togglenavbar}>
        <header>
            <nav className='menu'>
            <a href="/"><img className='TecnoLogo' src={TecnoLogo} alt="TecnoBelviLogo" ></img></a>
                <a href="#1" className='toggle-button'>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </a>
                <div className='menu-links'>
                    <ul>
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/about">Sobre nosotros</a></li>
                        <li><a href="/Services">Servicios</a></li>
                        <li><a href="/Prices">Precios</a></li>
                        <li><a href="/Contact">Contactos</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>;
}

function togglenavbar() {
    const navbarLinks = document.getElementsByClassName('menu-links')[0]
    navbarLinks.classList.toggle('active')
}

