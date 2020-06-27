import React from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import { updateProfileData, initiateProfileData } from '../../redux/profile/actions';
import { useDispatch, useSelector } from 'react-redux';

const options = [
  { value: 'AI', label: 'AI' },
  { value: 'Machine Learning', label: 'Machine Learning' },
  { value: 'Accounting', label: 'Accounting' }
]

const Profile = () => {
  const dispatch = useDispatch();
  const profileInfo = useSelector(state => state.profile);
  React.useEffect(() => {
    dispatch(initiateProfileData('id'));
  }, []);
  console.log(profileInfo);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(updateProfileData('id', { bat: 'cat'}));
  };

  return (
    <div>
      <div className="page-header">
        <h3 className="page-title"> My Profile </h3>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Personal Details</h4>
                  {/* <p className="card-description"> About you</p> */}
                  <Form className="forms-sample"  onSubmit={handleSubmit}>
                    <Form.Group>
                      <label htmlFor="fullname">Full Name</label>
                      <Form.Control type="text" id="fullname" placeholder="Full Name" size="lg" />
                    </Form.Group>
                    <Form.Group>
                      <label htmlFor="email">Email address</label>
                      <Form.Control type="email" className="form-control" id="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group>
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <Form.Control type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                      <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                      <Form.Control type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                      <label htmlFor="about">About Me</label>
                      <Form.Control as="textarea" rows="4" id="about" placeholder="Description" />
                    </Form.Group>
                    <Form.Group>
                      <label htmlFor="tags">Tags (Interests)</label>
                      <Select isMulti options={options} name="tags"/>
                      {/* <Form.Control as="textarea" rows="4" id="description" placeholder="Description" /> */}
                    </Form.Group>
                    <button type="submit" className="btn btn-primary mr-2">Submit</button>
                    <button className="btn btn-light">Cancel</button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
};

export default Profile;
