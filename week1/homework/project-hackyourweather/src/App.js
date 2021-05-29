import React from 'react';
import WeatherForecast from './components/WeatherForecast';

function App({ cityWeather }) {
  return (
    <div className="container">
      <h2>Weather</h2>
      <>
        {cityWeather.map((data) => (
          <WeatherForecast data={data} key={data.name} />
        ))}
      </>
    </div>
  );
}

export default App;
