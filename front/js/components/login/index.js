/**
 * @file GoogleLogin component.
*/
/* global NProgress*/
import React, { useEffect, useState } from 'react';
import { gapi, loadAuth2 } from 'gapi-script'
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import Timestamp from '../home';
import { setCookie, getCookie, eraseCookie } from '../../utils';

const GoogleLogin = () => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(getCookie('ereventapp'));
  const [userToken, setUserToken] = useState(null);

  const clientID = '589382407673-41h26lsu2inntfq22p8llo65o23us6sc.apps.googleusercontent.com'
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

    setUser({
      name: name,
      profileImg: profileImg,
      role: 1,
      userID: 1,
      email: email,
    });
    setLoggedIn(true);
    setUserToken(userToken);
    setCookie('ereventapp', profileImg)
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
      <Timestamp user={user} logout={signOut} userToken={userToken} />

    );
  }
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first bg-primary p-3">
              <img src="https://www.cloudfactory.com/hubfs/img/logo/CloudFactory-Logo-245px.png" id="icon" alt="User Icon" />
              <p className="logo-er">The Phoenix</p>
            </div>
            <button className="loginBtn loginBtn--google mt-5 mb-5" id="customBtn">
              Login with Google
            </button>
            <div id="formFooter">
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default GoogleLogin;
