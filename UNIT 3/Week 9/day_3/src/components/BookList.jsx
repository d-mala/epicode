import { Row, Col, Form } from 'react-bootstrap'
import SingleBook from './SingleBook'
import { Component } from 'react'

class BookList extends Component {
  state = {
    search: '',
  }
  render() {
    return (
      <>
        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Search</Form.Label>
                <Form.Control
                  type="search"
                  placeholder="Search by title or author"
                  value={this.state.search}
                  onChange={(event) =>
                    this.setState({ search: event.target.value })
                  }
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Row className="g-2">
          {this.props.books
            .filter((book) =>
              this.state.search
                ? book.title.toLowerCase().includes(this.state.search.toLowerCase())
                : true
            )
            .map((book) => {
              return (
                <Col xs={12} md={4} key={book.asin}>
                  <SingleBook book={book} />
                </Col>
              )
            })}
        </Row>
      </>
    )
  }
}

export default BookList
