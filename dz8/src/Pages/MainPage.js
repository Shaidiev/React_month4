import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import Cards from '../Components/Cards/Cards'
import { fetchImage } from '../Components/API/Api'
import { Pagination } from '@mui/material'


import { Select, MenuItem } from '@mui/material';

function MainPage() {
  const [pokemonCards, setPokemonCards] = useState([]);
  const [count, setCount] = useState(1);
  const [page, setPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [generation, setGeneration] = useState(0);

  const limit = 16;

  useEffect(() => {
    fetchImage({ limit, offset, generation }).then(({ pokemonCards, count }) => {
      setPokemonCards([...pokemonCards]);
      const pageCount = Math.ceil(count / limit);
      setCount(pageCount);
    });
  }, [offset, generation]);

  const handleChangePage = (event, page) => {
    setPage(page);
    setOffset((page - 1) * limit);
  };

  const handleChangeGeneration = (event) => {
    setGeneration(event.target.value);
    setOffset(0);
    setPage(1);
  };

  return (
    <div className='container'>
      <div className='toggle'></div>
      <Select value={generation} className='select' onChange={handleChangeGeneration}>
          <MenuItem value={0}>All generations</MenuItem>
          <MenuItem value={1}>Generation I</MenuItem>
          <MenuItem value={2}>Generation II</MenuItem>
          <MenuItem value={3}>Generation III</MenuItem>
          <MenuItem value={4}>Generation IV</MenuItem>
          <MenuItem value={5}>Generation V</MenuItem>
          <MenuItem value={6}>Generation VI</MenuItem>
          <MenuItem value={7}>Generation VII</MenuItem>
          <MenuItem value={8}>Generation VIII</MenuItem>
       </Select>
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
