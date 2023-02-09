import React from "react"
import { Link } from "react-router-dom"
import Logo from '../../assets/logo-removebg-preview.png'
import './styles.css'

function Footer(){
    return(
        <footer>
        <img src={Logo} className="logo2"  alt="logo"/>
        <nav className="menu2">
            <ul className="navegation">
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
        <p>Todos os direitos reservados &copy;</p>
        <p>Desenvolvido por: Luiz Henrique Rafaeli Santin</p>
    </footer>
    )
}

export default Footer