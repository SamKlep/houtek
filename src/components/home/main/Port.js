import React from 'react'
import { Container, Row, Col, CardDeck, Card } from 'react-bootstrap'

const Port = () => {
  return (
    <div>
      <Container className='text-center'>
        <Row>
          <Col>
            <CardDeck>
              <Card>
                <Card.Img variant='top' src='holder.js/100px160' />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant='top' src='holder.js/100px160' />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to
                    additional content.{' '}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Img variant='top' src='holder.js/100px160' />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className='text-muted'>Last updated 3 mins ago</small>
                </Card.Footer>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Port