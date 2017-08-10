import React, { Component } from 'react';
import './Home.css';
import countryside from '.././img/countryside.mp4';


class Home extends Component {
  render () {
    return (
      <div id="whole-page">
       <div className="Home">
        <div className="lander">
          <h1>Fritz Land Survey, LLC</h1>
          <p>no bible quotes</p>
        </div>
      </div>
       
      <video className='videoTag' autoPlay loop muted plays-inline>
        <source src={countryside} type='video/mp4' />
      </video>
      </div>
    )
  }
}

export default Home;