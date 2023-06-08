import { connect } from "react-redux"
import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import { filterCard, orderCards } from "../../Redux/actions";
import { useState } from "react";

const Favorites = ({myFavorites}) => {

    const [aux, setAux] = useState(false);

    const dispatch = useDispatch()

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    }

    const handleFilter = (event) => {
        dispatch(filterCard(event.target.value))
    }

    return (
        <div>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
            {
                myFavorites?.map(({id, name, specie, gender, image, origin, status, onClose}) =>{
                    return(
                        <Card 
                        key={id}
                        id={id}
                        name={name}
                        species={specie}
                        gender={gender}
                        image={image}
                        origin={origin}
                        status={status}
                        onClose={onClose}
                        />
                    )
                })
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);