import React from "react";

const Contacto = () =>{
    return (
        <div id="contacto">
                <img src="./Materiales/laptop-escritorio.jpg" alt=""/>
                <div id="form">
                    <h2>Contacto</h2>
                    <div id="inputs">
                        <div class="vertical-form">
                            <label>Nombre</label>
                            <input type="text" id="name" placeholder="Dato a completar"/>
                            <label>Email</label>
                            <input type="email" id="email" placeholder="Dato a completar"/>
                            <span id="error-message"></span>
                        </div>
                        <div class="vertical-form">
                            <label>Mensaje</label>
                            <textarea cols="30" id="message" rows="5" placeholder="Escribe tu mensaje aqui"></textarea>
                            <span id="help-message">0/255</span>
                        </div>
                    </div>
                    <div id="form-fotter">
                        <button class="enviar">Enviar</button>
                    </div>
                    
                </div>
            </div>
    )
}

export default Contacto;