import React from 'react';
import Homepage from '../../Homepage'
import MenteeTable from '../tables/MenteeTable';
import MentorTable from '../tables/MentorTable';


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
                  <p className="mb-0 text-right text-dark">Total Number of Mentors</p>
                  <div className="fluid-container">
                    <h3 className="font-weight-medium text-right mb-0 text-dark">200+</h3>
                  </div>
                </div>
              </div>
              <p className="text-muted mt-3 mb-0">
                <i className="mdi mdi-alert-octagon mr-1" aria-hidden="true"></i> 65% lower growth </p>
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
                  <p className="mb-0 text-right text-dark">Total number of Mentees</p>
                  <div className="fluid-container">
                    <h3 className="font-weight-medium text-right mb-0 text-dark">250+</h3>
                  </div>
                </div>
              </div>
              <p className="text-muted mt-3 mb-0">
                <i className="mdi mdi-bookmark-outline mr-1" aria-hidden="true"></i> Total impact </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
          <div className="card card-statistics">
            <div className="card-body">
              <div className="clearfix">
                <div className="float-left">
                  <i className="mdi mdi-poll-box text-success icon-lg"></i>
                </div>
                <div className="float-right">
                  <p className="mb-0 text-right text-dark">Hours Impacted</p>
                  <div className="fluid-container">
                    <h3 className="font-weight-medium text-right mb-0 text-dark">6000+</h3>
                  </div>
                </div>
              </div>
              <p className="text-muted mt-3 mb-0">
                <i className="mdi mdi-calendar mr-1" aria-hidden="true"></i> Seminars conducted </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
          <div className="card card-statistics">
            <div className="card-body">
              <div className="clearfix">
                <div className="float-left">
                  <i className="mdi mdi-account-box-multiple text-info icon-lg"></i>
                </div>
                <div className="float-right">
                  <p className="mb-0 text-right text-dark">Organizations</p>
                  <div className="fluid-container">
                    <h3 className="font-weight-medium text-right mb-0 text-dark">20+</h3>
                  </div>
                </div>
              </div>
              <p className="text-muted mt-3 mb-0">
                <i className="mdi mdi-reload mr-1" aria-hidden="true"></i> Number of organization enrolled </p>
            </div>
          </div>
        </div>
      </div>

      <MentorTable />
      <MenteeTable />
    </div>
  );
}

export default Dashboard1;
