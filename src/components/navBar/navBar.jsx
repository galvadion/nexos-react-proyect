import React from "react";


export const NavBar = ({displayModal,loggedUser}) =>{

    return (
        <nav>
            <img src="./Materiales/logo.png" alt="logo" className="logo"/>
            <ul id="navLinks">
                <li><a href="#oportunidades">Nosotros</a></li>
                <li><a href="#noticias">Noticias</a></li>
                <li>Ayuda</li>
            </ul>
            <button id="login" 
                className="login" 
                onClick={()=>displayModal(true)}>
                {loggedUser==""? "Ingresar" : loggedUser}
            </button>
        </nav>
    )
}