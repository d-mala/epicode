import { useSelector } from 'react-redux';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FavouriteCompanies = () => {
  const favouriteCompanies = useSelector(state => state.favouriteCompanies);

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-4">Aziende Preferite</h1>
          <ListGroup>
            {favouriteCompanies.map(company => (
              <ListGroup.Item key={company}>
                <Link to={`/${company}`}>{company}</Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default FavouriteCompanies;