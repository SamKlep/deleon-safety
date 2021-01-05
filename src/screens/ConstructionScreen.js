import React from 'react'
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap'

const ConstructionScreen = () => {
  return (
    <div>
      <Jumbotron className='jumbo-construct' fluid>
        <Container></Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <h3>CONSTRUCTION SERVICES</h3>
            <p className='lead'>
              MSS Construction’s primary approach is to provide a seamless,
              integrated and optimistic service for capital project solutions.
              Our workforce is comprised of direct-hire, craft and professional
              staff to provide support to our clients in all areas of need.
            </p>
            <Image
              src='https://cdn.pixabay.com/photo/2017/11/20/08/11/welder-2964752_1280.jpg'
              fluid
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>CRAFTS</h3>
            <ul>
              <li>Boiler Makers (Bolt-up/Flange Make-up)</li>
              <li>
                Seal Installers (Primary & Secondary Seal Repair / In &
                Out-service for Floating Roof Tanks)
              </li>
              <li>Civil Workers</li>
              <li>Pipe Fitters</li>
              <li>Welders (In-service Welds on Live Equipment/ Hot Taps)</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ConstructionScreen
