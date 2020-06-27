import React from 'react';
import Counter from '../Counter';
import Random from '../Random';
import classes from './App.module.css';
import GoogleLogin from '../Login';

const App = () => (
  <div className={classes.container}>
    <GoogleLogin />
  </div>
);

export default App;
