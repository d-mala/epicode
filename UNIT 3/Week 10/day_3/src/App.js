import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Header from './components/Header'
import Films from './components/Films'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TvShows from './components/TvShows'
import { Container } from 'react-bootstrap'
import MovieDetails from './components/MovieDetails'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Header />
        <Container fluid className="px-5 text-light">
          <Routes>
            <Route path="/" element={<Films />} />
            <Route path="/tvshows" element={<TvShows />} />
            <Route path="/movie-details/:id" element={<MovieDetails/>} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
