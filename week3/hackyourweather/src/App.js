import "./App.css";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./components/Search";
import Recharts from "./components/Recharts"


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <div>
          <h1 className="title">Weather</h1>
          <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/:cityId" component={Recharts} />
          </Switch>
        </div>
      </header>
    </div>
    </Router>
  );
}

export default App;
