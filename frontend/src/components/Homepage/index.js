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
                  <div className="mb-4"><a className="btn btn-info font-weight-bold btn-block" href="#signup">Sign Up</a></div>
                </div>
            {/* <h2> <strong>Sahayak,</strong>&nbsp;Bridge the gap between where you are now and the goal you intend to reach!!</h2> */}
                </div>
                <div className={`col-6 d-flex ${styles.imagePanel}`}>
              <img src={require("../../assets/images/friends.svg")} className={`w-100 ${styles.display}`} />
            </div>
          </span>
        </div>
      </div>
      
      <div class="row py-5">
	    <div class="container my-lg-5">
		    <h2 class="text-center font-weight-bold">Learn and grow easily with sahayak</h2>
		    <div class="row">
		        <div class="item col-12 col-lg-4">
				    <div class="item-inner text-center p-3 p-lg-5">
              <i className={`mdi mdi-account-group mb-3 ${styles.icons}`} aria-hidden="true"></i>
					    <h5>Focused on UX</h5>
					    <div>Use this area to list your app's key benefits. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </div>
				    </div>
			    </div>
			    <div class="item col-12 col-lg-4">
				    <div class="item-inner text-center p-3 p-lg-5">
            <i className={`mdi mdi-alert-octagon mb-3 ${styles.icons}`} aria-hidden="true"></i>
					    <h5>Some Details</h5>
					    <div>Use this area to list your app's key benefits. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </div>
				    </div>
			    </div>
			    <div class="item col-12 col-lg-4">
				    <div class="item-inner text-center p-3 p-lg-5">
            <i className={`mdi mdi-alert-octagon mb-3 ${styles.icons}`} aria-hidden="true"></i>
					    <h5>Other Details</h5>
					    <div>Use this area to list your app's key benefits. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </div>
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
      <div className="row">
      <div className="display-2 mb-2 mt-5">Testemonials</div>
        <div className={`row ${styles.testemonials}`}>
          <div className="col-4 p-2">
            <div className="card text-center p-0"><img className={`card-img-top ${styles.testemonialImage}`} src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
              <div className="card-body">
                <h5>Ronne Galle <br />
                  <span> Project Manager </span></h5>
                <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                  impedit quo minus id quod maxime placeat ” </p>
              </div>
            </div>
          </div>
          <div className="col-4 p-2">
            <div className="card text-center p-0"><img className={`card-img-top ${styles.testemonialImage}`} src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
              <div className="card-body">
                <h5>Ronne Galle <br />
                  <span> Project Manager </span></h5>
                <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                  impedit quo minus id quod maxime placeat ” </p>
              </div>
            </div>
          </div>
          <div className="col-4 p-2">
            <div className="card text-center p-0"><img className={`card-img-top ${styles.testemonialImage}`} src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300" alt="" />
              <div className="card-body">
                <h5>Ronne Galle <br />
                  <span> Project Manager </span></h5>
                <p className="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                  impedit quo minus id quod maxime placeat ” </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage;
