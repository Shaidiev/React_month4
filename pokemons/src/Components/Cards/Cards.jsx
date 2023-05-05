import React from 'react'
import classes from './Cards.module.css'



function Cards({pokemon}) {
    
  return (
    <div className={classes.cards}>
    <img className={classes.img} src={pokemon.image}/>
    <div className={classes.description}>
         <div className={classes.name}>{pokemon.name.toUpperCase()}</div>
    </div>
    
    </div>
  )
}

export default Cards