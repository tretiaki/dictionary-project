import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a href="#" className="btn btn-primary m-5">
            Push me
          </a>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-Footer">
          <small>Coded by Iryna Tretiak</small>
        </footer>
      </div>
    </div>
  );
}
