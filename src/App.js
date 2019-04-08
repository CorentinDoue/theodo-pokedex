import React, { Component } from 'react';
import logo from './logo.svg';
import NavBar from "./components/NavBar/NavBar";
import Pokemon from "./components/Pokemon/Pokemon";
import {Footer, MainContainer, PokeContainer} from "./App.style";
import Pokedex from "./containers/Pokedex";
import DetailPage from "./containers/DetailPage";
import {Redirect, Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    let pokemons = [];
    for (let idPokemon = 1; idPokemon < 100; idPokemon++) {
      pokemons.push(<Pokemon key={idPokemon} idPokemon={idPokemon}/>);
    }
    return (
      <MainContainer>
        <NavBar />
          <Switch>
              <Route exact path="/" component={Pokedex}/>
              <Route path={`/detail_page/:id(\\d+)`} component={DetailPage}/>
              <Redirect to="/" />
          </Switch>
        <Footer>Site developed by Corentin Doué</Footer>
      </MainContainer>
    );
  }
}

export default App;
