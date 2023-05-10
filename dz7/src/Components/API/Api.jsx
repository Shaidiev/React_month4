import axios from "axios"

const BASE_URL = 'https://pokeapi.co/api/v2/'

export const fetchImage = async(params) => {
    try{
        const { data } = await axios.get(BASE_URL + 'pokemon', {
            params
        })
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
        return {pokemonCards , count: data.count}
        
    } catch (error) {
        console.error("ERROR")
    }
}

