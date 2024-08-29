import { useState } from 'react'
import { useParams } from 'react-router-dom'

const AddComment = ({ onCommentAdded }) => {
  const [comment, setComment] = useState('')
  const [rate, setRate] = useState('1')
  const { id: elementId } = useParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newComment = {
      comment,
      rate,
      elementId
    }

    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQwODE4OTRlMWE5MjAwMTU1Mjg0YjYiLCJpYXQiOjE3MjQ5NDA2ODEsImV4cCI6MTcyNjE1MDI4MX0.FnbIfNNDIHMeFcaT1M2O2Z-jKdhBymc5lLUGDws1KlM'
          },
          body: JSON.stringify(newComment)
        }
      )

      if (!response.ok) {
        throw new Error('Errore nell\'invio del commento')
      }

      setComment('')
      setRate('1')
      if (onCommentAdded) onCommentAdded()
    } catch (error) {
      console.error('Errore nell\'invio del commento:', error)
    }
  }

  return (
    <div className="add-comment mt-4">
      <h4 className="mb-3">Aggiungi un commento</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="comment" className="form-label">Commento:</label>
          <textarea
            id="comment"
            className="form-control"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rate" className="form-label">Voto:</label>
          <select
            id="rate"
            className="form-select"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            required
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Invia commento</button>
      </form>
    </div>
  )
}

export default AddComment