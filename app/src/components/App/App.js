import React from 'react';
import classes from './App.module.css';
import GoogleLogin from '../Login';

const App = () => (
  <div className={classes.container}>
    <GoogleLogin />
  </div>
);

export default App;
