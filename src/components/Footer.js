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
        <Container className='mb-3'>
          <Nav.Item className='p-2'>
            <a
              href='mailto:deleonsafetysol@yahoo.com'
              target='_blank'
              rel='noreferrer'
              className='h5'>
              deleonsafetysol@yahoo.com
            </a>
          </Nav.Item>
          <Nav.Item>© 2021</Nav.Item>
        </Container>
      </Nav>
    </div>
  )
}

export default Footer
