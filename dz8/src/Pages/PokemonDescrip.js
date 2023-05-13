import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PokemonDescrip() {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = {
          id: response.data.id,
          name: response.data.name,
          image: response.data.sprites.other?.['official-artwork']?.front_default,
          level: response.data.base_experience,
          attack: response.data.stats[1]?.base_stat,
          speed: response.data.stats[5]?.base_stat,
          weight: response.data.weight,
        };
        setPokemonData(pokemon);
      } catch (error) {
        setError('Failed to fetch data');
      }
    }

    fetchData();
  }, [id]);

  return (
    <div className='pokemonContainer'>
      <div className='pokemons'>
        {pokemonData ? (
          <img src={pokemonData.image} alt={pokemonData.name} />
        ) : (
          <div>{error || 'Loading...'}</div>
        )}
      </div>
      <div className='descripALL'>
        <h1>{pokemonData ? pokemonData.name.toUpperCase() : 'Loading...'}</h1>
        <div className='description'>
          <h3 className='level'>Level: {pokemonData?.level}</h3>
          <h3 className='attack'>Attack: {pokemonData?.attack}</h3>
          <h3 className='speed'>Speed: {pokemonData?.speed}</h3>
          <h3 className='weight'>Weight: {pokemonData?.weight}</h3>
        </div>
      </div>
    </div>
  );
}

export default PokemonDescrip;
