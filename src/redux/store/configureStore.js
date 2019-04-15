import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from '../reducers'

export const history = createBrowserHistory();

export default function configureStore(middlewares = []) {

    middlewares.push(thunkMiddleware);
    middlewares.push(routerMiddleware(history)); // for dispatching history actions

    let composeEnhancers = compose;

    if (process.env.NODE_ENV === 'development') {
        if ('__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' in window) {
            composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        }

        const loggerMiddleware = createLogger()
        middlewares.push(loggerMiddleware)
    }

    const store = createStore(
        createRootReducer(history),
        composeEnhancers(applyMiddleware(...middlewares))
    );

    return store
}
