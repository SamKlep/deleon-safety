import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Container, Navbar, Image } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Nav className='justify-content-center text-center'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <Image className='logo' src='img/safety-logo.png' />
            </Navbar.Brand>
          </LinkContainer>
        </Container>
        <Container>
          <Nav.Item>
            <Nav.Link href='/home'>Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='link-1'>Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='link-2'>Link</Nav.Link>
          </Nav.Item>
        </Container>
      </Nav>
    </div>
  )
}

export default Footer
