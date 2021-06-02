import React from 'react';
import WeatherForecast from './components/WeatherForecast';

function App({ cityWeather }) {
  console.log(cityWeather);
  return (
    <div className="container">
      <h2>Weather</h2>
      <>
        {cityWeather.map((data) => (
          <WeatherForecast data={data} />
        ))}
      </>
    </div>
  );
}

export default App;
