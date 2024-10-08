import { Component } from 'react'
import { Card } from 'react-bootstrap'

class SingleBook extends Component {
  state = {
    selected: false,
  }

  handleSelectBook = () => {
    this.props.onSelectBook(this.props.book.asin);
    this.setState({ selected: !this.state.selected });
  };

  render() {
    return (
      <>
        <Card
          onClick={this.handleSelectBook}
          style={{ border: this.state.selected ? '3px solid red' : 'none' }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>
              {this.props.book.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default SingleBook
