import React, { Component } from 'react';
import styles from './index.module.scss';

import GoogleLogin from '../Login/'

const Homepage = () => {
  return (
    <div>
      <div className="row proBanner my-4">
        <div className="col-12">
          <span className={`d-flex align-items-center pr-0 ${styles.flexPanel}`}>
            <div className="col-6 text-dark px-5">
              <div className="font-weight-bold mt-lg-5 pt-lg-3 display-2 pb-2">Sahayak</div>
              <div className="mb-3 display-5">Bridge the gap between where you are now and the goal you intend to reach!!</div>
              <div className="cta-btns">
                <div className="mb-4"><a className={`btn btn-info font-weight-bold ${styles.signupBtn}`} href="#signup" onClick={() => {
                  document.getElementById('customBtn').click();
                }}>Sign Up</a></div>
              </div>
              {/* <h2> <strong>Sahayak,</strong>&nbsp;Bridge the gap between where you are now and the goal you intend to reach!!</h2> */}
            </div>
            <div className={`col-6 d-flex ${styles.imagePanel}`}>
              <img src={require("../../assets/images/friends.svg")} className={`w-100 ${styles.display}`} />
            </div>
          </span>
        </div>
      </div>
      <div className="row py-5">
        <div className="container my-lg-5">
          <h2 className="text-center font-weight-bold">Learn and grow easily with sahayak</h2>
          <div className="row">
            <div className="item col-12 col-lg-4">
              <div className="item-inner text-center p-3 p-lg-5">
                <i className={`mdi mdi-account-group mb-3 ${styles.icons}`} aria-hidden="true"></i>
                <h5>Community Driven</h5>
                <div>Connect the people to the right resource to grow their career. </div>
              </div>
            </div>
            <div className="item col-12 col-lg-4">
              <div className="item-inner text-center p-3 p-lg-5">
                <i className={`mdi mdi-teach mb-3 ${styles.icons}`} aria-hidden="true"></i>
                <h5>Give and Take</h5>
                <div> Help one another growing into the areas. Same person can teach as well as learn. </div>
              </div>
            </div>
            <div className="item col-12 col-lg-4">
              <div className="item-inner text-center p-3 p-lg-5">
                <i className={`mdi mdi-card-account-details-star mb-3 ${styles.icons}`} aria-hidden="true"></i>
                <h5>Career opportunity</h5>
                <div>Develop the profile and get more exposure to the institution. This will help on getting better
                  career opportunity. </div>
              </div>
            </div>
          </div>
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
      <div className="row">
        <div className="display-2 mb-2 mt-5">Testimonials</div>
        <div className={`row ${styles.testemonials}`}>
          <div className="col-4 p-2">
            <div className="card text-center p-0"><img className={`card-img-top ${styles.testemonialImage}`} src="https://pbs.twimg.com/profile_images/1254009251602677760/W_HY9Hy-_400x400.jpg" alt="" />
              <div className="card-body">
                <h5>Aneeta Sharma<br />

                  <span> Pianist </span></h5>
                <p className="card-text">“Great platform for teaching what I learned.” </p>
              </div>
            </div>
          </div>
          <div className="col-4 p-2">
            <div className="card text-center p-0"><img className={`card-img-top ${styles.testemonialImage}`} src="https://scontent.fktm10-1.fna.fbcdn.net/v/t31.0-8/11698800_10207348417055154_4673863349954871542_o.jpg?_nc_cat=100&_nc_sid=7aed08&_nc_ohc=Cso9_Oox478AX8XjbjJ&_nc_ht=scontent.fktm10-1.fna&oh=f6acdff0976e92526a633be702a39638&oe=5F1FCB39" alt="" />
              <div className="card-body">
                <h5>Susan Joshi <br />
                  <span> Project Lead </span></h5>
                <p className="card-text">“It was wonderful to visit the rural place and give back to community.” </p>
              </div>
            </div>
          </div>
          <div className="col-4 p-2">
            <div className="card text-center p-0"><img className={`card-img-top ${styles.testemonialImage}`} src="https://pbs.twimg.com/profile_images/1276760133746352129/X6NfUuvt_400x400.jpg" alt="" />
              <div className="card-body">
                <h5>Milap Neupane <br />
                  <span> Student </span></h5>
                <p className="card-text">“Awesome, I could learn about the career opportunity for me and recently joined a” </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Homepage;
