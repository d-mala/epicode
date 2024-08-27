import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CommentsList from './CommentsList'
import AddComment from './AddComment'
import Loading from './Loading'

class CommentArea extends Component {
  state = {
    comments: null,
    isLoading: true,
    isError: false,
  }

  fetchComments = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNjOWY5NTU3M2JkMDAwMTUxNGYxZjYiLCJpYXQiOjE3MjQ2ODYyMjksImV4cCI6MTcyNTg5NTgyOX0.88-DNETJh4MFrDiPCQAFEB-FX9Z2n-sDb2edlN1MkOg',
          },
        }
      )
    //   console.log('response', response)

      const comments = await response.json()

      console.log('comments', comments)

      if (response.ok) {
        this.setState({ comments: comments })
        this.setState({ isLoading: false })
      } else {
        alert('Impossibile scaricare i commenti')
        throw new Error('error')
      }
    } catch (error) {
      console.log('error:', error)
      this.setState({ isLoading: false, isError: true })
    }
  }

  componentDidMount() {
    this.fetchComments()
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
          {this.state.isLoading && <Loading />}
          <CommentsList comments={this.state.comments} />
          <AddComment asin={this.props.asin} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default CommentArea
