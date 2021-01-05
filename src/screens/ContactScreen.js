import React from 'react'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'
import ContactForm from '../components/ContactForm'

const ContactScreen = () => {
  return (
    <div>
      <Jumbotron className='jumbo-contact' fluid>
        <Container></Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <h3>CONTACT US</h3>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ContactScreen
