import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'
import { Col } from 'react-bootstrap'

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    isError: false,
  }

  componentDidUpdate = async (prevProps) => {
    if (prevProps.asin !== this.props.asin) {
      console.log(this.props.asin)
      try {
        let response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' +
            this.props.asin,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmNjOWY5NTU3M2JkMDAwMTUxNGYxZjYiLCJpYXQiOjE3MjQ2ODYyMjksImV4cCI6MTcyNTg5NTgyOX0.88-DNETJh4MFrDiPCQAFEB-FX9Z2n-sDb2edlN1MkOg',
            },
          }
        )
        console.log(response)
        if (response.ok) {
          let comments = await response.json()
          this.setState({
            comments: comments,
            isLoading: false,
            isError: false,
          })
        } else {
          this.setState({ isLoading: false, isError: true })
        }
      } catch (error) {
        console.log(error)
        this.setState({ isLoading: false, isError: true })
      }
    }
  }

  render() {
    return (
      <Col className="text-center">
        {this.state.isLoading && <Loading />}
        {this.state.isError && <Error />}
        <AddComment asin={this.props.selectedBookAsin} />
        <CommentList commentsToShow={this.state.comments} />
      </Col>
    )
  }
}

export default CommentArea
