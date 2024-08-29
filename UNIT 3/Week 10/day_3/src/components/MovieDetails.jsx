import { useEffect, useState } from 'react'
import { Col, Container, Row, Image } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import MovieComments from './MovieComments'

const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=c2c0c52c&i=${id}`
      )
      console.log('movie details response', response)
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const data = await response.json()
      console.log('movie details', data)
      setMovie(data)
    } catch (error) {
      console.error('Error fetching movie details:', error)
    }
  }

  useEffect(() => {
    fetchMovieDetails()
  }, [id])

  return (
    <div>
      <h3>MovieDetails</h3>
      {movie ? (
        <Container fluid>
          <Row className="my-3">
            <Col md={4}>
              <Image src={movie.Poster} alt={movie.Title} fluid />
            </Col>
            <Col md={8}>
              <h2 className="text-light mb-3">{movie.Title}</h2>
              <p className="text-secondary">
                <strong>Anno:</strong> {movie.Year}
              </p>
              <p className="text-secondary">
                <strong>Genere:</strong> {movie.Genre}
              </p>
              <div className="mt-4">
                <h4 className="text-light mb-2">Trama</h4>
                <p className="text-light">{movie.Plot}</p>
              </div>
              <div className="mt-4">
                <p className="text-secondary">
                  <strong>Regista:</strong> {movie.Director}
                </p>
                <p className="text-secondary">
                  <strong>Attori:</strong> {movie.Actors}
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <MovieComments />
            </Col>
          </Row>
        </Container>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default MovieDetails
