import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNav from './components/MyNav.jsx';
import Welcome from './components/Welcome.jsx';
import AllTheBooks from './components/AllTheBooks.jsx';

function App() {
  return (
    <>
    <MyNav />
    <Welcome />
    <AllTheBooks/>
    </>
  );
}

export default App;
