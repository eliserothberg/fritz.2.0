import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import Routes from './Routes';
import RouteNavItem from './components/RouteNavItem';
import './App.css';


class App extends Component {
  handleNavLink = (event) => {
  event.preventDefault();
  this.props.history.push(event.currentTarget.getAttribute('href'));
}
  render() {
    return (
      <div className="App container">
        <Navbar inverse fixedTop collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
          <Navbar.Collapse>

            <Nav pullRight>
              <NavItem onClick={this.handleNavLink} href="/services">Services</NavItem>
              <NavItem onClick={this.handleNavLink} href="/faq">FAQ</NavItem>
              <NavItem onClick={this.handleNavLink} href="/about">About</NavItem>
              <NavItem onClick={this.handleNavLink} href="/contact">Contact</NavItem>
              <NavDropdown title="Admin" id="basic-nav-dropdown">
                <NavItem onClick={this.handleNavLink} href="/signup">Signup</NavItem>
                <MenuItem divider />
                <NavItem onClick={this.handleNavLink} href="/login">Login</NavItem>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Routes />

      </div>
    );
  }
}

export default withRouter(App);