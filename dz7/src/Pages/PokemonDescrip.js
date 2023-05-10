import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PokemonDescrip() {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = {
          id: response.data.id,
          name: response.data.name,
          image: response.data.sprites.other['official-artwork'].front_default,
        };
        setPokemonData(pokemon);
      } catch (error) {
        console.error(error);
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
          <div>Loading...</div>
        )}
      </div>
      <div className='descripALL'>
        <h1>{pokemonData ? pokemonData.name.toUpperCase() : 'Loading...'}</h1>
        <div className='description'></div>
      </div>
    </div>
  );
}

export default PokemonDescrip;
