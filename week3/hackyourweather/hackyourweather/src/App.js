import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TheWeather from './components/city';
import DataChart from './components/chartData';

function App() {
  return (
    <div className="App">
    <Router>
      <div className="App-header">
        <Switch>
          <Route  path="/" exact component={TheWeather} />
          <Route path="/:cityId" component={DataChart} >
          </Route>
        </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;