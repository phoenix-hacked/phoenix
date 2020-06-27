import React, { useEffect, useState } from 'react';
import classes from './App.module.css';
// import GoogleLogin from '../Login';
import './App.scss';
import { withRouter } from 'react-router-dom';
import { gapi, loadAuth2 } from 'gapi-script';
import axios from 'axios';

import { Spinner } from 'react-bootstrap';



import AppRoutes from './Router';
import Navbar from '../Library/shared/Navbar';
import Sidebar from '../Library/shared/Sidebar';
import Footer from '../Library/shared/Footer';
import SimpleNavbar from 'components/Library/shared/SimpleNavbar';
import { setCookie, getCookie, eraseCookie } from '../../utils';

const clientID = process.env.REACT_APP_CLIENT_ID
const Home = (props) => {
  const [isFullPageLayout, setIsFullPageLayout] = useState(false);

  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(getCookie('ereventapp'));
  const [userToken, setUserToken] = useState(null);

  const onRouteChanged = () => {
    console.log("ROUTE CHANGED", props.location.pathname);
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/user-pages/login-1', '/user-pages/login-2', '/user-pages/register-1', '/user-pages/register-2', '/user-pages/lockscreen', '/error-pages/error-404', '/error-pages/error-500', '/general-pages/landing-page', '/dashboard'];
    for(let i = 0; i < fullPageLayoutRoutes.length; i++) {
      if(props.location.pathname === fullPageLayoutRoutes[i]) {
        setIsFullPageLayout(true);
        document.querySelector('.page-body-wrapper') ? document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper') : null;
        break;
      } else {
        setIsFullPageLayout(false)
        document.querySelector('.page-body-wrapper') ? document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper') : null;
      }
    }
  }
  useEffect(() => {
    onRouteChanged();
  }, []);

  if(isFullPageLayout) {

  };

  useEffect(() => {
    async function fetchAuth() {
      let auth2 = await loadAuth2(clientID, '')
      if(auth2.isSignedIn.get()) {
        updateUser(auth2.currentUser.get())
      } else {
        attachSignin(document.getElementById('customBtn'), auth2);
      }
    }
    fetchAuth();
  }, [])

  useEffect(() => {
    async function reFetchAuth() {
      let auth2 = await loadAuth2(clientID, '')
      attachSignin(document.getElementById('customBtn'), auth2);
    }
    if(!userToken) {
      reFetchAuth();
    }
  }, [userToken]);

  const updateUser = (userToken) => {
    const email = userToken.getBasicProfile().getEmail();
    const name = userToken.getBasicProfile().getName();
    const profileImg = userToken.getBasicProfile().getImageUrl();

    axios.post(`${process.env.REACT_APP_BACKEND_SERVICE}/sessions`, userToken)
      .then(function (response) {
        setUser({
          name: name,
          first_name: response.data.user.first_name,
          last_name: response.data.user.last_name,
          profileImg: profileImg,
          user_type: response.data.user.user_type,
          flow: response.data.flow,
          userID: response.data.user.id,
          email: email,
          userDetail: response.data
        });
        setLoggedIn(true);
        setUserToken(userToken);
        setCookie('ereventapp', profileImg)
        toastr.success(`Welcome ${name}`);

      }).catch(function (error) {
        toastr.error('User not found, signup to continue');
        signOut();
      })
  }

  const attachSignin = (element, auth2) => {
    auth2.attachClickHandler(element, {},
      (googleUser) => {
        NProgress.start();
        updateUser(googleUser);
        NProgress.done();
      }, (error) => {
        console.log(JSON.stringify(error))
        NProgress.done();
      });
  }


  const signOut = () => {
    eraseCookie('ereventapp');
    let auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      setLoggedIn(false);
      setUserToken(null)
      console.log('User signed out.');
    });
  }

  if(loggedIn) {
    if(!userToken) {
      return <Spinner animation="border" />
    }
    return (
      <div className="container-scroller">
        <Navbar user={user} logout={signOut} userToken={userToken} />
        <div className="container-fluid page-body-wrapper">
          <Sidebar user={user} logout={signOut} userToken={userToken} />
          <div className="main-panel">
            <div className="content-wrapper">
              <AppRoutes user={user} logout={signOut} userToken={userToken} />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    )
  }



  return (
    <div className="container-scroller">
      <SimpleNavbar user={user} logout={signOut} userToken={userToken} />
      <div className="container simple-container">
        <div className="main-panel simple-panel">
          <div className="content-wrapper">
            <AppRoutes user={user} logout={signOut} userToken={userToken} />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Home);
