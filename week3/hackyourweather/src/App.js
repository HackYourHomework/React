import './App.css';
import Input from './components/input/Input';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Forecast from './components/forecast/Forecast';

const App = () => (
  <Router>
    <div className="App">
      <h1>Weather</h1>
      <Switch>
        <Route exact path="/">
          <Input />
        </Route>
        <Route path="/:cityId">
          <Forecast />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default App;
