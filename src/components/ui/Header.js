import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar bg='primary' variant='dark' expand='lg'>
        <Navbar.Brand href='/'>-/+</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/'>Services</Nav.Link>
            <Nav.Link href='/about'>Portfolio</Nav.Link>
            <Nav.Link href='/'>Blog</Nav.Link>
            <Nav.Link href='/about'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
