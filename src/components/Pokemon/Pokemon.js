import * as React from "react";
import {convertPoundsToKilograms, getFirstAbility} from "./Pokemon.service";
import {PokeCard} from "./Pokemon.style";
import Avatar from "@material-ui/core/Avatar";
import {withStyles} from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";

const styles = {
    avatar: {
        margin: 10,
        width: 100,
        height: 100,
        backgroundColor: 'white',
        cursor: 'pointer'
    },
};

class Pokemon extends React.Component{
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

    toggleDrawer = (open) => () => {
        this.setState({
            drawerOpen: open,
        });
    };

    render() {
        const { classes } = this.props;
        if (this.state.pokemon) {
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
                        </PokeCard>
                    </Drawer>
                </div>
                // <PokeCard>
                //     <h2><u>{this.state.pokemon.name.toUpperCase()}</u></h2>
                //     <img src={this.state.pokemon.sprites.front_default}/>
                //     <p>First ability : {getFirstAbility(this.state.pokemon)}</p>
                //     <p>Weight : {convertPoundsToKilograms(this.state.pokemon.weight)} kg</p>
                // </PokeCard>
            );
        } else {
            return null;
        }

    }
}

export default withStyles(styles)(Pokemon);
