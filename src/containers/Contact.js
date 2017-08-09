import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Col } from 'react-bootstrap';
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
        <Col xs={12}>
        <h1>Contact Us</h1>

      <form>

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
        
         <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Questions or comments:</ControlLabel>
          <FormControl componentClass="textarea" placeholder="How can we help you?" />
        </FormGroup>

        <FieldGroup
          id="formControlsFile"
          type="file"
          label="Upload any relevant files"
        />
        <Button type="submit">
          Submit
        </Button>
      </form>
      </Col>
      </div>
    );
  }
}

export default Contact;