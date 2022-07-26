import React from "react";

import { ContainerCard, ContainerImage, ContainerDetalhes, ContainerName, ContainerVarinha, ContainerButton } from "./Styled";

const CardCharacter = (props) => {

    return(
        <ContainerCard>
            <ContainerImage src={props.image}/>
            <ContainerDetalhes>
                <ContainerName>
                    <b> {props.name} </b>
                </ContainerName>
                <div>
                    <p> Casa: {props.house}</p>
                    <p> Ator: {props.ator}</p>
                    <ContainerVarinha> Varinha:   
                        <p>
                            Madeira: {props.varinha.wood} <br/>
                            Núcleo: {props.varinha.core} <br/>
                            Tamanho: {props.varinha.length} cm<br/>
                        </p>
                    </ContainerVarinha>
                </div>
                {/* <ContainerButton> <b> DETALHES </b> </ContainerButton> */}
            </ContainerDetalhes>
            
        </ContainerCard>
    )
}

export default CardCharacter