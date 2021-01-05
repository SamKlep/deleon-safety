import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, Image } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg='light' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <Image className='logo' src='img/safety-logo.png' />
            </Navbar.Brand>
          </LinkContainer>
        </Container>

        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/about'>
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/training'>
              <Nav.Link>Training</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/consulting'>
              <Nav.Link>Consulting</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/construction'>
              <Nav.Link>Contruction</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/employers'>
              <Nav.Link>Employers</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
