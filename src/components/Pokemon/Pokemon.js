import * as React from "react";
import {convertPoundsToKilograms, getAbilities, getFirstAbility, getMoves, getTypes} from "./Pokemon.service";
import {PokeCard} from "./Pokemon.style";
import Avatar from "@material-ui/core/Avatar";
import {withStyles} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const styles = {
    avatar: {
        margin: 10,
        width: 100,
        height: 100,
        backgroundColor: 'white',
        cursor: 'pointer'
    },
    button: {
        color: 'white'
    },
    detailCard: {
        textAlign: 'center',
        fontFamily: '"Pokemon GB", sans-serif'
    }
};

class Pokemon extends React.Component{
    render() {
        const { classes } = this.props;

        if (!this.props.pokemon) {
            return null;
        }
        if (this.props.details) {
            return (
                <div className={classes.detailCard}>
                    <h2>{this.props.pokemon.name.toUpperCase()}</h2>
                    <img alt={this.props.pokemon.name} src={this.props.pokemon.sprites.front_default}/>
                    <p><u>Weight :</u> {convertPoundsToKilograms(this.props.pokemon.weight)} kg</p>
                    <p><u>Height :</u> {this.props.pokemon.height}</p>
                    {getTypes(this.props.pokemon) &&
                        <div>
                            <p><u>Types :</u></p>
                            <ul>{getTypes(this.props.pokemon).map(type => <li key={type}>{type}</li>)}</ul>
                        </div>}
                    {getAbilities(this.props.pokemon) &&
                        <div>
                            <p><u>Abilities :</u></p>
                            <ul>{getAbilities(this.props.pokemon).map(ability => <li key={ability}>{ability}</li>)}</ul>
                        </div>}
                    {getMoves(this.props.pokemon) &&
                        <div>
                            <p><u>Moves :</u></p>
                            <ul>{getMoves(this.props.pokemon).map(move => <li key={move}>{move}</li>)}</ul>
                        </div>}
                </div>
            );
        }
        return (
            <div>
                <Avatar alt={this.props.pokemon.name} src={this.props.pokemon.sprites.front_default} className={classes.avatar} onClick={() => this.props.selectPokemon(this.props.pokemon.id)} />
                <Drawer open={this.props.selected} onClose={() => this.props.unselectPokemon(this.props.pokemon.id)}>
                    <PokeCard
                        tabIndex={0}
                        role="button"
                        onClick={() => this.props.unselectPokemon(this.props.pokemon.id)}
                        onKeyDown={() => this.props.unselectPokemon(this.props.pokemon.id)}
                    >
                        <h2>{this.props.pokemon.name.toUpperCase()}</h2>
                        <img alt={this.props.pokemon.name} src={this.props.pokemon.sprites.front_default}/>
                        <p><u>First ability :</u> {getFirstAbility(this.props.pokemon)}</p>
                        <p><u>Weight :</u> {convertPoundsToKilograms(this.props.pokemon.weight)} kg</p>
                        <Button variant="contained" color="primary" component={Link} to={`/detail_page/${this.props.id}`}>
                            More
                        </Button>
                    </PokeCard>
                </Drawer>
            </div>
        );

    }
}

Pokemon.defaultProps = {
    details: false
};

export default withStyles(styles)(Pokemon);
