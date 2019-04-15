import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import Pokemon from "../components/Pokemon/Pokemon";

const styles = {
    detailPage: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        paddingBottom: '2.5rem'
    },
};

class DetailPage extends Component {
    componentDidMount() {
        this.props.requestPokemon(parseInt(this.props.match.params.id, 10));
    }
    render() {
        const { classes, pokemons, ...other } = this.props;
        const pokemon = pokemons.find(pokemon => pokemon.id === parseInt(this.props.match.params.id, 10));

        return (
            <div className={classes.detailPage}>
                <Pokemon {...other} {...pokemon} details={true}/>
            </div>
        );
    }
}

export default withStyles(styles)(DetailPage);
