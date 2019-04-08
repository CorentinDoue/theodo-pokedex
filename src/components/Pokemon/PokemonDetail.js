import * as React from "react";
import {convertPoundsToKilograms, getAbilities, getFirstAbility, getMoves, getTypes} from "./Pokemon.service";
import {withStyles} from "@material-ui/core";
const styles = {
    detailCard: {
        textAlign: 'center',
        fontFamily: 'Pokemon GB'
    }
};

class PokemonDetail extends React.Component{
    idPokemon;
    constructor (props) {
        super (props);
        this.state = {
            drawerOpen: false
        };
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
        const { classes } = this.props;
        if (this.state.pokemon) {
            return (
                <div className={classes.detailCard}>
                    <h2>{this.state.pokemon.name.toUpperCase()}</h2>
                    <img src={this.state.pokemon.sprites.front_default}/>
                    <p><u>Weight :</u> {convertPoundsToKilograms(this.state.pokemon.weight)} kg</p>
                    <p><u>Height :</u> {this.state.pokemon.height}</p>
                    {getTypes(this.state.pokemon) &&<p><u>Types :</u></p>}
                    {getTypes(this.state.pokemon)}
                    {getAbilities(this.state.pokemon) &&<p><u>Abilities :</u></p>}
                    {getAbilities(this.state.pokemon)}
                    {getMoves(this.state.pokemon) &&<p><u>Moves :</u></p>}
                    {getMoves(this.state.pokemon)}
                </div>
            );
        } else {
            return null;
        }

    }
}

export default withStyles(styles)(PokemonDetail);
