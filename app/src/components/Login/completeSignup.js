import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import GoogleLogin from './index'

const CompleteSignup = (props) => {

  const [first_name, setFirstName] = useState(props.user.first_name)
  const [last_name, setLastName] = useState(props.user.last_name)
  const [type, setType] = useState("")
  console.log(props.user)
  const userID = props.user.userID

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handleTypeChange = (event) => {
    setType(event.target.value)
  }
  const handleSubmit = (event) => {
    NProgress.start();
    event.preventDefault();
    axios({
      method: 'put',
      url: `${process.env.REACT_APP_BACKEND_SERVICE}/users/${userID}`,
      data: { "first_name": first_name, "last_name": last_name, "user_type": type, "status": "active" },
      headers: { 'Auth': JSON.stringify(props.userToken) },
    })
      .then(function (response) {
        toastr.success('Successfully updated');
        NProgress.done();
      })
      .catch(function (error) {
        console.log(error);
        toastr.error('Something went wrong.');
        NProgress.done();
      });
  }


  return (
    <div>
      <div className="d-flex align-items-center auth px-0">
        <div className="row w-100 mx-0">
          <div className="col-lg-4 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src={require("../../assets/images/logo.png")} alt="logo" />
              </div>
              <h4>Complete Profile</h4>
              <form className="pt-3" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="First Name" value={first_name} onChange={handleFirstNameChange} required={true} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Last Name" value={last_name} onChange={handleLastNameChange} required={true} />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" value={props.user.email} disabled required={true} />
                </div>
                <div className="form-group">
                  <select className="form-control form-control-lg" id="exampleFormControlSelect2" onChange={handleTypeChange} required={true}>
                    <option>Type</option>
                    <option value="individual">Individual</option>
                    <option value="institute">Institute</option>
                  </select>
                </div>
                <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" />
                      <i className="input-helper"></i>
                        I agree to all Terms & Conditions
                      </label>
                  </div>
                </div>
                <div className="mt-3">
                  <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/login">Complete</button>
                </div>
                <div className="mt-3">
                  <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/dashboard">Cancel</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompleteSignup
