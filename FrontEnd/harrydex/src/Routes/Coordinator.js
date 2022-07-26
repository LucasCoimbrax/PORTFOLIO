export const goToCharacter = (navigate, id) => {
    navigate(`/character/${id}`)
}

export const goToBack = (navigate) => {
    navigate(-1)
}