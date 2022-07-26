import React from "react";
import { useNavigate } from "react-router-dom";

import { goToBack } from "../../Routes/Coordinator";

const CharacterPage = () => {
    const navigate = useNavigate()

    return(
        <div>
            <button onClick={() => goToBack(navigate)}> Voltar </button>
            Character Page
        </div>
    )
}

export default CharacterPage