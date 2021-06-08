import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CityPage from './components/CityPage';
import ChartPage from './components/ChartPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={CityPage} />
        <Route path="/:cityId" component={ChartPage} />
      </Switch>
    </Router>
  );
}
export default App;
