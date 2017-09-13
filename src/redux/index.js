import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];
const devTools = window.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || (() => f => f);
const enhancers = [applyMiddleware(...middleWares)];

export default function createAppStore(initialValue = {}) {

    let store;

    if (process.env.NODE_ENV === 'development') {

        enhancers.push(devTools());
        store = createStore(reducers(), initialValue, compose(...enhancers));

    } else {

        store = createStore(reducers(), initialValue, compose(...enhancers));
    }

    return store
}
