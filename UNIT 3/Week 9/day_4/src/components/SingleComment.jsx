import { ListGroup, Button } from 'react-bootstrap'

const SingleComment = ({ comment }) => {
  return (
    <ListGroup.Item key={comment._id}>
      {comment.comment}
      <Button>Delete</Button>
    </ListGroup.Item>
  )
}

export default SingleComment
