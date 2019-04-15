import React, { Component } from 'react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import configureStore, {history} from "./redux/store/configureStore";
import createSagaMiddleware from 'redux-saga'
import pokemonSaga from "./redux/sagas";
import MainContainer from "./containers/MainContainer";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore( [sagaMiddleware]);
sagaMiddleware.run(pokemonSaga);

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}> { /* place ConnectedRouter under Provider */ }
                <BrowserRouter>
                    <MainContainer />
                </BrowserRouter>
            </ConnectedRouter>
        </Provider>
    );
  }
}

export default App;
