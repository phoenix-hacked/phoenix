import React, { Component } from 'react';

class SimpleNavbar extends Component {
  render () { 
    return (
      <nav className="navbar navbar-simple col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
        <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
          <a className="sidebar-brand brand-logo" href="index.html"><img src={require("../../../assets/images/logo-dark.png")} className="col-3" alt="logo" /></a>
          <span className="profile-text">Sign in</span>
        </div>
      </nav>
    );
  }
}

export default SimpleNavbar;
