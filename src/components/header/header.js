import React from "react";
import './styles.css'
import Logo from '../../assets/logo-removebg-preview.png';
import { Link } from "react-router-dom";

function Header(){
    return(
        <div>
            <header>
                <img src={Logo} className="logo" alt="logo"/>
                <nav>
                    <ul className="menu">
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='/fotos'>
                            <li>Fotos</li>
                        </Link>
                        <Link to='/comentarios'>
                            <li>Comentarios</li>
                        </Link>
                        <Link to='/contato'>
                            <li>Contato</li>
                        </Link>
                    </ul>
                </nav>
            </header>
        </ div>
    )
}

export default Header;