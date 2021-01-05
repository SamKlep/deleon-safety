import React from 'react'
import { Jumbotron, Container, Row, Col, ListGroup } from 'react-bootstrap'

const AboutScreen = () => {
  return (
    <div>
      <Jumbotron className='jumbo-about' fluid>
        <Container></Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <h3>ABOUT DELEON SAFETY SOLUTIONS</h3>
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
        <Row>
          <Col>
            <h3>DeLeon Safety Solutions & Construction</h3>
            <ListGroup>
              <ListGroup.Item>
                <strong>Phone: </strong> (832) 814 - 0645
              </ListGroup.Item>
              <ListGroup.Item>
                <strong>Email: </strong>
                <a href='mailto:deleonsafetysol@yahoo.com'>
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
