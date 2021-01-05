import React from 'react'
import QuoteForm from '../components/QuoteForm'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

const EmployersScreen = () => {
  return (
    <div>
      <Jumbotron className='jumbo-employers' fluid>
        <Container></Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col>
            <h3>GET A QUOTE</h3>
            <QuoteForm />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default EmployersScreen
