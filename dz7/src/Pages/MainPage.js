import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import Cards from '../Components/Cards/Cards'
import { fetchImage } from '../Components/API/Api'
import { Pagination } from '@mui/material'



const MainPage = () => {

  
  const [pokemonCards, setPokemonCards] = useState([])
  const [ count, setCount ] = useState(1);
  const [ page, setPage ] = useState(1);
  const [ offset, setOffset ] = useState(1);

  const limit = 10;


  useEffect(() => {
    fetchImage({ limit, offset }).then(({ pokemonCards, count}) => {
      setPokemonCards([...pokemonCards])
      const pageCount = Math.ceil(count / limit)
      setCount(pageCount)
     
    })
  }, [ offset ])

  const handleChange = (event, page) => {
    setPage(page);
    setOffset((page - 1) * limit);
  };

  
  return (
    <div className='container'>
    <div className='toggle'>
    </div>
    <div className='pokemonList'>
      {pokemonCards.map(pokemon => <Cards key = {pokemon.id} pokemon={pokemon}/>)}
    </div>
    <Pagination 
        page={page}
        count={count}
        onChange={handleChange}
        
      />
 
  </div>  
  )
}

export default MainPage