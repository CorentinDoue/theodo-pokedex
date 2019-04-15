import {
    POKEMON_REQUESTED,
    GET_POKEMON_REQUEST,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_FAIL,
    SELECT_POKEMON,
    UNSELECT_POKEMON,
} from '../constants/pokemon';

export function requestPokemon(pokemonId) {
    return {
        type: POKEMON_REQUESTED,
        pokemonId
    }
}

export function getPokemonRequest(pokemonId) {
    return {
        type: GET_POKEMON_REQUEST,
        pokemonId
    }
}

export function getPokemonSuccess(pokemonId, pokemon) {
    return {
        type: GET_POKEMON_SUCCESS,
        pokemonId,
        pokemon
    }
}

export function getPokemonFail(pokemonId) {
    return {
        type: GET_POKEMON_FAIL,
        pokemonId
    }
}

export function selectPokemon(pokemonId) {
    return {
        type: SELECT_POKEMON,
        pokemonId
    }
}

export function unselectPokemon(pokemonId) {
    return {
        type: UNSELECT_POKEMON,
        pokemonId
    }
}
