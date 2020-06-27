import React from 'react';

import GoogleLogin from '../../Login'

const SimpleNavbar = (props) => {

  return (
    <nav className="navbar navbar-simple col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
        <a className="sidebar-brand brand-logo" href="index.html"><img src={require("../../../assets/images/logo-dark.png")} className="col-3" alt="logo" /></a>
        <button className="loginBtn loginBtn--google mt-5 mb-5" id="customBtn">
          Sign in with Google
            </button>
      </div>
    </nav>
  );
}

export default SimpleNavbar;
