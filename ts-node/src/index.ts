
// import { getPokemon } from './generics/get-pokemon';
import { Pokemon } from './decorators/pokemon-class';


// getPokemon(1)
//     .then( resp => console.log(resp))
//     .catch(error => console.log(error))
//     .finally(() => console.log('Fin de getPokemon'))

const charmander = new Pokemon('Charmander');


// (Pokemon.prototype as any).customName = 'Pikachu';

console.log(charmander.savePokemonToDB(50));
