import WeatherForecasts from './components/WeatherForecasts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ChartData from './components/ChartData';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/" exact component={WeatherForecasts} />
          <Route path="/:id" component={ChartData} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
