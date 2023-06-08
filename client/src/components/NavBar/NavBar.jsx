import SearchBar from "../SearchBar/SearchBar";
import { Link, NavLink} from "react-router-dom";
import style from "./NavBar.modules.css"




const NavBar = ({ onSearch, randomCharacter}) => {
    function generarRandomId() {
        randomCharacter();
    }
    return (
        <div className={style.div}>
            <SearchBar onSearch={onSearch} />
            <button onClick={generarRandomId}>Random</button>
            <Link to="/home">
                <button>Home</button>
            </Link>
            <Link to="/About">
                <button>About</button>
            </Link>
            <NavLink to='/Favorites'>
                <button>FAVORITES</button>
            </NavLink>
        </div>
    )
}

export default NavBar;