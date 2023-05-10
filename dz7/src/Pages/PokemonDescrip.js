import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchImage } from '../Components/API/Api';

function PokemonDescrip() {
  const { id } = useParams();
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetchImage().then((data) => {
      const pokemon = data.find(p => p.id.toString() === id);
      if (pokemon) {
        setPokemonData(pokemon);
      }
    });
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