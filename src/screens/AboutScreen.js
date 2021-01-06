import React from 'react'
import { Jumbotron, Container, Row, Col, ListGroup } from 'react-bootstrap'

const AboutScreen = () => {
  return (
    <div>
      <Jumbotron className='jumbo-about' fluid>
        <Container></Container>
      </Jumbotron>
      <Container className='mt-5 mb-5'>
        <Row className='mt-5 mb-5'>
          <Col>
            <h1 className='mt-5 mb-3'>ABOUT DELEON SAFETY SOLUTIONS</h1>
            <p className='lead'>
              DeLeon Safety Solutions is a professionally recognized service
              organization with Consultants that have over 10 years of combined
              safety experience in the industrial, construction, and
              petro-chemical industries. We provide workplace safety consulting,
              program planning, and implementation to individuals and
              businesses. Our services are uniquely flexible to meet your needs.
            </p>
            <p>
              We are constantly working to raise the bar on our services. If you
              have any questions or concerns about your experience, please
              contact us.
            </p>
          </Col>
        </Row>
        <Row className='mb-3 text-center'>
          <Col className='text-center'>
            <h2 className='mb-5'>DeLeon Safety Solutions </h2>
            <ListGroup className='contact-card mx-auto'>
              <ListGroup.Item>
                <strong className='bold'>Phone: </strong>{' '}
                <a href='tel:832-814-0645' target='_blank' rel='noreferrer'>
                  (832) 814 - 0645
                </a>
              </ListGroup.Item>
              <ListGroup.Item>
                <strong className='bold'>Email: </strong>
                <a
                  href='mailto:deleonsafetysol@yahoo.com'
                  target='_blank'
                  rel='noreferrer'>
                  deleonsafetysol@yahoo.com
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutScreen
