import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { rootReducer } from './redusers';

import logger from 'redux-logger';
import thunk from 'redux-thunk';


const middleware = {thunk, logger};
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
export const store = createStore(rootReducer, middleware, enhancer );

ReactDOM.render(

    <Provider store = {store}>
        <BrowserRouter>
            <App />
        </BrowserRouter> 
    </Provider> ,document.getElementById("root")
);