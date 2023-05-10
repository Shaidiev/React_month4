import React from 'react';
import {BrowserRouter, Route, Routes, Link} from "react-router-dom"
import MainPage from './Pages/MainPage';
import { useState } from 'react';
import ControlledSwitches from './UI/Switch/ControlledSwitches';
import './App.css'
import PokemonDescrip from './Pages/PokemonDescrip';


function App() {

  const [theme, setTheme] = useState('light')

  const changeAppTheme = () => {
    const newTheme = theme  === 'light' 
    ? 'dark' 
    : 'light' 
    setTheme(newTheme)
    
  }

  return (
    <BrowserRouter>
    
    <div className={`App ${theme}` }>
           <Link to='/' className='mainPage'>POKEMONS</Link>
           <ControlledSwitches
            onChange = {(isChecked) => {
            changeAppTheme()
        }}/> 
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pokemon/:id" element={<PokemonDescrip />} />

        </Routes>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
