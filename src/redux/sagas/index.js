import { call, put, takeEvery, select } from 'redux-saga/effects';
import {getPokemon} from "../selectors";
import {fetchPokemonFromAPI} from "../../services/api";
import {getPokemonFail, getPokemonRequest, getPokemonSuccess} from "../actions";

export function* fetchPokemon(action) {
    const pokemon = yield select(getPokemon, action.pokemonId);
    console.log(pokemon);
    if (pokemon) {
        return;
    }
    yield put(getPokemonRequest(action.pokemonId));
    try {
        const pokemon = yield call(fetchPokemonFromAPI, action.pokemonId);
        yield put(getPokemonSuccess(action.pokemonId, pokemon));
    } catch (error) {
        yield put(getPokemonFail(action.pokemonId));
    }
}

function* pokemonSaga() {
    yield takeEvery("POKEMON_REQUESTED", fetchPokemon);
}

export default pokemonSaga;
