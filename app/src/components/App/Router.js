import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../Library/shared/Spinner';

const Dashboard = lazy(() => import('../Library/dashboard/Dashboard'));

const Buttons = lazy(() => import('../Library/basic-ui/Buttons'));
const Dropdowns = lazy(() => import('../Library/basic-ui/Dropdowns'));
const Typography = lazy(() => import('../Library/basic-ui/Typography'));

const BasicElements = lazy(() => import('../Library/form-elements/BasicElements'));

const BasicTable = lazy(() => import('../Library/tables/BasicTable'));

const FontAwesome = lazy(() => import('../Library/icons/FontAwesome'));


const ChartJs = lazy(() => import('../Library/charts/ChartJs'));

const Error404 = lazy(() => import('../Library/user-pages/Error404'));
const Error500 = lazy(() => import('../Library/user-pages/Error500'));

const Login = lazy(() => import('../Library/user-pages/Login'));
const Register1 = lazy(() => import('../Library/user-pages/Register'));

const BlankPage = lazy(() => import('../Library/user-pages/BlankPage'));

const GoogleLogin = lazy(() => import('../Login'));

// Actual Routes
const Homepage = lazy(() => import('../Homepage'));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/homepage" component={Homepage} />

          <Route path="/form-Elements/basic-elements" component={BasicElements} />

          <Route path="/tables/basic-table" component={BasicTable} />

          <Route path="/icons/font-awesome" component={FontAwesome} />

          <Route path="/charts/chart-js" component={ChartJs} />


          <Route path="/user-pages/login-1" component={Login} />
          <Route path="/user-pages/register-1" component={Register1} />

          <Route path="/user-pages/error-404" component={Error404} />
          <Route path="/user-pages/error-500" component={Error500} />

          <Route path="/user-pages/blank-page" component={BlankPage} />

          <Route path="/login" component={GoogleLogin} />


          <Redirect to="/dashboard" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
