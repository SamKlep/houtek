import React from 'react'
import { Container, Row, Col, CardDeck, Card, Button } from 'react-bootstrap'

const Port = () => {
  return (
    <div>
      <Container className='text-center'>
        <Row>
          <Col>
            <CardDeck>
              <Card>
                <Card.Img variant='top' src='img/ultrademo.png' />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Button>Visit Ultra Demo</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant='top' src='img/findahouse.png' />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{' '}
                  </Card.Text>
                  <Button>Visit FH Realty</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant='top' src='img/crypto-zone1.png' />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                  <Button>Visit Crypto Zone</Button>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Port
