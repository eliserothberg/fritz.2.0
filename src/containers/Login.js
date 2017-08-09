import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Row, Col } from 'react-bootstrap';
import RouteNavItem from '.././components/RouteNavItem';
import { withRouter, Link } from 'react-router-dom';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  validateForm() {
    return this.state.username.length > 0
      && this.state.password.length > 0;
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div className="Login">
        <Row>
          <Col sm={4} smOffset={4}>
            <form onSubmit={this.handleSubmit}>
              <FormGroup controlId="username" bsSize="large">
                <ControlLabel>Email</ControlLabel>
                <FormControl
                  autoFocus
                  type="email"
                  value={this.state.username}
                  onChange={this.handleChange} />
              </FormGroup>
              <FormGroup controlId="password" bsSize="large">
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password" />
              </FormGroup>
              <Button
                block
                bsSize="large"
                bsStyle="primary"
                disabled={ ! this.validateForm() }
                type="submit">
                Login
              </Button>
            </form>
          <br></br>
            <div id="toSignup">
            <Link to="/signup">Or click here to sign up</Link>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(Login);