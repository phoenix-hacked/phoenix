import React from 'react';
import classes from './App.module.css';
// import GoogleLogin from '../Login';
import './App.scss';
import { withRouter } from 'react-router-dom';
import AppRoutes from './Router';
import Navbar from '../Library/shared/Navbar';
import Sidebar from '../Library/shared/Sidebar';
import Footer from '../Library/shared/Footer';
// import CounterComponent from '../Library/counter';

const App = () => {
  const [isFullPageLayout, setIsFullPageLayout] = React.useState(false);
  const onRouteChanged = () => {
    console.log("ROUTE CHANGED");
    window.scrollTo(0, 0);
    const fullPageLayoutRoutes = ['/user-pages/login-1', '/user-pages/login-2', '/user-pages/register-1', '/user-pages/register-2', '/user-pages/lockscreen', '/error-pages/error-404', '/error-pages/error-500', '/general-pages/landing-page'];
    for ( let i = 0; i < fullPageLayoutRoutes.length; i++ ) {
      if (this.props.location.pathname === fullPageLayoutRoutes[i]) {
        setFullPageLayout(true);
        document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
        break;
      } else {
        setIsFullPageLayout(false)
        document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
      }
    }
  }
  const navbarComponent = !isFullPageLayout ? <Navbar/> : '';
  const sidebarComponent = !isFullPageLayout ? <Sidebar/> : '';
  const footerComponent = !isFullPageLayout ? <Footer/> : '';
  return (
    <div className="container-scroller">
      { navbarComponent }
      <div className="container-fluid page-body-wrapper">
        { sidebarComponent }
        <div className="main-panel">
          <div className="content-wrapper">
            <AppRoutes/>
          </div>
          {/* <CounterComponent /> */}
          { footerComponent }
        </div>
      </div>
    </div>
  );
};

export default withRouter(App);
