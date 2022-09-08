import React from "react";

const Footer = () =>{
    return (
        <footer>
        <div id="footercontainer">
        <div class="linkslogocontainer">
            <img src="./Materiales/logo-blanco.png" alt="logo blanco" class="logo"/>
            <ul>
                <li>Nosotros</li>
                <li>Noticias</li>
                <li>Contacto</li>
                <li>Terminos y condiciones</li>
            </ul>
        </div>
            <div class="redes">
                <p>Seguinos!</p> 
                <img src="./Materiales/fdefacebook.png" alt="facebook"/>
                <img src="./Materiales/twitter.png" alt="twitter"/>
                <img src="./Materiales/instagram.png" alt="instagram"/>
            </div>
        </div>
    </footer>
    )
}

export default Footer;