import axios from "axios"
import { requester } from "../../requester";

const BASE_URL = 'https://pokeapi.co/api/v2/'

export const fetchPokemons = async(params) => {
    try {
        const { data } = await requester.get('pokemon', {
            params
        })
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const fetchImage = async() => {
    try{
        const { data } = await axios.get(BASE_URL + 'pokemon?limit=20&offset=0')
        const pokemonCards = await Promise.all(
            data.results.map(async (pokemon) => {
                const res = await axios.get(pokemon.url)
                return {
                    id: res.data.id,
                    name: res.data.name,
                    image: res.data.sprites.other["official-artwork"].front_default,
                }
            }) 
        ) 
        return pokemonCards
        
    } catch (error) {
        console.error("ERROR")
    }
}

