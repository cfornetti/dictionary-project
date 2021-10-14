import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>Coded by <a href="https://github.com/cfornetti/dictionary-project">Chiara Fornetti</a></small>
          <small>Photo by <a href="https://www.pexels.com/" className="Images">Chiara Fornetti</a></small>
        </footer>
      </div>
    </div>
  );
}
