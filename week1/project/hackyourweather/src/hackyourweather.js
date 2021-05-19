import React from "react";
import weatherData from "./city-weather.json";

function Weather() {
  return (
    <section>
      {weatherData.map((data) => {
        return (
          <div className="container" key={data.id}>
            <Place city={data.name} country={data.sys.country} />
            <Description
              main={data.weather[0].main}
              description={data.weather[0].description}
            />
            <Temperature min={data.main.temp_min} max={data.main.temp_max} />
            <Location lon={data.coord.lon} lat={data.coord.lat} />
          </div>
        );
      })}
    </section>
  );
}

function Place(props) {
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
    <div className="description">
      <p className="main">{main}</p>
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
      <p>
        min temp: <span>{minCelsius.toFixed(0)}</span>
      </p>
      <p>
        max temp: <span>{maxCelsius.toFixed(0)}</span>
      </p>
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

export default Weather;
