import "./App.css";
import HobbyList from "./Extreme_hobbies";
import Guarantee from "./customer_service";
import Counter from "./higher_than10";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Extreme hobbies</h2>
        <HobbyList />
        <h2>Perfect customer service!</h2>

        <Guarantee />

        <h2>It's higher than 10!</h2>
        <Counter />
      </header>
    </div>
  );
}

export default App;
