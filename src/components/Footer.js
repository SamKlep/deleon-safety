import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav, Container, Navbar, Image } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className='mt-5'>
      <Nav className='justify-content-center text-center'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <Image className='logo' src='img/safety-logo.png' />
            </Navbar.Brand>
          </LinkContainer>
        </Container>
        <Container className='p-2 m-2'>
          <Nav.Item className='p-2'>
            Phone: <a href='tel:832-814-0645'>(832) 814 - 0645</a>
          </Nav.Item>

          <Nav.Item>
            Email:{' '}
            <a href='mailto:deleonsafetysol@yahoo.com'>
              deleonsafetysol@yahoo.com
            </a>
          </Nav.Item>
        </Container>
      </Nav>
    </div>
  )
}

export default Footer
