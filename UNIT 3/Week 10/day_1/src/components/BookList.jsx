import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col, Form, Row } from 'react-bootstrap'
import CommentList from './CommentList'
import CommentArea from './CommentArea'

class BookList extends Component {
  state = {
    searchQuery: '',
    selectedBookAsin: null,
  }

  handleSelectBook = (asin) => {
    this.setState({ selectedBookAsin: asin })
  }

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <Row className="g-2">
              {this.props.books
                .filter((book) =>
                  book.title.toLowerCase().includes(this.state.searchQuery)
                )
                .map((book) => (
                  <Col xs={12} md={4} key={book.asin}>
                    <SingleBook
                      key={book.asin}
                      book={book}
                      selectedBookAsin={this.state.selectedBookAsin}
                      onSelectBook={this.handleSelectBook}
                    />
                  </Col>
                ))}
            </Row>
          </Col>
          <CommentArea asin={this.state.selectedBookAsin} />
        </Row>
      </>
    )
  }
}

export default BookList
