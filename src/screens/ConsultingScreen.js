import React from 'react'
import { Jumbotron, Container, Row, Col, ListGroup } from 'react-bootstrap'

const ConsultingScreen = () => {
  return (
    <div>
      <Jumbotron className='jumbo-consult mb-5' fluid>
        <Container></Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col className='mb-5'>
            <h1 className='mt-3'>CONSULTING SERVICES</h1>
            <p className='lead mt-4'>
              <em className='bold'>De Leon Safety Solutions</em> is a premier
              provider of consulting services for the construction and general
              industry. Our goals are to assist both small and large companies
              in reducing injuries, accidents, and ensuring compliance. We
              achieve this with a team of highly qualified and experienced
              safety professionals. Our safety contract and consulting team can
              assist you on a variety of services. Regardless of the size of
              your operation, <em className='bold'>De Leon Safety Solutions</em>{' '}
              can provide professional consulting services
              (including bi-lingual professionals) to your company at a
              frequency that meets your needs and improves the overall safety
              and risk management of your operations. Some examples of the
              effective and flexible services we provide include, but are not
              limited to the following:
            </p>
          </Col>
        </Row>

        <Row>
          <Col className='text-center mt-3 mb-5'>
            <h1>Services</h1>
            <p className='lead'>
              {' '}
              A partial listing of DSS training courses include but are not
              limited to the following:
            </p>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <ListGroup className='training-list mt-3 mx-auto'>
              <ListGroup.Item className='bg-dark text-white'>
                Safety Auditing
              </ListGroup.Item>
              <ListGroup.Item>Written Safety Policy</ListGroup.Item>
              <ListGroup.Item className='bg-dark text-white'>
                Workplace Auditing
              </ListGroup.Item>
              <ListGroup.Item>Program Development & Review</ListGroup.Item>
              <ListGroup.Item className='bg-dark text-white'>
                Written Safety Manual Review
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className='text-center'>
            <ListGroup className='training-list mt-3 mx-auto'>
              <ListGroup.Item className='bg-dark text-white'>
                JHA/JSA/TSA Development
              </ListGroup.Item>
              <ListGroup.Item>Record Keeping</ListGroup.Item>
              <ListGroup.Item className='bg-dark text-white'>
                OSHA Inspection Assistance
              </ListGroup.Item>
              <ListGroup.Item>Incident Investigation</ListGroup.Item>
              <ListGroup.Item className='bg-dark text-white'>
                OSHA
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ConsultingScreen
