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
              <em className='bold'>De Leon Safety Solutions</em> is a
              professionally recognized service organization with Consultants
              that have over 20 years of combined safety experience in the
              industrial and construction industries. We provide workplace
              safety consulting, program planning, and implementation to
              individuals and businesses. Our services are uniquely flexible to
              meet your needs.
            </p>
            <p className='lead'>
              We are constantly working to raise the bar on our services. If you
              have any questions or concerns about your experience, please
              contact us.
            </p>
          </Col>
        </Row>
        <Row className='mb-3 text-center'>
          <Col className='text-center'>
            <h2 className='mb-5'>De Leon Safety Solutions </h2>
            <ListGroup className='training-list mx-auto'>
              <ListGroup.Item>
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
