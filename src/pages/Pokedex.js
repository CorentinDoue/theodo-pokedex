import React, {Component} from "react";
import Pokemon from "../components/Pokemon/Pokemon";
import {PokeContainer} from "../App.style";


class Pokedex extends Component {
    state = { pokemons: this.generatePokemons() };

    generatePokemons() {
        const pokemons = [];
        for (let idPokemon = 1; idPokemon < 100; idPokemon++) {
            pokemons.push(<Pokemon key={idPokemon} idPokemon={idPokemon}/>);
        }
        return pokemons;
    }
    render() {
        return (
            <PokeContainer>
                {this.state.pokemons}
            </PokeContainer>
        );
    }
}

export default Pokedex;
