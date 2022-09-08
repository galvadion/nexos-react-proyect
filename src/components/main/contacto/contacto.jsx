import React, { useState } from "react";

const Contacto = () => {
    // Definimos nombre de variable a utilizar
    // Nombre del metodo para editar la variable
    // Y dentro del useState(""), definimos el valor por defecto
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")

    const sendForm = () =>{
        console.log(name)
        console.log(email)
        console.log(message)
    }

    return (
        <div id="contacto">
                <img src="./Materiales/laptop-escritorio.jpg" alt=""/>
                <div id="form">
                    <h2>Contacto</h2>
                    <div id="inputs">
                        <div class="vertical-form">
                            <label>Nombre</label>
                            <input 
                                type="text" 
                                id="name"
                                value={name}
                                onChange={(e)=>setName(e.target.value)}
                                placeholder="Dato a completar"/>
                            <label>Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}
                                placeholder="Dato a completar"/>
                            <span id="error-message"></span>
                        </div>
                        <div class="vertical-form">
                            <label>Mensaje</label>
                            <textarea 
                                cols="30" 
                                id="message" 
                                rows="5" 
                                value={message}
                                maxLength={255}
                                onChange={(e)=>setMessage(e.target.value)}
                                placeholder="Escribe tu mensaje aqui"
                            ></textarea>
                            <span id="help-message" 
                                className={message.length==255 ? 'color-red':''}>
                                {message.length}/255
                            </span>
                        </div>
                    </div>
                    <div id="form-fotter">
                        <button class="enviar" onClick={sendForm}>Enviar</button>
                    </div>
                    
                </div>
            </div>
    )
}

export default Contacto;