import React from "react";

function WeatherDetails({ weatherData }) {
  const { name, sys, weather, main, coord } = weatherData;
  const { temp_min, temp_max } = main;
  const minCelsius = temp_min - 273.15;
  const maxCelsius = temp_max - 273.15;
  return (
    <div className="container">
      <h1>
        {name}, {sys.country}
      </h1>
      <div className="description">
        <p className="main">{weather[0].main}</p>
        <p>{weather[0].description}</p>
      </div>
      <div>
        <p>
          min temp: <span>{minCelsius.toFixed(0)}</span>
        </p>
        <p>
          max temp: <span>{maxCelsius.toFixed(0)}</span>
        </p>
      </div>
      <div>
        <p>
          location: <span>{coord.lon}, </span>
          <span>{coord.lat}</span>
        </p>
      </div>
    </div>
  );
}

export default WeatherDetails