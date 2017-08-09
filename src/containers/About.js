import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import './About.css';

class About extends Component {
  render() {
    return (  
      <div id="about">
        <h1>About Us</h1>
          <Row>
            <Col md={6} mdOffset={3}>
              <p id="aboutAF">Andy Fritz, PLS, has over 20 years Land Surveying and 
              Construction Management experience both in Colorado and Oklahoma.  
              Born and raised In Muskogee and a member of the Cherokee Nation, 
              he knows the area and obstacles that may arise while on site.  
              His attention to detail and meeting the demands of the clients has 
              earned him a reputation of excellence.
              <hr></hr>
              Member of the Oklahoma Society of Land Surveryors.</p>
              <div className="thePic"></div>
            </Col>
          </Row>
      </div>
    );
  }
}

export default About;