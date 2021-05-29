import React from "react";
import data from "./city-weather.json";

function City() {
  return (
    <div>
       <h1>Weather</h1>
      {
      data.map((city) => {
        return (
          <div className="city">
            <h3> name: {city.name} - country: {city.sys.country}</h3>
            <p> weather: {city.weather[0].main}</p>
            <p> description: {city.weather[0].description}</p>
            <p> minTemp: {(city.main.temp_min -272.15).toFixed(2)}</p>
            <p> maxTemp: {(city.main.temp_max -272.15).toFixed(2)}</p>
            <p>
              lon: {city.coord.lon} - lat: {city.coord.lat}
              </p>
          </div>
        );
      })
      }
    </div>
  );
};


export default City;