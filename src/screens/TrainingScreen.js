import React from 'react'
import { Jumbotron, Container, Row, Col, ListGroup } from 'react-bootstrap'

const TrainingScreen = () => {
  return (
    <div>
      <Jumbotron className='jumbo-train mb-5' fluid>
        <Container></Container>
      </Jumbotron>
      <Container className='mt-5 mb-5'>
        <Row>
          <Col className='mt-5 mb-5'>
            <h1 className='mb-3'>SAFETY TRAINING SERVICES</h1>
            <p className='lead mb-3'>
              <em className='bold'>De Leon Safety Solutions</em> provides
              comprehensive, flexible solutions for all of your safety training
              needs. We can provide training weekly, monthly or as needed. We
              can bring all of our programs to your site for convenience and
              less downtime. Just as important, we continually refine our
              training to ensure that what we teach is current and understood by
              all participants by also providing bi-lingual instructors. We also
              provide a full complement of safety training that ranges from{' '}
              <strong className='bold'>
                Basic Awareness, OSHA 10-Hour and OSHA 30-Hour. We offer
                Covid-19 accomodations & meetings via Zoom with a limited space
                available.
              </strong>
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
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <ListGroup className='training-list mt-3 mx-auto'>
              <ListGroup.Item className='bg-dark text-white'>
                Developing Effective New Hire Orientation
              </ListGroup.Item>
              <ListGroup.Item>
                Developing an Effective Safety Programs
              </ListGroup.Item>
              <ListGroup.Item className='bg-dark text-white'>
                CPR/First Aid
              </ListGroup.Item>
              <ListGroup.Item>Job Safety/Job Hazard Analysis</ListGroup.Item>
              <ListGroup.Item className='bg-dark text-white'>
                Hearing Protection
              </ListGroup.Item>
              <ListGroup.Item>Ladder Safety</ListGroup.Item>
              <ListGroup.Item className='bg-dark text-white'>
                Lockout Tagout
              </ListGroup.Item>
              <ListGroup.Item>Hazard Communication</ListGroup.Item>
              <ListGroup.Item className='bg-dark text-white'>
                Lead & Asbestos Awareness
              </ListGroup.Item>
              <ListGroup.Item>Fall Protection</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className='text-center'>
            <ListGroup className='training-list mt-3 mx-auto'>
              <ListGroup.Item className='bg-dark text-white'>
                Confine Space Entry Permit Required
              </ListGroup.Item>

              <ListGroup.Item>Forklift Training</ListGroup.Item>
              <ListGroup.Item className='bg-dark text-white'>
                Personal Protective Equipment
              </ListGroup.Item>
              <ListGroup.Item>Respiratory Protection</ListGroup.Item>
              <ListGroup.Item className='bg-dark text-white'>
                Skid Steer Training (Bobcat)
              </ListGroup.Item>
              <ListGroup.Item>Spotter Training</ListGroup.Item>
              <ListGroup.Item className='bg-dark text-white'>
                Electrical Safety
              </ListGroup.Item>
              <ListGroup.Item>Back Injury Prevention</ListGroup.Item>
              <ListGroup.Item className='bg-dark text-white'>
                Record Keeping & Documentation
              </ListGroup.Item>
              <ListGroup.Item>Incident & Accident Investigation</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TrainingScreen
