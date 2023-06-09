import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import Cards from '../Components/Cards/Cards'
import { fetchImage } from '../Components/API/Api'
import { Pagination } from '@mui/material'


function MainPage() {
  const [pokemonCards, setPokemonCards] = useState([]);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);

  const limit = 16;

  useEffect(() => {
    fetchImage({ limit, offset }).then(({ pokemonCards, count }) => {
      setPokemonCards([...pokemonCards]);
      const pageCount = Math.ceil(count / limit);
      setCount(pageCount);
    });
  }, [offset]);

  const handleChangePage = (event, page) => {
    setPage(page);
    setOffset((page - 1) * limit);
  };


  return (
    <div className='container'>
      <div className='toggle'></div>
      <div className='pokemonList'>
        {pokemonCards.map((pokemon) => (
          <Cards key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <div className='controls'>
       
    <Pagination
      className='pagination'
      page={page}
      count={count}
      onChange={handleChangePage}
    />
  </div>
</div> 
)
}

export default MainPage
