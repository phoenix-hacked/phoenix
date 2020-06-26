import React, { Component } from 'react';
import { Provider } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import configureStore from './store';

import CounterComponent from './components/counter';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to CRA-REDUX-SAGA-TEMPLATE</h1>
          </header>
          <p className="App-intro">
            Try the 1 second delayed counter below. All powererd by
            <b> Create-React-App, Redux, Redux-Saga</b>
          </p>
          <p>
            Try clicking the Button below with the Redux Chrome Extension
            Installed
          </p>
          <CounterComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
