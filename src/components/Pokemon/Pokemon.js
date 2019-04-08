import * as React from "react";
import {convertPoundsToKilograms, getFirstAbility} from "./Pokemon.service";
import {PokeCard} from "./Pokemon.style";


class Pokemon extends React.Component{
    idPokemon;
    constructor (props) {
        super (props);
        this.state = {};
    }

    componentDidMount() {
        this.getPokemon(this.props.idPokemon);
    }
    async getPokemon(id) {
        try {
            let response = await fetch(
                `https://pokeapi.co/api/v2/pokemon/${id}`,
            );
            let pokemon = await response.json();
            // console.log(pokemon);
            this.setState({pokemon});
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        if (this.state.pokemon) {
            return (
                <PokeCard>
                    <h2><u>{this.state.pokemon.name.toUpperCase()}</u></h2>
                    <img src={this.state.pokemon.sprites.front_default}/>
                    <p>First ability : {getFirstAbility(this.state.pokemon)}</p>
                    <p>Weight : {convertPoundsToKilograms(this.state.pokemon.weight)} kg</p>
                </PokeCard>
            );
        } else {
            return null;
        }

    }
}

export default Pokemon;
