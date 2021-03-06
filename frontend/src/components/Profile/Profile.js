
import React from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import { Formik } from 'formik';
import { updateProfileData, initiateProfileData } from '../../redux/profile/actions';
import { initiateEventData } from '../../redux/events/actions';
import { useDispatch, useSelector } from 'react-redux';
import HomePage from '../Homepage'

const options = [
  {
    "label": "Networking",
    "value": "Networking"
  },
  {
    "label": "Acounting",
    "value": "Acounting"
  },
  {
    "label": "Audit",
    "value": "Audit"
  },
  {
    "label": "PHP",
    "value": "PHP"
  },
  {
    "label": "Java",
    "value": "Java"
  },
  {
    "label": "Android & iOS",
    "value": "Android & iOS"
  },
  {
    "label": "Copywriting",
    "value": "Copywriting"
  },
  {
    "label": "Graphics Design",
    "value": "Graphics Design"
  },
  {
    "label": "Chef",
    "value": "Chef"
  },
  {
    "label": " Data Analysis",
    "value": " Data Analysis"
  },
  {
    "label": "Content Writing",
    "value": "Content Writing"
  },
  {
    "label": "Freelance",
    "value": "Freelance"
  },
  {
    "label": "Value Chain",
    "value": "Value Chain"
  },
  {
    "label": "Microsoft Excel",
    "value": "Microsoft Excel"
  },
  {
    "label": "Public Speaking",
    "value": "Public Speaking"
  },
  {
    "label": "Microsoft word",
    "value": "Microsoft word"
  },
  {
    "label": "Presentation",
    "value": "Presentation"
  },
  {
    "label": "Cooking",
    "value": "Cooking"
  },
  {
    "label": "Baking",
    "value": "Baking"
  },
  {
    "label": "language",
    "value": "language"
  },
  {
    "label": "Arts",
    "value": "Arts"
  },
  {
    "label": "QA",
    "value": "QA"
  },
  {
    "label": "Developer",
    "value": "Developer"
  },
  {
    "label": "Engineer",
    "value": "Engineer"
  },
  {
    "label": "UI/UX",
    "value": "UI/UX"
  },
  {
    "label": "HR",
    "value": "HR"
  },
  {
    "label": "Finance",
    "value": "Finance"
  },
  {
    "label": "Bank",
    "value": "Bank"
  },
  {
    "label": "IT",
    "value": "IT"
  },
  {
    "label": "Sofware Development",
    "value": "Sofware Development"
  }
];

const Profile = (props) => {
  if(!props.user) {
    return (
      <HomePage />
    )
  }
  const { user: { userID } } = props;
  const dispatch = useDispatch();
  const profileInfo = useSelector(state => state.profile);
  React.useEffect(() => {
    dispatch(initiateEventData(userID));
    dispatch(initiateProfileData(userID));
  }, []);
  if(!profileInfo.profile || !Object.keys(profileInfo.profile).length) {
    return null;
  }
  const profileDetails = Object.assign({}, profileInfo.profile, { tags: (profileInfo.profile.tags || []).map((tag) => ({ label: tag, value: tag })) });
  const submitValues = (values) => {
    const valuesObj = {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      about_me: values.about_me,
      address: values.address,
      tags: values.tags,
      experience: {
        highest_education: values.highest_education,
        experience_years: values.experience_years,
        company: values.company,
      },
      social: {
        linkedin: values.linkedin,
        github: values.github,
        twitter: values.twitter,
      }
    };
    // update the profile details
    dispatch(updateProfileData(userID, valuesObj));
  };

  return (
    <div>
      <div className="page-header">

      </div>
      <div className="row justify-content-center">
        <div className="col-lg-6 grid-margin">
          <div className="card">
            <div className="card-body">
              <Formik
                initialValues={profileDetails}
                onSubmit={async values => {
                  submitValues(values);
                }}
              >
                {props => {
                  const {
                    values,
                    setFieldValue,
                    handleSubmit,
                    handleChange,
                  } = props;
                  return (
                    <form onSubmit={handleSubmit}>
                      <h2 className="page-title mb-4 mt-2"> My Profile </h2>
                      <h4 className="card-title">Personal Details</h4>
                      <Form.Group>
                        <label htmlFor="first_name">First Name</label>
                        <Form.Control type="text" id="first_name" placeholder="Full Name" size="lg" defaultValue={values.first_name} onChange={handleChange} />
                      </Form.Group>
                      <Form.Group>
                        <label htmlFor="last_name">Last Name</label>
                        <Form.Control type="text" id="last_name" placeholder="Full Name" size="lg" defaultValue={values.last_name} onChange={handleChange} />
                      </Form.Group>
                      <Form.Group>
                        <label htmlFor="email">Email address</label>
                        <Form.Control type="email" className="form-control" id="email" placeholder="Email" defaultValue={values.email} onChange={handleChange} disabled />
                      </Form.Group>
                      <Form.Group>
                        <label htmlFor="about_me">About Me</label>
                        <Form.Control as="textarea" rows="4" id="about_me" placeholder="Description" defaultValue={values.about_me} onChange={handleChange} />
                      </Form.Group>
                      <Form.Group>
                        <label htmlFor="tags">Tags (Interests)</label>
                        <Select isMulti options={options} name="tags" defaultValue={values.tags} onChange={(option) => {
                          setFieldValue(
                            'tags',
                            option ? option.map(item => item.value) : []
                          );
                        }} />
                      </Form.Group>
                      <Form.Group>
                        <label htmlFor="address">Address</label>
                        <Form.Control type="text" id="address" placeholder="Description" defaultValue={values.address} onChange={handleChange} />
                      </Form.Group>
                      <h4 className="card-title">Professional Details</h4>
                      <Form.Group>
                        <label htmlFor="highest_education">Highest Education Degree</label>
                        <Form.Control type="text" id="highest_education" placeholder="Description" defaultValue={values.experience && values.experience.highest_education} onChange={handleChange} />
                      </Form.Group>
                      <Form.Group>
                        <label htmlFor="company">Currently Working Company</label>
                        <Form.Control type="text" id="company" placeholder="Description" defaultValue={values.experience && values.experience.company} onChange={handleChange} />
                      </Form.Group>
                      <Form.Group>
                        <label htmlFor="experience_years">Working Experience (In Years)</label>
                        <Form.Control type="number" id="experience_years" placeholder="Description" defaultValue={values.experience && values.experience.experience_years} onChange={handleChange} />
                      </Form.Group>
                      <h4 className="card-title">Social Links</h4>
                      <Form.Group>
                        <label htmlFor="linkedin">LinkedIn</label>
                        <Form.Control type="text" id="linkedin" placeholder="Description" defaultValue={values.social && values.social.linkedin} onChange={handleChange} />
                      </Form.Group>
                      <Form.Group>
                        <label htmlFor="github">Github</label>
                        <Form.Control type="text" id="github" placeholder="Description" defaultValue={values.social && values.social.github} onChange={handleChange} />
                      </Form.Group>
                      <Form.Group>
                        <label htmlFor="twitter">Twitter</label>
                        <Form.Control type="text" id="twitter" placeholder="Description" defaultValue={values.social && values.social.twitter} onChange={handleChange} />
                      </Form.Group>
                      <button type="submit" className="btn btn-primary mr-2">Submit</button>
                      <button className="btn btn-light">Cancel</button>
                    </form>);
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Profile;
