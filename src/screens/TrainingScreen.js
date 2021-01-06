import React from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

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
              DeLeon Safety Solutions provides comprehensive, flexible solutions
              for all of your safety training needs. We can provide training
              weekly, monthly or as needed and we can bring all of our programs
              to your site for convenience and less downtime. Just as important,
              we continually refine our training to ensure that what we teach is
              current and understood by all participants by also providing
              bi-lingual instructors. We also provide a full complement of
              safety training that ranges from Basic Awareness classes to OSHA
              10-Hour, OSHA 30-Hour, HAZWOPER 40-Hour, Competent Person and
              Process Safety Management classes.
            </p>
            <p>
              DSS is affiliated with MD4U Training Center, an accredited
              training site for NCCER certifications. The training is available
              to individuals needing Construction Site Safety Technician 100-Hr,
              Crew Leadership, Project Supervision, Hazwoper 40-Hr and OSHA
              30-Hr, Scaffolding, and Electrical certifications. We offer
              Covid-19 accomodations & meetings via Zoom with a limited space
              available.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <h2>DeLeon Safety Solutions</h2>
            <ul>
              A partial listing of DSS training courses include but are not
              limited to the following:
              <li>Developing Effective New Hire Orientation</li>
              <li> Developing an Effective Safety Programs</li>
              <li>CPR/First Aid</li>
              <li>Job Safety/Job Hazard Analysis</li>
              <li>Hearing Protection</li>
              <li>Ladder Safety</li>
              <li>Lockout Tagout</li>
              <li>Hazard Communication</li>
              <li>Lead & Asbestos Awareness</li>
              <li>Confine Space Entry Permit Required</li>
              <li>Fall Protection</li>
              <li>Forklift Training</li>
              <li>Personal Protective Equipment</li>
              <li>Respiratory Protection</li>
              <li>Skid Steer Training (Bobcat)</li>
              <li>Spotter Training</li>
              <li>Electrical Safety</li>
              <li>Back Injury Prevention</li>
              <li>Record Keeping & Documentation</li>
              <li>Incident & Accident Investigation</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TrainingScreen
