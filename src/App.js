/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import CreateLogger from 'redux-logger';


import HelloWorld from "./components/HelloWorld";


export default class App extends Component {
  render() {
    return (
      <HelloWorld/>
    );
  }
}
