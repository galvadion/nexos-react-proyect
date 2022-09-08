import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { NavBar } from './components/navBar/navBar';
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer'

function App() {

    const [displayModal,setDisplayModal] = useState(false)

    const [loggedUser, setLoggedUser] = useState("")



  return (
    <React.Fragment>
        <NavBar loggedUser={loggedUser} displayModal={setDisplayModal}/>
        <Header/>
        <Main/>
        <Footer/>
    
        <div id="modal-container" className={`modal-container ${displayModal ? 'display':''}`}>
            <div class="modal">
                <img class="imgmodal" src="./Materiales/imagen-modal.JPG" alt=""/>
                <div class="registrar">
                    <div class="registrartop">
                        <span onClick={()=>setDisplayModal(false)}>{'<~'} Volver para atras </span>
                        <span id="close" class="cerrar" onClick={()=>setDisplayModal(false)}>X</span>
                    </div>
                    <h1>REGISTRAR</h1>
                    <div id="company">
                        <div>
                            <img src="./Materiales/icono-maletin.png" alt=""/>
                        </div>
                        <div onClick={()=>{
                            setDisplayModal(false)
                            setLoggedUser("Empresa")
                        }}>
                            <h3>Empresa</h3>
                            <p>Breve explicación a lo que nos referimos</p>
                            <span id="company-log-in" class="align-to-end margined-right">-{'>'}</span>
                        </div>
                    </div>
                    <div id="organization">
                        <div >
                            <img src="./Materiales/icono-persona.png" alt=""/>
                        </div>
                        <div  onClick={()=>{
                            setDisplayModal(false)
                            setLoggedUser("Organización")
                        }}>
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
