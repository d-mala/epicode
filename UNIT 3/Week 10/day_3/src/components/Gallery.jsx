import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Gallery = ({query}) => {
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const fetchFilms = async () => {
        try {
            const response = await fetch(`https://www.omdbapi.com/?apikey=c2c0c52c&s=${query}`)
            if (response.ok) {
                setLoading(false)
                const data = await response.json()
                setFilms((data.Search || []).slice(0, 6))
            } else {
                throw new Error('Error fetching films')
            }
        } catch (error) {
            setError(true)
            setLoading(false)
            console.log('error', error)
            setFilms([])
        } 
    }

    useEffect(() => {
        fetchFilms()
    }, [query])

    const imageStyle = {
        width: '100%', 
        height: '30vh',  // Altezza fissa basata sull'altezza del viewport
        objectFit: 'contain'
    }

    const renderFilmOrPlaceholder = (film, index) => (
        <Col key={index}>
            {loading || !film ? (
                <div 
                    style={{
                        ...imageStyle,
                        backgroundColor: '#868e96'
                    }}
                />
            ) : (
                <img
                    src={film.Poster}
                    alt={film.Title}
                    style={imageStyle}
                    onClick={() => navigate(`/movie-details/${film.imdbID}`)}
                    className="movie-poster"
                />
            )}
        </Col>
    )

    return (
        <Row className="row-cols-2 row-cols-md-3 row-cols-lg-6 g-2 my-3">
            {error ? (
                <Col>
                    <div className="alert alert-danger" role="alert">Errore nel caricamento dei film</div>
                </Col>
            ) : (
                Array(6).fill(null).map((_, index) => renderFilmOrPlaceholder(films[index], index))
            )}
        </Row>
    )
}

export default Gallery
