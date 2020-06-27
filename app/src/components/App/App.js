import React from 'react';
import classes from './App.module.css';
// import GoogleLogin from '../Login';
import './App.scss';
import { withRouter } from 'react-router-dom';
import AppRoutes from './Router';
import Navbar from '../Library/shared/Navbar';
import Sidebar from '../Library/shared/Sidebar';
import Footer from '../Library/shared/Footer';
import SimpleNavbar from 'components/Library/shared/SimpleNavbar';

import Home from './Home'

const App = (props) => {
  return (
    <Home />
  )
}

export default withRouter(App);
