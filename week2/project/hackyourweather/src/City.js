import React from "react";

function City({ city }) {
  return (
    <div className="Weather">
      <h2>
        {city.name}, {city.sys.country}
      </h2>
      <h3>
        {city.weather[0].main} <br />
        <span>{city.weather[0].description}</span>
      </h3>
      <h5>min temp: {city.main.temp_min}</h5>
      <h5>max temp: {city.main.temp_max}</h5>
      <h5>
        location:{city.coord.lat}, {city.coord.lon}
      </h5>
    </div>
  );
}


export default City;
