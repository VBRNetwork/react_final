import Immutable from 'immutable'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger';
import {createStore, applyMiddleware, compose} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import config from 'config'
import persistedReducers from '../reducers'
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { createRouterMiddleware, initialRouterState } from 'connected-next-router'
import Router from 'next/router'

function createMiddlewares({isServer}) {
    let middlewares = [
        thunkMiddleware
    ];

    if (config.env === 'development' && typeof window !== 'undefined') {
        middlewares.push(createLogger({
            level: 'info',
            collapsed: true,
            stateTransformer: (state) => {
                let newState = {}

                for (let i of Object.keys(state)) {
                    if (Immutable.Iterable.isIterable(state[i])) {
                        newState[i] = state[i].toJS()
                    } else {
                        newState[i] = state[i]
                    }
                }

                return newState
            }
        }))
    }

    return middlewares
}

const routerMiddleware = createRouterMiddleware({
    Router,
    methods: {
        push: 'pushRoute',
        replace: 'replaceRoute',
        prefetch: 'prefetchRoute',
    },
});

let composed = compose(applyMiddleware(thunkMiddleware))

if (config.env === 'development'){
    composed = composeWithDevTools(applyMiddleware(logger,thunkMiddleware,routerMiddleware))
}

const makeConfiguredStore = (reducer, initialState) =>
    createStore(reducer, initialState, composed);

export const reducer = (state, {type, payload}) => {
    return state;
};

export const makeStore = (initialState = {}, {isServer, req, debug, storeKey, asPath}) => {

    if (asPath) {
        initialState.router = initialRouterState(asPath);
    }

    if (isServer) {
        initialState = initialState || {fromServer: 'foo'};
        return makeConfiguredStore(reducer, initialState);
    } else {
        const store = makeConfiguredStore(persistedReducers, initialState);
        store.__persistor = persistStore(store);
        // store.__persistor.purge();
        return store;
    }

}
