import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import pokemons from './pokemon'
import error from './error'

export default (history) => combineReducers({
    router: connectRouter(history),
    pokemons,
    error
    // rest of your reducers
})
