import React, { Component } from 'react';
import styles from './index.module.css';

import GoogleLogin from '../Login/'

const Homepage = () => {
  return (
    <div>
        <div className="row proBanner my-4">
          <div className="col-12">
            <span className={`d-flex align-items-center pr-0 ${styles.flexPanel}`}>
              <div className="col-6 display-3 text-dark">
                <strong>Sahayak</strong> a place for people who want to grow together
                </div>
                <div className={`col-6 d-flex ${styles.flexImage}`}>
              <img src={require("../../assets/images/friends.svg")} className={`w-100 ${styles.display}`} />
            </div>
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
      </div>
    </div>
  )
}

export default Homepage;
