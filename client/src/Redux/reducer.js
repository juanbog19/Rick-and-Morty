const initialState ={
    myFavorites: [],
    allCharacters:[]
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_FAV":
            return {
                ...state,
            myFavorites: [...state.allCharacters, action.payload],
            allCharacters: [...state.allCharacters, action.payload]
            }
        case "REMOVE_FAV":
            return {
                ...state,
                myFavorite: state.myFavorites.filter(fav => fav.id !== Number(action.payload))
            }
        case "FILTER":
            const allCharactersFiltered = state.allCharacters.filter
            ((char) => char.gender === action.payload)
            return {
                ...state,
                myFavorite: allCharactersFiltered
            }
        case "ORDER":
            const allCharactersFavCopy = [...state.allCharactersFav];
            return {
                ...state,
                myFavorite:
                action.payload === "A"
                ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                : allCharactersFavCopy.sort((a, b) => b.id - a.id)
            }
        default:
            return {...state}
    }
};

export default reducer;