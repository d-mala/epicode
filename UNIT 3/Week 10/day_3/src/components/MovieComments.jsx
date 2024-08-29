import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AddComment from './AddComment'
import Comment from './Comment'

const MovieComments = () => {
  const [comments, setComments] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${id}`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQwODE4OTRlMWE5MjAwMTU1Mjg0YjYiLCJpYXQiOjE3MjQ5NDA2ODEsImV4cCI6MTcyNjE1MDI4MX0.FnbIfNNDIHMeFcaT1M2O2Z-jKdhBymc5lLUGDws1KlM',
          },
        }
      )
      if (!response.ok) {
        throw new Error('Failed to fetch comments')
      }
      const data = await response.json()
      setComments(data)
    } catch (error) {
      console.error('Error fetching comments:', error)
    }
  }

  const handleCommentChange = () => {
    fetchComments()
  }

  return (
    <div className="comments-section">
      <h4 className="text-center mb-4">Commenti</h4>
      {comments.length > 0 ? (
        <div className="comments-list">
          {comments.map((comment) => (
            <Comment 
              key={comment._id} 
              comment={comment} 
              onCommentDeleted={handleCommentChange}
            />
          ))}
        </div>
      ) : (
        <p className="text-center no-comments">Nessun commento disponibile.</p>
      )}
      <AddComment onCommentAdded={handleCommentChange} />
    </div>
  )
}

export default MovieComments
