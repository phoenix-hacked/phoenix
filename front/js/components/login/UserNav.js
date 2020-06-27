import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import Router from '../router/route';
import { NavLink } from 'react-router-dom';

const UserNav = (props) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Phoenix</Navbar.Brand>
        <Nav className="mr-auto">
          <NavLink to="/" className="nav-link" exact activeClassName="active">Home</NavLink>
        </Nav>
        <img src={`${props.user.profileImg}`} className="rounded-circle display-pic" alt="..."></img>
        <Button variant="danger" onClick={props.logout}>Logout</Button>
      </Navbar>
      < Router userToken={props.userToken} currentUser={props.user} />
    </>
  );
}

export default UserNav;
