import './App.css';
import Cards from './components/Cards/Cards.jsx';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
import { useState, useEffect} from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Forms from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';


function App() {

   const [characters, setCharacters] = useState ([]);



   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
        if (data.name) {
          const isDuplicate = characters.some((char) => char.id === data.id);
          if (isDuplicate) {
            window.alert('¡Este personaje ya está en pantalla!');
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      });
    }



   const onClose = (id) => {
      setCharacters(
         characters.filter((char) =>{
            return char.id !== Number(id)
         })
      )
   }

   function generarRandomId () {
      const randomId = Math.floor(Math.random() * 826) + 1;
      onSearch(randomId)
   } 

   const navigate = useNavigate();

   const [access, setAccess] = useState(false);
      const EMAIL = 'ejemplo@gmail.com';
      const PASSWORD = 'unaPassword';

      
      function login(userData) {
         if (userData.password === PASSWORD && userData.email === EMAIL) {
            setAccess(true);
            navigate('/home');
         }
      }
      useEffect(() => {
         !access && navigate('/');
      }, [access]);



   return (
      <div className='App'>
         {
            useLocation.pathname !== "/"
           ? <NavBar onSearch={onSearch} randomCharacter={generarRandomId} />
           :null
         }
         
         <Routes>
            <Route exact path='/' element={<Forms login={login} />} />
            <Route path='/About' element={<About />} />
            <Route path='/Home' element={ < Cards characters={characters} onClose={onClose} /> }/>
            <Route path='/Detail/:id' element={<Detail/>} />
            <Route path='/Favorites' element= {<Favorites/>} />
         </Routes>
      </div>
   );
}

export default App;
