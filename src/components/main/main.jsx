import React from "react";
import Opportunities from "./opportunities/opportunities";
import Soluciones from "./soluciones/soluciones";
import Noticias from "./noticias/noticias";
import Contacto from "./contacto/contacto";


function Main() {

    return(
        <main>
            <Soluciones/>
            <Opportunities/>
            <Noticias/>
            <Contacto/>
        </main>
    )
}

export default Main;