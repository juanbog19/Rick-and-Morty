//actions funciones que retornan objetos, el reducer las lee
export const addFav = (character) => {
    return {type: "ADD_FAV", payload: character}
}

export const removeFav = (id) => {
    return{type: "REMOVE_FAV", payload: id}
}

export const filterCard = (gender) => {
    return{type: "FILTER", payload: gender}
}

export const orderCards = (orden) => {
    return{type:"ORDEN", payload: orden}
}