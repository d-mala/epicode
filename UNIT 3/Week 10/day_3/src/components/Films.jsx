import { Container } from 'react-bootstrap'
import Gallery from './Gallery'

const Films = () => {
  return (
    <>
      <h4>Trending Now</h4>
      <Gallery query="marvel" />
      <h4>Watch it Again</h4>
      <Gallery query="star wars" />
      <h4>New Releases</h4>
      <Gallery query="batman" />
    </>
  )
}

export default Films
