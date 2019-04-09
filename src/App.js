import React, { Component } from 'react';
import NavBar from "./components/NavBar/NavBar";
import {Footer, MainContainer} from "./App.style";
import Pokedex from "./pages/Pokedex";
import DetailPage from "./pages/DetailPage";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <MainContainer>
            <NavBar />
              <Switch>
                  <Route exact path="/" component={Pokedex}/>
                  <Route path={`/detail_page/:id(\\d+)`} component={DetailPage}/>
                  <Redirect to="/" />
              </Switch>
            <Footer>Site developed by Corentin Doué</Footer>
          </MainContainer>
        </BrowserRouter>
    );
  }
}

export default App;
