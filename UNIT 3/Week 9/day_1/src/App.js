import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent'
import ImageComponent from './components/ImageComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
        <ButtonComponent text="Clicca qui" />
        <br></br>
        <ImageComponent src="https://reactjs.org/logo-og.png" alt="logo" />
      </header>
    </div>
  );
}

export default App;
