import React from 'react';
import cityData from './city-weather.json';

function MainWeather() {
  return (
    <div>
      {cityData.map(({ name, sys, weather, main, coord }) =>  {
        return (
          <div className="box" key={data.id}>
            <City city={data.name} country={data.sys.country} />
            <Description
              main={data.weather[0].main}
              description={data.weather[0].description}
            />
            <Temperature min={data.main.temp_min} max={data.main.temp_max} />
            <Location lon={data.coord.lon} lat={data.coord.lat} />
          </div>
        );
      })}
    </div>
  );
}

function City(props) {
  const { city, country } = props;
  return (
    <h1>
      {city}, {country}
    </h1>
  );
}

function Description(props) {
  const { main, description } = props;
  return (
    <div>
      <p>{main}</p>
      <p>{description}</p>
    </div>
  );
}

function Temperature(props) {
  const { min, max } = props;
  const minCelsius = min - 273.15;
  const maxCelsius = max - 273.15;
  return (
    <div>
      <p>Minimum Temperature: {minCelsius.toFixed(0)}</p>
      <p>Maximum Temperature: {maxCelsius.toFixed(0)}</p>
    </div>
  );
}

function Location(props) {
  const { lon, lat } = props;
  return (
    <div>
      <p>
        location: <span>{lon}, </span>
        <span>{lat}</span>
      </p>
    </div>
  );
}

export default MainWeather;
