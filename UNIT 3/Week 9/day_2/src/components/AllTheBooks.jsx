import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import fantasyBooks from '../data/fantasy.json'

export default function AllTheBooks() {
  return (
    <Container xs="auto" className="my-5">
      <Row className="justify-content-center">
        {fantasyBooks.map((book) => {
          return (
            <Col xs="auto" key={book.id} className="g-4">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={book.img} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>
                    {book.price}
                  </Card.Text>
                  <Button variant="primary">Acquista</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}
