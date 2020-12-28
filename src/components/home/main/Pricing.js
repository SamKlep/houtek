import React from 'react'
import { Container, Row, Col, CardDeck, Card, Button } from 'react-bootstrap'

const Pricing = () => {
  return (
    <div>
      <Container className='text-center'>
        <Row>
          <Col>
            <CardDeck>
              <Card>
                <Card.Body>
                  <Card.Title className='bg-primary text-white p-3'>
                    Standard
                  </Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Button>Learn More</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title className='bg-primary text-white p-3'>
                    Standard + DB
                  </Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{' '}
                  </Card.Text>
                  <Button>Learn More</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Body>
                  <Card.Title className='bg-primary text-white p-3'>
                    Repair / Maintenance
                  </Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                  <Button>Learn More</Button>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Pricing
