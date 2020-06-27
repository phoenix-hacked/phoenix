/**
 * @file App component.
 */

import React from 'react';

import Timestamp from './Timestamp';

import GoogleLogin from './login'

import './App.css'


const App = () => {
  return (
    <div>
      <GoogleLogin />
    </div>
  );
};

export default App;
