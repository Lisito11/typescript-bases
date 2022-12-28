import axios from "axios";
import { Pokemon } from './../interfaces';

export const getPokemon = async (pokemonId: number) : Promise<number> => {
    const resp = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    
    console.log(resp.data.name);
    
    return 1;
}