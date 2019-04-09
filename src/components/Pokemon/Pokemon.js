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
    state = {
        drawerOpen: false
    };

    componentDidMount() {
        this.getPokemon(this.props.idPokemon);
    }
    async getPokemon(id) {
        try {
            const response = await fetch(
                process.env.REACT_APP_POKE_API_URL + id
            );
            let pokemon = await response.json();
            this.setState({pokemon});
        } catch (error) {
            console.error(error);
        }
    }

    toggleDrawer = (open) => () => {
        this.setState({
            drawerOpen: open,
        });
    };

    render() {
        const { classes } = this.props;

        if (!this.state.pokemon) {
            return null;
        }
        if (this.props.details) {
            return (
                <div className={classes.detailCard}>
                    <h2>{this.state.pokemon.name.toUpperCase()}</h2>
                    <img src={this.state.pokemon.sprites.front_default}/>
                    <p><u>Weight :</u> {convertPoundsToKilograms(this.state.pokemon.weight)} kg</p>
                    <p><u>Height :</u> {this.state.pokemon.height}</p>
                    {getTypes(this.state.pokemon) &&
                        <div>
                            <p><u>Types :</u></p>
                            <ul>{getTypes(this.state.pokemon).map(type => <li key={type}>{type}</li>)}</ul>
                        </div>}
                    {getAbilities(this.state.pokemon) &&
                        <div>
                            <p><u>Abilities :</u></p>
                            <ul>{getAbilities(this.state.pokemon).map(ability => <li key={ability}>{ability}</li>)}</ul>
                        </div>}
                    {getMoves(this.state.pokemon) &&
                        <div>
                            <p><u>Moves :</u></p>
                            <ul>{getMoves(this.state.pokemon).map(move => <li key={move}>{move}</li>)}</ul>
                        </div>}
                </div>
            );
        }
        return (
            <div>
                <Avatar alt={this.state.pokemon.name} src={this.state.pokemon.sprites.front_default} className={classes.avatar} onClick={this.toggleDrawer(true)} />
                <Drawer open={this.state.drawerOpen} onClose={this.toggleDrawer( false)}>
                    <PokeCard
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer( false)}
                        onKeyDown={this.toggleDrawer( false)}
                    >
                        <h2>{this.state.pokemon.name.toUpperCase()}</h2>
                        <img src={this.state.pokemon.sprites.front_default}/>
                        <p><u>First ability :</u> {getFirstAbility(this.state.pokemon)}</p>
                        <p><u>Weight :</u> {convertPoundsToKilograms(this.state.pokemon.weight)} kg</p>
                        <Button variant="contained" color="primary" component={Link} to={`/detail_page/${this.props.idPokemon}`}>
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
