import {
    GET_POKEMON_FAIL,
} from '../constants/pokemon'

const initialState = null;

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_POKEMON_FAIL:
            return action.error;
        default:
            return state
    }
}
