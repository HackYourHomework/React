import React from "react";

const City = ({
  key,
  name,
  country,
  weatherMain,
  weatherDesc,
  maxTemp,
  minTemp,
  longitude,
  latitude,
}) => {
  return (
    <div className="container">
      <div key={key} className="weather">
        <h2>
          {name}, {country}
        </h2>
        <h3> {weatherMain}</h3>
        <p>{weatherDesc}</p>
        <p>min temp: {minTemp}</p>
        <p> max temp: {maxTemp}</p>
        <p>
          location: {longitude}, {latitude}
        </p>
      </div>
    </div>
  );
};
export default City;
