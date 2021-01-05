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
        <Row className='m-5 text-center'>
          <Col>
            <h2>
              <em>CONTACT DELEON SAFETY SOLUTIONS</em>
            </h2>
            <br />
            <h2>
              <em>FOR YOUR TRAINING AND CONSULTING NEEDS</em>
            </h2>
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
              DeLeon Safety Solutions provides comprehensive, flexible solutions
              for all of your safety training needs. We offer bilingual services
              and can provide training weekly, monthly or as needed. If need be,
              we can bring all of our programs to your site for less downtime
              and convenience. We also provide a full complement of safety
              training for companies that range from{' '}
              <strong className='bold'>Basic Awareness</strong> classes to{' '}
              <strong className='bold'>
                OSHA 10-Hour, OSHA 30-Hour, HAZWOPER 40-Hour,
              </strong>{' '}
              and
              <strong className='bold'> CPR / First-Aid</strong>.{' '}
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
              DeLeon Safety Solutions is a premier provider of safety consulting
              services for the construction and general industry. Our goals are
              to assist both small and large companies in reducing injuries,
              accidents and environmental impact, and ensuring compliance. We
              can achieve this with a team of{' '}
              <strong className='bold'>
                highly qualified and experienced safety professionals.
              </strong>{' '}
              Our safety consulting team can assist on a{' '}
              <strong className='bold'>
                part time basis or full time capacity.
              </strong>
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
