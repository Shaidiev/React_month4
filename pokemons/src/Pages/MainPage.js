import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import Cards from '../Components/Cards/Cards'
import { fetchImage, fetchPokemons } from '../Components/API/Api'
import { Pagination } from '@mui/material'



const MainPage = () => {

  
  const [pokemonCards, setPokemonCards] = useState([])
  const [ count, setCount ] = useState(1);
  const [ page, setPage ] = useState(1);
  const [ offset, setOffset ] = useState(1);
  const limit = 10;


  useEffect(() => {
    fetchImage({ limit, offset }).then((data) => {
      setPokemonCards([...data])
      const pageCount = Math.ceil(data.count / limit)
      setCount(pageCount)
    })
  }, [ offset ])


const handleNext = () => {
    if (page === count) return
    setPage(page + 1);
    setOffset(offset + limit);
  }

  const handlePrev = () => {
    if (page === 1) return
    setPage(page - 1);
    setOffset(offset - limit);
  }

  
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
        onChange={(event, value) => setPage(value)}
        onNext={handleNext}
        onPrev={handlePrev}

      />
 
  </div>  
  )
}

export default MainPage