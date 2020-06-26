import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import getLogger from './utils/logger';
import registerServiceWorker from './registerServiceWorker';

const log = getLogger('App');

const init = () => {
  log.info('init() :: App starts booting...');

  ReactDOM.render(<App />, document.getElementById('app'));
};

// init app
init();
registerServiceWorker();
