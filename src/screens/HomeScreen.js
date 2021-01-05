import React from 'react'
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const HomeScreen = () => {
  return (
    <div>
      <Jumbotron className='jumbo-home' fluid>
        <Container></Container>
      </Jumbotron>
      <Container>
        <Row className='m-3 text-center'>
          <Col>
            <h3>CONTACT MANAGING SAFETY SOLUTIONS & CONSTRUCTION</h3>
            <br />
            <h3>FOR YOUR TRAINING AND CONSULTING NEEDS</h3>
          </Col>
        </Row>
        <Row>
          <Col className='mt-3 mb-3' lg={6}>
            <Image
              className='mt-3 mb-3'
              src='https://cdn.pixabay.com/photo/2016/02/09/17/27/classroom-1189988_1280.jpg'
              fluid
            />
            <h3>TRAINING</h3>
            <p className='lead'>
              Managing Safety Solutions provides comprehensive, flexible
              solutions for all of your safety training needs. We can provide
              training weekly, monthly or as needed and we can bring all of our
              programs to your site for less downtime and convenience. We also
              provide a full complement of safety training for companies that
              range from <strong>Basic Awareness</strong> classes to{' '}
              <strong>OSHA 10-Hour, OSHA 30-Hour, HAZWOPER 40-Hour,</strong> and
              <strong> Competent Person</strong> classes.{' '}
            </p>
            <p>
              MSS is affiliated with{' '}
              <strong>
                MD4U Training Center, an accredited training site for NCCER
                certifications.
              </strong>{' '}
              The training is available to individuals needing{' '}
              <strong>
                Construction Site Safety Technician 100-Hr, Crew Leadership,
                Project Supervision, Hazwoper 40-Hr and OSHA 30-Hr
              </strong>{' '}
              certifications.
            </p>
            <LinkContainer to='/training'>
              <Button variant='primary'>LEARN MORE</Button>
            </LinkContainer>
          </Col>
          <Col className='mt-3 mb-3'>
            <Image
              className='mt-3 mb-3'
              src='https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_1280.jpg'
              fluid
            />
            <h3>CONSULTING</h3>
            <p className='lead'>
              Managing Safety Solutions is a premier provider of safety
              consulting services for the construction and general industry. Our
              goals are to assist both small and large companies in reducing
              injuries, accidents and environmental impact, and ensuring
              compliance. We can achieve this with a team of highly qualified
              and experienced safety professionals. Our safety consulting team
              can assist on a part time basis or full time capacity.
            </p>
            <LinkContainer to='/consulting'>
              <Button variant='primary'>LEARN MORE</Button>
            </LinkContainer>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomeScreen
