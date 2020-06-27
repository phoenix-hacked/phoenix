import React from 'react';
import classes from './App.module.css';
// import GoogleLogin from '../Login';
import './App.scss';
import { withRouter } from 'react-router-dom';
import AppRoutes from './Router';
import Navbar from '../Library/shared/Navbar';
import Sidebar from '../Library/shared/Sidebar';
import Footer from '../Library/shared/Footer';
import SimpleNavbar from 'components/Library/shared/SimpleNavbar';

const App = (props) => {
  const [isFullPageLayout, setIsFullPageLayout] = React.useState(false);
  const onRouteChanged = () => {
    console.log("ROUTE CHANGED", props.location.pathname);
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/user-pages/login-1', '/user-pages/login-2', '/user-pages/register-1', '/user-pages/register-2', '/user-pages/lockscreen', '/error-pages/error-404', '/error-pages/error-500', '/general-pages/landing-page', '/dashboard'];
    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {
      if (props.location.pathname === fullPageLayoutRoutes[i]) {
        setIsFullPageLayout(true);
        document.querySelector('.page-body-wrapper') ? document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper') : null;
        break;
      } else {
        setIsFullPageLayout(false)
        document.querySelector('.page-body-wrapper') ? document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper') : null;
      }
    }
  }
  React.useEffect(() => {
    onRouteChanged();
  }, []);

  if (isFullPageLayout) {
    return (
      <div className="container-scroller">
        <Navbar/>
        <div className="container-fluid page-body-wrapper">
          <Sidebar/>
          <div className="main-panel">
            <div className="content-wrapper">
              <AppRoutes/>
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container-scroller">
      <SimpleNavbar />
      <div className="container simple-container">
        <div className="main-panel simple-panel">
          <div className="content-wrapper">
            <AppRoutes/>
          </div>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default withRouter(App);
