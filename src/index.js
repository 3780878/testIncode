import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import './index.css';
import App from './App';
import appHistory from './history';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import { appReducer } from './reducers/index.reducer';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducer, composeEnhancers(
    applyMiddleware(thunk, logger)
));

ReactDOM.render(

    <Provider store = {store}>
        <Router history={appHistory}>
            <App />
        </Router> 
    </Provider> ,document.getElementById("root")
);
serviceWorker.unregister();