import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Job from "./Job";
import { getCompanyJobsAction } from "../redux/actions";

const CompanySearchResults = () => {
  const dispatch = useDispatch();
  const jobsList = useSelector(state => state.jobs.jobsList);
  const params = useParams();

  useEffect(() => {
    dispatch(getCompanyJobsAction(params.company));
  }, [dispatch, params.company]);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Offerte di lavoro per: {params.company}</h1>
          {jobsList.map(jobData => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
