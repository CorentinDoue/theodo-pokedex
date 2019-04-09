import * as React from "react";
import {convertPoundsToKilograms, getFirstAbility} from "./Pokemon.service";
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
    }
};

class Pokemon extends React.Component{
    idPokemon; // c'est quoi ?

    constructor (props) { // tu n'as plus besoin de passer par un constructor maintenant
        super (props);
        this.state = {
            drawerOpen: false
        };
    }

    // tu peux écrire directement
    // state = {
    //     drawerOpen: false
    // }

    componentDidMount() {
        this.getPokemon(this.props.idPokemon);
    }
    async getPokemon(id) { // trop bien que tu utilises async/await
        try {
            let response = await fetch( // utilise toujours const au lieu de let, à moins que tu mutes ta variable, ce qui n'est pas conseillé
                `https://pokeapi.co/api/v2/pokemon/${id}`, // crée une constante pour mettre l'URL dedans
            );
            let pokemon = await response.json();
            this.setState({pokemon}); // bien que tu utilises ce sucre synthaxique !
        } catch (error) {
            console.error(error);
        }
    }

    toggleDrawer = (open) => () => { // top cette utilisation des arrow functions
        this.setState({
            drawerOpen: open,
        });
    };

    render() {
        const { classes } = this.props;
        // c'est mieux de faire un early return pour que ton code soit moins indenté et plus lisible
        // c'est à dire
        // if (!this.state.pokemon) {
        //    return null;
        //}
        // return <MyComponent />
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
                            <Button variant="contained" color="primary"> {/* Alors soit tu mets un bouton, soit tu mets un lien, mais pas les deux. Au niveau du HTML, ce n'est pas cohérent, des navigateurs risques de faire des trucs chelous, notemment pour les mal voyants. */}
                                <Link to={`/detail_page/${this.props.idPokemon}`}>More</Link>
                            </Button>
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
