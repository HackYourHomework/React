import "./App.css";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1 className="title">Weather</h1>
          <Search />
        </div>
      </header>
    </div>
  );
}

export default App;
