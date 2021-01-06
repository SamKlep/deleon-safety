import React from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

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
              DeLeon Safety Solutions is a premier provider of safety staff and
              consulting services for the construction and general industry. Our
              goals are to assist both small and large companies in reducing
              injuries, accidents and environmental impact, and ensuring
              compliance. We achieve this with a team of highly qualified and
              experienced safety professionals. Our safety contract and
              consulting teams can assist on a part-time basis or on a full-time
              capacity. Regardless of the size of your operation, DeLeon Safety
              Solutions can provide professional safety staff and consulting
              services (including bi-lingual professionals) to your company at a
              frequency that meets your needs and improves the overall safety
              and risk management of your operations. Some examples of the
              effective and flexible services we provide include, but are not
              limited to the following:
            </p>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <h2>STAFF</h2>
            <p>Safety Representatives</p>

            <h6>Specializations:</h6>
            <ul>
              <li>Fire Watch</li>
              <li>Hole Watch</li>
              <li>Mentors (Safety)</li>
            </ul>

            <hr />
            <h2>SERVICES</h2>
            <ul>
              <li>Safety Auditing </li>
              <li>Written Safety Policy</li>
              <li>Workplace Auditing </li>
              <li>Program Development & Review</li>
              <li>Company Specific</li>
              <li>Behavior Based Safety Program</li>
              <li>Project Specific Safety Plan</li>
              <li>Written Safety Manual Review</li>
              <li>JHA/JSA/TSA Development</li>
              <li>Safety Perception Survey</li>
              <li>Technical Resource for Safety Related Q/A</li>
              <li>Employees Interviews</li>
              <li>Record Keeping</li>
              <li>Incident Analysis</li>
              <li>SHE Strategy development</li>
              <li>Site Visits</li>
              <li>OSHA Inspection Assistance</li>
              <li>Incident Investigation</li>
              <li>Emergency Response</li>
              <li>Construction Project</li>
              <li>Construction Project Trenching and Excavation</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ConsultingScreen
