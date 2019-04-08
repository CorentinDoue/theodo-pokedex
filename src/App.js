import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from "./components/NavBar/NavBar";
import Pokemon from "./components/Pokemon/Pokemon";
import {PokeContainer} from "./App.style";

class App extends Component {
  render() {
    let pokemons = [];
    for (let idPokemon = 1; idPokemon < 10; idPokemon++) {
      pokemons.push(<Pokemon key={idPokemon} idPokemon={idPokemon}/>);
    }
    return (
      <div>
        <NavBar />
        <PokeContainer>
          {pokemons}
        </PokeContainer>
      </div>
    );
  }
}

export default App;
