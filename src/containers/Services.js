import React, { Component } from 'react';
import { Col, Media } from 'react-bootstrap';
import './Services.css';
// import '.././img/landUseMap.jpg';
import landUseMap from '../img/landUseMap.jpg';
import treesAbove from '../img/treesAbove.jpeg';
// import elsCity from '../img/elsCity.jpeg';
// import elsCloudyLand from '../img/elsCloudyLand.jpeg';
import elsVillage from '../img/elsVillage.jpeg';
// import waterLand from '../img/waterLand.jpeg';
import stake from '../img/stake.jpg';
import plat from '../img/plat.jpg';
import construction from '../img/construction.jpg';
import tree from '../img/tree.jpg';
import elevation from '../img/elevation.png';

class Services extends Component {
  render() {
    return (
      <div className="skew">
        <div id="services">
         <Col>
            <h1>Our Services</h1>

            <Media>
              <Media.Left align="middle">
                <img width={350} height={250} src={elsVillage} alt="land use map"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Preliminary Survey</Media.Heading>
                <p>The collection of survey data on which to base studies on a proposed project 
                             a proposed final survey.</p>
              </Media.Body>
            </Media>
            
            <Media>
              <Media.Body>
                <Media.Heading className="toRight">Boundary and Stake Survey</Media.Heading>
                <p>A survey performed to establish or re-establish a boundary line on the ground 
                      or to obtain data for constructing a map or plat showing a boundary line.</p>
              </Media.Body>

              <Media.Right align="middle">
                <img width={350} height={250} src={stake} alt="land use map"/>
              </Media.Right>
            </Media>
            
            <Media>
              <Media.Left align="middle">
                <img width={320} height={250} src={construction} alt="land use map"/>
              </Media.Left>
              
              <Media.Body>
                <Media.Heading>Construction Survey</Media.Heading>
                <p>The survey measurements made while construction is in process to control elevation, 
                    horizontal position and dimensions, and to determine adequacy of completion.</p>
              </Media.Body>
            </Media>
            
            <Media>
              <Media.Body>
                <Media.Heading className="toRight">Topographic Survey</Media.Heading>
                <p>A survey of an area which has for its major purposes and determination of the 
                            configuration of the surface of the ground (using elevation contours) and the location 
                            of the natural and artificial objects.</p>
              </Media.Body>
              
              <Media.Right align="middle">
                <img width={350} height={250} src={treesAbove} alt="land use map"/>
              </Media.Right>
            </Media>
            
            <Media>
            <Media.Left align="middle">
                <img width={350} height={250} src={landUseMap} alt="land use map"/>
              </Media.Left>

              <Media.Body>
                <Media.Heading>Site Planning and Design Survey</Media.Heading>
                <p>A combination of boundary and topographic surveys with the resulting information being 
                used for designing development features such as roads, subdivisions, utilities, buildings,
                 etc.</p>
              </Media.Body>
             </Media>
            
            <Media>
              <Media.Body>
                <Media.Heading className="toRight">Mortgage Inspection Report</Media.Heading>
                <p>A report made for the sole use of a lending institution to evaluate title problems 
                relating to possession. The Mortgage Inspection Report shows the relationship of the 
                improvements to the approximate property lines and filed easements or rights of way. 
                Survey makers are not usually set with this type of survey.</p>
              </Media.Body>
              <Media.Right align="middle">
                <img width={350} height={250} src={tree} alt="land use map"/>
              </Media.Right>
            </Media>
            
            <Media>
            <Media.Left align="middle">
              <img width={350} height={250} src={treesAbove} alt="land use map"/>
            </Media.Left>

              <Media.Body>
                <Media.Heading>American Land and Title Association (ALTA) Title Survey</Media.Heading>
                <p>A survey of real property, including the plat of survey, acceptable to a title insurance 
                company for purposes of insuring title to said real property, free and clear of survey 
                questions, except those questions disclosed by the survey and indicated on the plat.</p>
              </Media.Body>
             </Media>
            
            <Media>
              <Media.Body>
                <Media.Heading className="toRight">Elevation Survey</Media.Heading>
                <p>A survey of a property, building or residence and its relation to a flood plain. 
                Elevation surveys are used by lending agencies and insurance companies to determine 
                the need for flood insurance or if a site is suitable for a new structure.</p>
              </Media.Body>
              <Media.Right align="middle">
                <img width={350} height={250} src={elevation} alt="land use map"/>
              </Media.Right>
            </Media>
            
            <Media>
            <Media.Left align="middle">
                <img width={350} height={250} src={plat} alt="land use map"/>
              </Media.Left>
              <Media.Body>
                <Media.Heading>Subdivision Survey</Media.Heading>
                <p>A type of land survey in which the legal boundaries of an area are located and the 
                area is divided into parcels of lots, streets, rights-of-way and other accessories. 
                All necessary corners or dividing lines are marked or monumented.</p>
              </Media.Body>
            </Media>
          </Col>
        </div>
      </div>
    );
  }
}

export default Services;