import { connect } from 'react-redux'
import * as pokemonActions from '../redux/actions'
import * as React from "react";
import NavBar from "../components/NavBar/NavBar";
import Pokedex from "../pages/Pokedex";
import DetailPage from "../pages/DetailPage";
import {Footer, Container, Error} from "./MainContainer.style";
import {Redirect, Route, Switch} from "react-router-dom";

class MainContainer extends React.Component{
    render() {
        return (
            <Container>
                <NavBar />
                {this.props.error && <Error>{this.props.error}</Error>}
                <Switch>
                    <Route exact path="/" render={() => (
                        <Pokedex {...this.props} />
                    )}/>
                    <Route {...this.props} path={`/detail_page/:id(\\d+)`} render={(routeProps) => (
                        <DetailPage {...routeProps} {...this.props} />
                    )}/>
                    <Redirect to="/" />
                </Switch>
                <Footer>Site developed by Corentin Doué</Footer>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        pokemons: state.pokemons,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => ({
    requestPokemon: (id) => dispatch(pokemonActions.requestPokemon(id)),
    selectPokemon: (id) => dispatch(pokemonActions.selectPokemon(id)),
    unselectPokemon: (id) => dispatch(pokemonActions.unselectPokemon(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer)
