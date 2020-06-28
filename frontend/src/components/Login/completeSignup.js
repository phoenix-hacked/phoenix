import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CompleteSignup = (props) => {
  const [first_name, setFirstName] = useState(props.user.first_name)
  const [last_name, setLastName] = useState(props.user.last_name)
  const [type, setType] = useState("")
  const userID = props.user.userID

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value)
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value)
  }

  const handleTypeChange = (event) => {
    if(event.target.value) {
      setType(event.target.value)
    }
  }
  const handleSubmit = (event) => {
    if(type == "") {
      toastr.info('Please select the type');
      return
    }
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
        setTimeout(function () { window.location.reload(), 3000 })
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
          <div className="col-lg-6 mx-auto">
            <div className="auth-form-light text-left py-5 px-4 px-sm-5">
              <div className="brand-logo">
                <img src={require("../../assets/images/logo.png")} alt="logo" />
              </div>
              <h4>Complete Profile</h4>
              <form className="pt-3" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="first_name">First Name: *</label>
                  <input type="text" className="form-control form-control-lg" id="first_name" placeholder="First Name" value={first_name} onChange={handleFirstNameChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name: *</label>
                  <input type="text" className="form-control form-control-lg" id="last_name" placeholder="Last Name" value={last_name} onChange={handleLastNameChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input type="email" className="form-control form-control-lg" id="email" placeholder="Email" value={props.user.email} disabled required />
                </div>
                <div className="form-group">
                  <label htmlFor="user_type">Type *</label>
                  <select className="form-control form-control-lg" id="user_type" onChange={handleTypeChange} placeholder={"Select type"} required >
                    <option value="individual">Individual</option>
                    <option value="institute">Institute</option>
                  </select>
                </div>
                <div className="mb-4">
                  <div className="form-check">
                    <label className="form-check-label text-muted">
                      <input type="checkbox" className="form-check-input" required />
                      <i className="input-helper"></i>
                        I agree to all Terms & Conditions
                      </label>
                  </div>
                </div>
                <div className="mt-3">
                  <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">Complete</button>
                </div>
                <div className="mt-3">
                  <Link className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" to="/">Cancel</Link>
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
