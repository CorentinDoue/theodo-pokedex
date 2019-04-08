import React, {Component} from "react";
import {
    convertPoundsToKilograms,
    getAbilities,
    getFirstAbility,
    getMoves,
    getTypes
} from "../components/Pokemon/Pokemon.service";
import {PokeCard} from "../components/Pokemon/Pokemon.style";
import {withStyles} from "@material-ui/core";
import PokemonDetail from "../components/Pokemon/PokemonDetail";

const styles = {
    detailPage: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        paddingBottom: '2.5rem'
    },
};

class DetailPage extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.detailPage}>
                <PokemonDetail idPokemon={this.props.match.params.id} />
            </div>
        );
    }
}

export default withStyles(styles)(DetailPage);
