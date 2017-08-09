import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Col, Row } from 'react-bootstrap';
import './Contact.css';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <Row>
            <h1>Contact Us</h1>

            <form>
            <Col md={2} mdOffset={5}>

            <br></br>
            <FieldGroup
              id="formControlsName"
              type="text"
              label="Name"
              placeholder="Enter your name"
            />
            <FieldGroup
              id="formControlsEmail"
              type="email"
              label="Email address"
              placeholder="Enter your email"
            />
            </Col>
            <Col md={6} mdOffset={3}>
            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Questions or comments:</ControlLabel>
              <FormControl componentClass="textarea" placeholder="How can we help you?" />
            </FormGroup>
            </Col>
            <Col md={2} mdOffset={5}>
            <FieldGroup
              id="formControlsFile"
              type="file"
              label="Upload any relevant files"
            />
            
            <Button type="submit">Submit</Button>
            </Col>
            </form>
        </Row>
      </div>
    );
  }
}

export default Contact;