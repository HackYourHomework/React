import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

/**
 * Our data comes from city-weather.json
 * -----------------------------
 */
import cities from "./city-weather.json";

function Cities() {
  return (
    <div className="App">
      <div>
        <h2>Weather</h2>
      </div>

      <div className="cities">
        {cities.map((city, index) => (
          <div key={index}>
            <h3>
              {city.name}, {city.sys.country}
            </h3>

            <p>
              <strong>{city.weather.main}</strong>
            </p>
            <p className="smallerLine">{city.weather.description}</p>
            <br></br>
            <p>min temp: {(city.main.temp_min - 273.15).toFixed(2)}</p>
            <p>max temp: {(city.main.temp_max - 273.15).toFixed(2)}</p>

            <p>
              location: {city.coord.lat}, {city.coord.lon}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cities;
