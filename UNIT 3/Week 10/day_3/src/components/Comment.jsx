import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

const Comment = ({ comment, onCommentDeleted }) => {
  const [isDeleting, setIsDeleting] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  const handleDelete = async () => {
    setIsDeleting(true)
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmQwODE4OTRlMWE5MjAwMTU1Mjg0YjYiLCJpYXQiOjE3MjQ5NDA2ODEsImV4cCI6MTcyNjE1MDI4MX0.FnbIfNNDIHMeFcaT1M2O2Z-jKdhBymc5lLUGDws1KlM',
          },
        }
      )
      if (!response.ok) {
        throw new Error('Errore nell\'eliminazione del commento')
      }
      onCommentDeleted()
      handleCloseModal()
    } catch (error) {
      console.error('Errore nell\'eliminazione del commento:', error)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <>
      <div className="comment-card mb-3 p-3 position-relative">
        <div className="comment-header d-flex justify-content-between align-items-center mb-2">
          <h6 className="comment-author mb-0">{comment.author}</h6>
          <small className="comment-date">{new Date(comment.createdAt).toLocaleDateString()}</small>
        </div>
        <p className="comment-text mb-2">{comment.comment}</p>
        <div className="d-flex justify-content-between align-items-center">
          <p className="rating mb-0">
            <strong>Voto:</strong> {comment.rate} <span className="stars">{'★'.repeat(comment.rate)}</span>
          </p>
          <Button 
            variant="danger"
            size="sm"
            onClick={handleShowModal}
            disabled={isDeleting}
          >
            Elimina
          </Button>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Conferma eliminazione</Modal.Title>
        </Modal.Header>
        <Modal.Body>Sei sicuro di voler eliminare questo commento?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Annulla
          </Button>
          <Button variant="danger" onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? 'Eliminazione...' : 'Elimina'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Comment
