import { Card } from 'react-bootstrap'

import { Component } from 'react'

import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = {
    selected: false,
  }

  handleToggleSelected = () => {
    this.setState((prevState) => ({ selected: !prevState.selected }))
  }
  render() {
    return (
      <>
        <Card
          className="book-cover d-flex flex-column"
          onClick={this.handleToggleSelected}
          style={{ border: this.state.selected ? '3px solid red' : '' }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          {this.state.selected && <CommentArea asin={this.props.book.asin} />}
          </Card.Body>
        </Card>
        
      </>
    )
  }
}

export default SingleBook