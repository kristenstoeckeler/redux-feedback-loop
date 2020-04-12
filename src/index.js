//necessary imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


//feedback reducer stores and returns input info from DOM in an array
const feedbackReducer = (state = [], action) => {
    if (action.type === 'FEEDBACK') {
        return action.payload;
    }
    return state
}

//oh jesus now I can't remember what the form reducer is doing. 
const formReducer = (state = [], action) => {
    if (action.type === 'FORM') {
        return action.payload;
    }
    return state
}

//houses data from reducers and packages it in Provider for App
const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
        formReducer
    }),

    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
