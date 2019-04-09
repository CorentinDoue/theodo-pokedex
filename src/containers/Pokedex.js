import React, {Component} from "react";
import Pokemon from "../components/Pokemon/Pokemon";
import {PokeContainer} from "../App.style";


// au niveau de l'architecture de ton application, la notion de containers est un peu bancale
// si tu mets tes pages dans ce dossier, renomme le plutôt `pages`

class Pokedex extends Component {
    render() {
        // là tu construis le tableau dans le render()
        // donc à chaque modification de ton composant Pokedex, tu vas recréer un tableau de 100 éléments, ce qui va te couter en perf
        // tu peux le créer en dehors de ta méthode render pour soulager un peu ton JS.
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
