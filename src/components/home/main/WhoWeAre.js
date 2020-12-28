import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const WhoWeAre = () => {
  return (
    <div>
      <Container className='m-5 text-center'>
        <Row>
          <Col>
            <h3>Who We Are</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              eveniet atque earum perferendis, distinctio voluptatum minima
              maxime pariatur blanditiis quos porro sit vero qui ullam.Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Aliquam eveniet
              atque earum perferendis, distinctio voluptatum minima maxime
              pariatur blanditiis quos porro sit vero qui ullam.
            </p>
          </Col>
        </Row>
        <Row className='m-5'>
          <Col>
            <Image
              className='sam-image'
              src='img/sam-front.jpg'
              rounded
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WhoWeAre
