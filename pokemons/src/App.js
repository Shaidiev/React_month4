import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import Cards from './Components/Cards/Cards';
import { fetchImage, fetchPokemons } from './Components/API/Api';
import ControlledSwitches from './UI/Switch/ControlledSwitches';



function App() {

  const [theme, setTheme] = useState('light')
  const [pokemonCards, setPokemonCards] = useState([])
  const [change, setChange] = useState('dark')

  const changeAppTheme = () => {
    const newTheme = theme  === 'light' 
    ? 'dark' 
    : 'light' 
    setTheme(newTheme)
    
  }
 

  useEffect(() => {
        fetchPokemons().then((data) => {
          console.log(data)
            setPokemonCards([...data.results])
        })
  }, [])

  useEffect(() => {
    fetchImage().then((data) => {
      setPokemonCards([...data])
    })
  }, [])

  

  return (
    <div className={`App ${theme}`}>
      POKEMONS
      <div className='container'>
        <ControlledSwitches
        onChange = {(isChecked) => {
          changeAppTheme()
        }}/>
        <div className='toggle'>
        </div>
        <div className='pokemonList'>
          {pokemonCards.map(pokemon => <Cards key = {pokemon.id} pokemon={pokemon}/>)}
        </div>
     
      </div>  
      
        
     </div>
  );
}

export default App;
