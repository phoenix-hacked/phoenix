import React from 'react';
import {initiateProfileData} from '../../redux/profile/actions';
import {useDispatch, useSelector} from 'react-redux';

const OthersProfile = props => {
  const {location} = props;
  console.log(props);
  const dispatch = useDispatch();
  const profileInfo = useSelector(state => state.profile);
  React.useEffect(() => {
    dispatch(initiateProfileData(1));
  }, []);
  if (!profileInfo.profile || !Object.keys(profileInfo.profile).length) {
    return null;
  }

  const { profile } = profileInfo;

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-lg-6 grid-margin">
          <div className="card">
            <div className="card-body">
              <div>
                <div className="main main-raised">
                  <div className="profile-content">
                    <div className="container">
                      <div className="row">
                        <div className="col-12">
                          <div className="profile">
                            <div className="avatar col-6 mx-auto">
                              <img
                                src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTU0NjQzOTk4OTQ4OTkyMzQy/ansel-elgort-poses-for-a-portrait-during-the-baby-driver-premiere-2017-sxsw-conference-and-festivals-on-march-11-2017-in-austin-texas-photo-by-matt-winkelmeyer_getty-imagesfor-sxsw-square.jpg"
                                alt="Circle Image"
                                className="img-raised rounded-circle img-fluid"
                              />
                            </div>
                            <div className="text-center mt-4">
                              <h3 className="title">{profile.first_name} {profile.last_name}</h3>
                              <h6>{profile.company ? profile.company : profile.highest_education }</h6>
                              <a
                                href={profile.linkedin}
                                className="btn btn-just-icon btn-link btn-linkedin">
                                <i className="fa fa-linkedin"></i>
                              </a>
                              <a
                                href={profile.twitter}
                                className="btn btn-just-icon btn-link btn-twitter">
                                <i className="fa fa-twitter"></i>
                              </a>
                              <a
                                href={profile.github}
                                className="btn btn-just-icon btn-link btn-github">
                                <i className="fa fa-github"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="description text-center">
                        <p>
                          { profile.about_me }
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OthersProfile;
