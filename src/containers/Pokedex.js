import React, {Component} from "react";
import Pokemon from "../components/Pokemon/Pokemon";
import {PokeContainer} from "../App.style";



class Pokedex extends Component {
    render() {
        let pokemons = [];
        for (let idPokemon = 1; idPokemon < 100; idPokemon++) {
            pokemons.push(<Pokemon key={idPokemon} idPokemon={idPokemon}/>);
        }
        return (
            <PokeContainer>
                {pokemons}
            </PokeContainer>
        );
    }
}

export default Pokedex;
