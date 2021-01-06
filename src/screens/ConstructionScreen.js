import React from 'react'
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap'

const ConstructionScreen = () => {
  return (
    <div>
      <Jumbotron className='jumbo-construct mb-5' fluid>
        <Container></Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col className='text-center'>
            <h1>CONSTRUCTION SERVICES</h1>
            <p className='lead mt-3 mb-5'>
              DSS's primary approach is to provide a seamless, integrated and
              optimistic service for capital project solutions. Our workforce is
              comprised of direct-hire, craft and professional staff to provide
              support to our clients in all areas of need.
            </p>
            <Image
              className='const-image mx-auto mb-5'
              src='https://cdn.pixabay.com/photo/2017/11/20/08/11/welder-2964752_1280.jpg'
              fluid
            />
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <h2>CRAFTS</h2>
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
