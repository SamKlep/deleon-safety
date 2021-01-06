import React from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import ContactForm from '../components/ContactForm'

const EmployersScreen = () => {
  return (
    <div>
      <Jumbotron className='jumbo-employers mb-5' fluid>
        <Container></Container>
      </Jumbotron>
      <Container>
        <Row className='justify-content-lg-center'>
          <Col lg={6}>
            <h1 className='text-center'>GET A QUOTE</h1>
            <br />
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default EmployersScreen
