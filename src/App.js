import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        </header>
        <main>
          <Dictionary defaultKeyword="welcome" />
        </main>
        <footer className="App-footer">
          <small>Coded by <a href="https://github.com/cfornetti/dictionary-project">Chiara Fornetti</a></small>
          <br/>
          <p className="Images">
          <em>Photo by <a href="https://www.pexels.com/">Pexels</a></em>
          </p>
        </footer>
      </div>
    </div>
  );
}
