import { Link } from "react-router-dom";
import style from "./Card.modules.css"
import { addFav, removeFav } from "../../Redux/actions";
import { connect } from "react-redux";
import { useState, useEffect} from "react";

const Card = ({id, name, status, species, gender, image, origin, onClose, addFav, removeFav, myFavorites}) => {

   const [isFav, setFav] = useState (false);

   const handleFavorite = () => {
      isFav ? removeFav(id) : addFav({id, name, status, species, gender, image, origin});
      setFav(!isFav)
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setFav(true);
         }
      });
   }, [id, myFavorites]);



   return (
      <div className={style.containers}>
      {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
      }
         <button onClick={()=> onClose(id)}>X</button>
         <Link to={`/detail/${id}`} >
            <h3 className="card-name">{name}</h3>
            <h2>Id: {id}</h2>
            <h2>Name: {name}</h2>
            <h2>Status: {status}</h2>
            <h2>Species: {species}</h2>
            <h2>Gender: {gender}</h2>
            <h2>Origin: {origin}</h2>
            < img src={image} alt='' /> 
         </Link>
      </div>

   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapStateToProps =(state) => {
   return {
      myFavorites: state.myFavorites
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card);