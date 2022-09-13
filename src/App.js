import './App.css';
import logo from './logo.png';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">

          <img src={logo} className="App-logo img-fluid" />
        </header>
        <main>
          <Dictionary defaultkey="sunset" />
        </main>
        <footer className="App-footer">Coded by AnnaS</footer>
      </div>
    </div>
  );
}

export default App;
