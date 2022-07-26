import React, { useState } from "react"

import { BASE_URL } from "../../constants/url"
import useRequestData from "../../hooks/useRequestData"

import CardCharacter from "../../components/CardCharacter/CardCharacter";

import { ContainerCards, ContainerTitle, TitleH1} from "./Styled";

const HomePage = () => {
    const listaPersonagensAPI = useRequestData([], `${BASE_URL}`)

    const listaCard = listaPersonagensAPI && listaPersonagensAPI.map((person) => {
        return(
            <CardCharacter
                name={person.name}
                image={person.image}
                house={person.house}
                ator={person.actor}
                varinha={person.wand}
            />
        )
    })

    return(
        <div>
            <ContainerTitle>
                <TitleH1> HogwartsBooks </TitleH1>
            </ContainerTitle>
            <ContainerCards>
                {listaCard}
            </ContainerCards>
            
        </div>
    )
}

export default HomePage