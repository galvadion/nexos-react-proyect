import React from "react";
import Opportunity from "./opportunity";
import Title from "./title";

const Opportunities = () =>{
    return (
        <div id="oportunidades">
            <Title/>
            <div id="oportunidadesCartas">
                <Opportunity 
                    title="Ser Voluntario"/>                
                <Opportunity 
                    title="Donar"/>
                <Opportunity 
                    title="Reciclar"/>
                <Opportunity 
                    title="Llamados laborales"/>
                <Opportunity 
                    title="Llamados del corazón"/>
            </div>
        </div>
    )
}

export default Opportunities;