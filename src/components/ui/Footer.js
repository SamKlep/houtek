import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <>
      <Container className='p-5 footer'>
        <Row>
          <Col className='text-center'>
            <h5>-/+</h5>
            <hr />
            <p>
              <a href='mailto:samklepdev@gmail.com'>samklepdev@gmail.com</a>
            </p>
            <p>
              <a href='tel:7133769541'>713-376-9541</a>
            </p>
          </Col>
          <Col className='text-center'>
            <h5>Navigation</h5>
            <hr />
            <ul className=' footer-nav-list'>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col className='text-center'>
            <h5>Serivces</h5>
            <hr />
            <ul className=' footer-nav-list'>
              <li>Web Design</li>
              <li>Website Maintenance</li>
              <li>SEO Services</li>
              <li>Content Creation</li>
              <li>Logo Design</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer
