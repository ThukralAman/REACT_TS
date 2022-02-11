import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux'; 

import {createStore, compose} from 'redux';

import rootReducer from './redux/reducers'; // index.js

const store = createStore(rootReducer, 
    compose(window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

 