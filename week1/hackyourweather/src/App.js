import './App.css';
import { useState } from 'react';
import weatherData from './city-weather.json';
import WeatherCard from './components/weather-card/WeatherCard';

const App = () => {
  const [state] = useState(weatherData);

  return (
    <div className="App">
      <h1>Weather</h1>
      {state.map((city) => (
        <WeatherCard data={city} key={city.id} />
      ))}
    </div>
  );
};

export default App;
