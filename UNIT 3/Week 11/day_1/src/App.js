import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainSearch from "./components/MainSearch";
import CompanySearchResults from "./components/CompanySearchResults";
import FavouriteCompanies from "./components/FavouriteCompanies";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Nav className="mt-3 mb-5">
          <Nav.Item>
            <Link to="/" className="nav-link">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/favourites" className="nav-link">Preferiti</Link>
          </Nav.Item>
        </Nav>
      </Container>
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<FavouriteCompanies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;