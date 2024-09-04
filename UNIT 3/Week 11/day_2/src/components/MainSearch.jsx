import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import Job from "./Job";
import { setQuery, setJobs, clearJobs } from "../redux/actions";
import 'bootstrap-icons/font/bootstrap-icons.css';

const MainSearch = () => {
  const dispatch = useDispatch();
  const jobsList = useSelector(state => state.jobs.jobsList);
  const query = useSelector(state => state.jobs.query);
  const [hasSearched, setHasSearched] = useState(false);

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  useEffect(() => {
    dispatch(clearJobs());
    setHasSearched(false);

    return () => {
      dispatch(clearJobs());
    };
  }, [dispatch]);

  const handleChange = e => {
    dispatch(setQuery(e.target.value));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(setJobs(data));
        setHasSearched(true);
      } else {
        alert("Errore nel recupero dei risultati");
        throw new Error("Errore nel recupero dei risultati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Form.Control 
                type="search" 
                value={query} 
                onChange={handleChange} 
                placeholder="Cerca lavori..."
              />
              <Button type="submit" variant="outline-primary">
                <i className="bi bi-search"></i>
              </Button>
            </InputGroup>
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {hasSearched && jobsList.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
          {hasSearched && jobsList.length === 0 && (
            <p>Nessun risultato trovato per la ricerca "{query}"</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
