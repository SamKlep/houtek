import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const WhatOffer = () => {
  return (
    <div>
      <Container className='m-5'>
        <Row>
          <Col lg={4}>
            <Image
              src='https://cdn6.f-cdn.com/files/download/82615852/web-dev-ty.jpg'
              fluid
            />
          </Col>
          <Col>
            <h3>What We Offer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga
              ab quo, est aperiam ducimus odio laborum soluta molestiae magni.
              Quisquam ipsam minima rem molestiae officia quos dolorum minus
              doloremque! Minus soluta natus, modi, placeat consequatur error
              saepe accusantium velit architecto harum ex, hic omnis! Molestiae
              debitis nisi libero iste.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WhatOffer
