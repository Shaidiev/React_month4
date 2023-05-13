import React from 'react';
import classes from './Cards.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Cards({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className={classes.cards}>
      <img className={classes.img} src={pokemon.image} alt={pokemon.name} />
      <div className={classes.description}>
        <div className={classes.name}>{pokemon.name.toUpperCase()}</div>
      </div>
    </Link>
  );
}

export default Cards;