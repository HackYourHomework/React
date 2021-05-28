import "./App.css";
import { GlobalProvider } from "./context/dataContext";
import Home from "./components/home";
import Chart from "./components/chart";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalProvider>
        <div className="App" height="500px" width="500px">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:cityID" component={Chart} />
          </Switch>
        </div>
      </GlobalProvider>
    </Router>
  );
}

export default App;
