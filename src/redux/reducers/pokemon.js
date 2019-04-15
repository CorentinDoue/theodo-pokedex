import {
    GET_POKEMON_REQUEST,
    GET_POKEMON_SUCCESS,
    GET_POKEMON_FAIL,
    SELECT_POKEMON,
    UNSELECT_POKEMON,
} from '../constants/pokemon'
import {replaceInArrayById} from "../../services/utils";

const initialState = [];

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMON_REQUEST:
            return [
                ...state,
                {
                    id: action.pokemonId,
                    pending: true,
                    pokemon: null,
                    selected: false
                }
            ];

        case GET_POKEMON_SUCCESS:
            return replaceInArrayById(state, action.pokemonId, {
                    ...state.find(pokemon => pokemon.id === action.pokemonId),
                    pending: false,
                    pokemon: action.pokemon
                });

        case GET_POKEMON_FAIL:
            return state.filter(pokemon => pokemon.id !== action.pokemonId).slice(0);

        case SELECT_POKEMON:
            return replaceInArrayById(state, action.pokemonId, {
                    ...state.find(pokemon => pokemon.id === action.pokemonId),
                    selected: true
                });

        case UNSELECT_POKEMON:
            return replaceInArrayById(state, action.pokemonId, {
                    ...state.find(pokemon => pokemon.id === action.pokemonId),
                    selected: false
                });

        default:
            return state
    }
}
