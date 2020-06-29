import React from 'react';
import Homepage from '../../Homepage'
import MenteeTable from '../tables/MenteeTable';
import MentorTable from '../tables/MentorTable';
import DashboardEvents from '../../Events/DashboardEvents';

import CompleteSignup from '../../Login/completeSignup'
// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';

const Dashboard1 = (props) => {
  if(props.user && props.user.flow === "signup") {
    return (
      <CompleteSignup user={props.user} />
    )
  }
  if(!props.user) {
    return (
      <Homepage />
    )
  }
  return (
    <div>
      <div className="row proBanner">
        <div className="col-12">
          <span className="d-flex align-items-center purchase-popup">
            <p>Need help on how to use Sahayak?</p>
            <a href="#" rel="noopener noreferrer" target="_blank" className="ml-auto btn purchase-button">Get a tour</a>
            <i className="mdi mdi-close bannerClose"></i>
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
          <div className="card card-statistics">
            <div className="card-body">
              <div className="clearfix">
                <div className="float-left">
                  <i className="mdi mdi-cube text-danger icon-lg"></i>
                </div>
                <div className="float-right">
                  <p className="display-3">Mentors</p>
                  <div className="fluid-container">
                    <h3 className="font-weight-medium text-right mb-0 text-dark">67+</h3>
                  </div>
                </div>
              </div>
              <p className="text-muted mt-3 mb-0">
                <i className="mdi mdi-chart-bell-curve-cumulative mr-1" aria-hidden="true"></i> 20%  weekly growth </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
          <div className="card card-statistics">
            <div className="card-body">
              <div className="clearfix">
                <div className="float-left">
                  <i className="mdi mdi-receipt text-warning icon-lg"></i>
                </div>
                <div className="float-right">
                  <p className="display-3"> Mentees</p>
                  <div className="fluid-container">
                    <h3 className="font-weight-medium text-right mb-0 text-dark">167+</h3>
                  </div>
                </div>
              </div>
              <p className="text-muted mt-3 mb-0">
                <i className="mdi mdi-chart-bell-curve-cumulative mr-1" aria-hidden="true"></i> 30% weekly growth </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
          <div className="card card-statistics">
            <div className="card-body">
              <div className="clearfix">
                <div className="float-left">
                  <i className="mdi mdi-cube text-danger icon-lg"></i>
                </div>
                <div className="float-right">
                  <p className="display-4">Organization</p>
                  <div className="fluid-container">
                    <h3 className="font-weight-medium text-right mb-0 text-dark">20+</h3>
                  </div>
                </div>
              </div>
              <p className="text-muted mt-3 mb-0">
                <i className="mdi mdi-chart-bell-curve-cumulative mr-1" aria-hidden="true"></i> 5% weekly growth
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
          <div className="card card-statistics">
            <div className="card-body">
              <div className="clearfix">
                <div className="float-left">
                  <i className="mdi mdi-receipt text-warning icon-lg"></i>
                </div>
                <div className="float-right">
                  <p className="display-4">Impact Hours</p>
                  <div className="fluid-container">
                    <h3 className="font-weight-medium text-right mb-0 text-dark">437+</h3>
                  </div>
                </div>
              </div>
              <p className="text-muted mt-3 mb-0">
                <i className="mdi mdi-chart-bell-curve-cumulative mr-1" aria-hidden="true"></i> 3% weekly growth
              </p>
            </div>
          </div>
        </div>
      </div>
      <DashboardEvents />
      {/* <MentorTable /> */}
      {/* <MenteeTable /> */}
    </div>
  );
}

export default Dashboard1;
