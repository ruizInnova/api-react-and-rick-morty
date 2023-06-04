import avatar from './assets/img/rick-morty.png';
import './App.css';
//import rutas
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

import Character from './components/Characters';




function App() {

  const [characters, setCharacters] = useState(null);


  const regPersonaje = async () => {
    //console.log('eres que!!');
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterapi = await api.json();
    setCharacters(characterapi.results);
    //console.log(characterapi);
  
  }
  
  
  //console.log(characters);


  return (
    <div className="App">
      <header className="App-header">
      <h1 className='title'>Rick & Morty</h1>

        {characters ?  (
                        <Character characters = {characters} setCharacters = {setCharacters}/>
                    ) : (
                      <div>
                        <img src={avatar} alt='Rick & Morty' className='img-home' />
                        <button onClick={regPersonaje} className='btn-search'>Buscar Personajes</button>
                      </div>
                    )}
      </header>
    </div>
  );
}

export default App;
