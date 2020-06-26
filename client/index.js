// import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import getLogger from './utils/logger';

const log = getLogger('App');

const init = () => {
  log.info('init() :: App starts booting...');
  console.log('called');
  ReactDOM.render(<App />, document.getElementById('app'));
};

// init app
init();
