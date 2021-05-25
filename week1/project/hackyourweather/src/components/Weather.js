import React from "react";
import cities from "./city-weather.json";

function Weather() {
  const cityWeather = cities.map((city) => (
    <div className="cityWeather">
      <h1>
        {city.name}, {city.sys.country}
      </h1>
      <h2>{city.weather[0].main}</h2>
      <h4>{city.weather[0].description}</h4>
      <p>max temp: {city.main.temp_max}</p>
      <p>min temp: {city.main.temp_min}</p>
      <p>
        location: {city.coord.lat}, {city.coord.lon}
      </p>
    </div>
  ));
  return <div>{cityWeather}</div>;
}
export default Weather;
