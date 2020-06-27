import React, { Component, Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../Library/shared/Spinner';

const Dashboard = lazy(() => import('../Library/dashboard/Dashboard'));

const Buttons = lazy(() => import('../Library/basic-ui/Buttons'));
const Dropdowns = lazy(() => import('../Library/basic-ui/Dropdowns'));
const Typography = lazy(() => import('../Library/basic-ui/Typography'));

const BasicElements = lazy(() => import('../Library/form-elements/BasicElements'));

const BasicTable = lazy(() => import('../Library/tables/BasicTable'));
const MenteeTable = lazy(() => import('../Library/tables/MenteeTable'));
const MentorTable = lazy(() => import('../Library/tables/MentorTable'));

const FontAwesome = lazy(() => import('../Library/icons/FontAwesome'));


const ChartJs = lazy(() => import('../Library/charts/ChartJs'));

const Error404 = lazy(() => import('../Library/user-pages/Error404'));
const Error500 = lazy(() => import('../Library/user-pages/Error500'));

const Login = lazy(() => import('../Library/user-pages/Login'));
const Register1 = lazy(() => import('../Library/user-pages/Register'));

const BlankPage = lazy(() => import('../Library/user-pages/BlankPage'));

const EventForm = lazy(() => import('../Library/events/addEvent'));

// Actual Routes
const Homepage = lazy(() => import('../Homepage'));
const Profile = lazy(() => import('../Profile/Profile'));
const Dashboard1 = lazy(() => import('../Library/dashboard/Dashboard1'));

const AppRoutes = (prop) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/profile" render={(props) => <Profile {...props} user={prop.user} />} />
        <Route exact path="/dashboard1" render={(props) => <Dashboard1 {...props} userToken={prop.userToken} user={prop.user} />} />
        <Route exact path="/events" exact render={(props) => <EventForm {...props} userToken={prop.userToken} user={prop.user} />} />

        <Route path="/form-Elements/basic-elements" component={BasicElements} />

          <Route path="/tables/basic-table" component={ BasicTable } />
          <Route path="/tables/mentee-table" component={ MenteeTable } />
          <Route path="/tables/mentor-table" component={ MentorTable } />

        <Route path="/icons/font-awesome" component={FontAwesome} />

        <Route path="/charts/chart-js" component={ChartJs} />


        <Route path="/user-pages/login-1" component={Login} />
        <Route path="/user-pages/register-1" component={Register1} />

        <Route path="/user-pages/error-404" component={Error404} />
        <Route path="/user-pages/error-500" component={Error500} />

        <Route path="/user-pages/blank-page" component={BlankPage} />


        <Redirect to="/dashboard1" />
      </Switch>
    </Suspense>
  );
}

export default AppRoutes;
