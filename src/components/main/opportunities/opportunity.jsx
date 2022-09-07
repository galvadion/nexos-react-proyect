import React from "react";

const Opportunity = ({title}) =>{

    const getReducedTitle = (title) => title.toLowerCase().replaceAll(' ','')

    return(
        <div id={getReducedTitle(title)}>
            <img class="logoCarta" 
                src={`./Materiales/icono-${getReducedTitle(title)}.png`} 
                alt={title}/>
            <img 
                class="mas" 
                src="./Materiales/icono-mas.png" 
                alt="más"/>
            <span class="cartaTexto">{title}</span>
        </div>
    )
}

export default Opportunity;