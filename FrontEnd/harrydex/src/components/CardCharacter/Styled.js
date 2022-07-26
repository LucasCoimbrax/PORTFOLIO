import styled from "styled-components";

export const ContainerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-self: center;
    justify-content: space-evenly;

    border: 1px solid black;
    box-shadow: 1px 2px gray;
    border-radius: 10px 10px;
    width: 250px;
    padding: 10px;
    height: 95%;
`

export const ContainerImage = styled.img`
    width: 100%;
    min-height: 22rem;

    border-radius: 10px 10px;
`

export const ContainerDetalhes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    height: 100%;
    
`

export const ContainerName =styled.div`
    padding: 20px 0px;
    text-align: center;
    font-size: 3vh;

    height: 25px;
`

export const ContainerVarinha = styled.div`
    border: 1px solid gray;
    border-radius: 10px 10px;

    padding: 10px;
    min-width: 200px;
`

// export const ContainerButton = styled.button`
//     width: 20vh;
//     height: 3vh;

//     border-radius: 10px 10px;

//     :hover{
//         background-color: gray;
//         color: white;
//     }
// `