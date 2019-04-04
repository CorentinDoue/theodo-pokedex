import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Pokemon from "./components/Pokemon/Pokemon";

class App extends Component {
  render() {
    let pokemons = [];
    for (let idPokemon = 1; idPokemon < 10; idPokemon++) {
      pokemons.push(<Pokemon key={idPokemon} idPokemon={idPokemon}/>);
    }
    return (
      <div className="App">
        <NavBar />
        <header className="App-header">
          {pokemons}
        </header>
      </div>
    );
  }
}

export default App;
