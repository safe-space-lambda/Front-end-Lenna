import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './store/reducers';

import "bootstrap/dist/css/bootstrap.min.css";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

const rootElement = document.getElementById('root');
ReactDOM.render(
   <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  rootElement
);

