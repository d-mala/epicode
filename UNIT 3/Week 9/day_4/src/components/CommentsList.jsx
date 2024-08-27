import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentsList = ({comments}) => {
    console.log('commentsList', comments)
  return (
    <ListGroup>
      {comments && comments.map((comment) => (
        <SingleComment key={comment._id} comment={comment} />
      ))}
    </ListGroup>
  )
}

export default CommentsList
