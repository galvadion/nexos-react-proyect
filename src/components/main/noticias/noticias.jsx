import React from "react";

const Noticias = () =>{
    return (
        <div id="noticias">
            <h1>Noticias</h1>
            <a href="">ver todas</a>
            <div id="cartasnoticias">
                <div class="cartanoticia">
                <img src="./Materiales/plantararboles.jpeg" alt=""/>
                    <div class="tiempo">
                    <span>
                        <img src="./Materiales/icono-calendario.png" alt=""/> 10/08/2022 
                    </span>
                    <span><img src="./Materiales/icono-reloj.png" alt=""/> 4 min 
                    </span>
                    </div>
                    <div id="descripcioncarta">
                    <h3>Plantar árboles nueva tendencia</h3>
                    <p>
                                Lo mejor de plantar árboles es darle un respiro a nuestro planteta mientras hacemos algo divertido en equipo.
                                Una experiencia super gratificante que hace de esta actividad de las mas gratificantes del mundo.
                    </p>
                    </div>
                    <a href=""><img src="./Materiales/icono-flecha.png" alt=""/> Ver más</a>
                </div>
                <div class="cartanoticia">
                <img src="./Materiales/plantararboles.jpeg" alt=""/>
                        <div class="tiempo">
                            <span><img src="./Materiales/icono-calendario.png" alt=""/> 10/08/2022 </span>
                            <span><img src="./Materiales/icono-reloj.png" alt=""/> 4 min </span>
                        </div>
                        <div id="descripcioncarta">
                            <h3>Plantar árboles nueva tendencia</h3>
                            <p>
                                Lo mejor de plantar árboles es darle un respiro a nuestro planteta mientras hacemos algo divertido en equipo.
                                Una experiencia super gratificante que hace de esta actividad de las mas gratificantes del mundo.
                            </p>
                        </div>
                        <a href=""><img src="./Materiales/icono-flecha.png" alt=""/> Ver más</a>
                    </div>
                    <div class="cartanoticia">
                        <img src="./Materiales/plantararboles.jpeg" alt=""/>
                        <div class="tiempo">
                            <span><img src="./Materiales/icono-calendario.png" alt=""/> 10/08/2022 </span>
                            <span><img src="./Materiales/icono-reloj.png" alt=""/> 4 min </span>
                        </div>
                        <div id="descripcioncarta">
                            <h3>Plantar árboles nueva tendencia</h3>
                            <p>
                                Lo mejor de plantar árboles es darle un respiro a nuestro planteta mientras hacemos algo divertido en equipo.
                                Una experiencia super gratificante que hace de esta actividad de las mas gratificantes del mundo.
                            </p>
                        </div>
                        <a href=""><img src="./Materiales/icono-flecha.png" alt=""/> Ver más</a>
                    </div>
                    <div class="cartanoticia">
                        <img src="./Materiales/plantararboles.jpeg" alt=""/>
                        <div class="tiempo">
                            <span><img src="./Materiales/icono-calendario.png" alt=""/> 10/08/2022 </span>
                            <span><img src="./Materiales/icono-reloj.png" alt=""/> 4 min </span>
                        </div>
                        <div id="descripcioncarta">
                            <h3>Plantar árboles nueva tendencia</h3>
                            <p>
                                Lo mejor de plantar árboles es darle un respiro a nuestro planteta mientras hacemos algo divertido en equipo.
                                Una experiencia super gratificante que hace de esta actividad de las mas gratificantes del mundo.
                            </p>
                        </div>
                        <a href=""><img src="./Materiales/icono-flecha.png" alt=""/> Ver más</a>
                    </div>
                </div>
                <div id="slide">
                    <button  class="arrow prev"></button>
                    <button></button>
                    <button  class="arrow next"></button>
                </div>
            </div>
    )
}

export default Noticias;