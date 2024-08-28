import { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: asin,
  })

  useEffect(() => {
    setComment({
      ...comment,
      elementId: asin,
    })
  }, [asin])

  const sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNlZTYxZjY5NDA2YTAwMTUwZDk1ZmUiLCJpYXQiOjE3MjQ4MzUzNTksImV4cCI6MTcyNjA0NDk1OX0.c2NrzvykSLJXJUdYks2lhe1t8B-ybT6ymGM_6NB2crc',
          },
        }
      )
      if (response.ok) {
        alert('Recensione inviata!')
        this.setState({
          comment: {
            comment: '',
            rate: 1,
            elementId: this.props.asin,
          },
        })
      } else {
        throw new Error('Qualcosa è andato storto')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="my-3">
      <Form onSubmit={this.sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Recensione</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci qui il testo"
            value={this.state.comment.comment}
            onChange={(e) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  comment: e.target.value,
                },
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Valutazione</Form.Label>
          <Form.Control
            as="select"
            value={this.state.comment.rate}
            onChange={(e) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  rate: e.target.value,
                },
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Invia
        </Button>
      </Form>
    </div>
  )
}

export default AddComment
