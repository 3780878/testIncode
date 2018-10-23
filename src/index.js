import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import { rootReducer } from './redusers';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk, logger), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(

    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter> 
    </Provider> ,document.getElementById("root")
);