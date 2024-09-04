import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Job = ({ data }) => {
  const dispatch = useDispatch()
  const favouriteCompanies = useSelector(state => state.favouriteCompanies)
  const isFavourite = favouriteCompanies.includes(data.company_name)

  const toggleFavourite = (e) => {
    e.preventDefault() // Previene la navigazione quando si clicca sull'icona
    if (isFavourite) {
      dispatch({ type: 'REMOVE_FAVOURITE_COMPANY', company: data.company_name })
    } else {
      dispatch({ type: 'ADD_FAVOURITE_COMPANY', company: data.company_name })
    }
  }

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={1} className="text-end">
        <i 
          className={`bi ${isFavourite ? 'bi-heart-fill' : 'bi-heart'}`}
          onClick={toggleFavourite}
          style={{ 
            color: isFavourite ? 'red' : 'black', 
            cursor: 'pointer',
            fontSize: '1.2rem'
          }}
        ></i>
      </Col>
    </Row>
  )
}

export default Job
