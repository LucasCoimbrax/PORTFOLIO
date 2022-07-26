import styled from "styled-components";

export const ContainerCards = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 17%);
    grid-template-rows: auto;

    flex-wrap: nowrap;
    margin: 2%;
`

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;

    padding: 1rem;
`

export const TitleH1 = styled.h1`
    font-size: 4rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

export const ContainerFiltro = styled.div`
    display: flex;
    justify-content: center;

    padding: 2rem 0px;
`

export const ContainerButton = styled.button`
    width: 15vh;

    margin: 0px 5em;
    padding: 1vh;
`

