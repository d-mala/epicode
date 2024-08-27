import fantasy from '../data/fantasy.json'
import BookList from './BookList'

console.log(fantasy)

const AllTheBooks = () => {
  return <BookList books={fantasy} />
}

export default AllTheBooks
