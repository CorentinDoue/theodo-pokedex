export const getPokemon = (state, pokemonId) => state.pokemons.find(pokemon =>  pokemon.id === pokemonId);
