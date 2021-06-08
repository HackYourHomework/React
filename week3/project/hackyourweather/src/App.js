import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/Search';
import CityForecast from './components/CityForecast';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'>
            <Search />
          </Route>
          <Route path='/:cityId'>
            <CityForecast />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
