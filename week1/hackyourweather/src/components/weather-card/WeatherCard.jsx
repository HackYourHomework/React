import React from 'react';
import './WeatherCard.css';
const WeatherCard = ({ data }) => {
  const kelvinToCelsius = (num) => (num - 273.15).toFixed(1);
  const { name } = data;
  const { country } = data.sys;
  const { main, description } = data.weather[0];
  const minTemp = kelvinToCelsius(data.main.temp_min);
  const maxTemp = kelvinToCelsius(data.main.temp_max);
  const { lat, lon } = data.coord;

  return (
    <div className="container">
      <h1>
        {name}, {country}
      </h1>
      <div className="status">
        <h2>{main}</h2>
        <p>{description}</p>
      </div>
      <p>Min Temp: {minTemp}</p>
      <p>Max Temp: {maxTemp}</p>
      <p>
        Location: {lat}, {lon}
      </p>
    </div>
  );
};

export default WeatherCard;
