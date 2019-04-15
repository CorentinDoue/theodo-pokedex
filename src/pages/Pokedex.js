import React, {Component} from "react";
import Pokemon from "../components/Pokemon/Pokemon";
import {PokeContainer} from "./Pokedex.style";



class Pokedex extends Component {

    componentDidMount() {
        this.requestPokemons()
    }

    requestPokemons() {
        for (let idPokemon = 1; idPokemon < 4; idPokemon++) {
            this.props.requestPokemon(idPokemon);
        }
    }
    render() {
        const {pokemons, ...other} = this.props;
        return (
            <PokeContainer>
                {pokemons.map(pokemon => <Pokemon {...Object.assign(other, pokemon)} key={pokemon.id}  />)}
            </PokeContainer>
        );
    }
}

export default Pokedex;
