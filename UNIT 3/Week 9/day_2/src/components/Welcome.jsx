import { Alert, Container, Row, Col} from 'react-bootstrap'

export default function Welcome() {
  return (
    <Container xs="auto" className="my-5">
      <h1 className="text-center my-4">Benvenuto!</h1>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Alert variant="primary">Compra qua tutti i libri esistenti!</Alert>
        </Col>
      </Row>
    </Container>
  )
}
