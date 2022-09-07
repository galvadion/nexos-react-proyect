import logo from './logo.svg';
import './App.css';
import React from "react";
import { NavBar } from './components/navBar/navBar';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <Header/>
    <Main/>
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
    
    <div id="modal-container" class="modal-container">
        <div class="modal">
            <img class="imgmodal" src="./Materiales/imagen-modal.JPG" alt=""/>
            <div class="registrar">
                <div class="registrartop">
                    <span>{'<~'} Volver para atras </span>
                    <span id="close" class="cerrar">X</span>
                </div>
                <h1>REGISTRAR</h1>
                <div id="company">
                    <div>
                        <img src="./Materiales/icono-maletin.png" alt=""/>
                    </div>
                    <div>
                        <h3>Empresa</h3>
                        <p>Breve explicación a lo que nos referimos</p>
                        <span id="company-log-in" class="align-to-end margined-right">-{'>'}</span>
                    </div>
                </div>
                <div id="organization">
                    <div >
                        <img src="./Materiales/icono-persona.png" alt=""/>
                    </div>
                    <div>
                        <h3> Mi Organización </h3>
                        <p>Estamos para ayudarlos a tener éxito</p>
                        <span id="organization-log-in" class="align-to-end margined-right">-{'>'}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
    
  );
}

export default App;
