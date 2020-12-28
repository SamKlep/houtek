import React from 'react'
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap'

const WhatCards = () => {
  return (
    <div>
      <Container className='text-center'>
        <Row>
          <Col>
            <CardDeck>
              <Card>
                <Card.Img
                  className='what-img mx-auto'
                  variant='top'
                  src='https://cdn.onlinewebfonts.com/svg/img_543604.png'
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  className='what-img mx-auto'
                  variant='top'
                  src='data:image/png;base64,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'
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{' '}
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img
                  variant='top'
                  className='what-img mx-auto'
                  src='https://image.flaticon.com/icons/png/512/22/22978.png'
                />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WhatCards
