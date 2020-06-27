/**
 * @file router component.
*/

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../home'

export default function (prop) {
  return (
    <Switch>
      <Route path="/" exact render={(props) => <Home {...props} userToken={prop.userToken} currentUser={prop.currentUser} />} />

    </Switch>
  );
}
