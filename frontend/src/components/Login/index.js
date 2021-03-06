import React, { useEffect, useState } from 'react';
import { gapi, loadAuth2 } from 'gapi-script'
import axios from 'axios';
import { Spinner, Button, Modal } from 'react-bootstrap';
import { setCookie, getCookie, eraseCookie } from '../../utils';

import './login.css'

import CompleteSignup from './completeSignup'
import Dashboard from 'components/Library/dashboard/Dashboard';

const GoogleLogin = () => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(getCookie('ereventapp'));
  const [userToken, setUserToken] = useState(null);

  const clientID = process.env.REACT_APP_CLIENT_ID
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
    if(user.flow == "signup") {
      return (
        <Modal show={true} size="lg" onHide={true} animation={true}>
          <CompleteSignup user={user} logout={signOut} userToken={userToken} />
        </Modal>
      );
    } else {
      return (
        <Button variant="danger" onClick={signOut}>Logout</Button>
      )
    }

  }



  return (
    <button className="loginBtn loginBtn--google mt-5 mb-5" id="customBtn">
      Sign in with Google
    </button>
  );
}

export default GoogleLogin;
