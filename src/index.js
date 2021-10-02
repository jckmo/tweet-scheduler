import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'

import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import appReducer from './reducers/appReducer.js'

const BACKEND = 'http://localhost:3001'
const store = createStore(appReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path='/' component={App}/>
    </Router>
  </Provider>
  ,document.getElementById('root')
);

export {BACKEND}