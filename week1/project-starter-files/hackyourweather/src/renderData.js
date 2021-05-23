import React from "react";
import data from "./city-weather.json";

const Cityinfo = () => {
  return (
    <div>
      <h1>Weather</h1>
      {data.map((city, index) => {
        return (
          <div className="city">
            <Name name={city.name} index={index} country={city.sys.country} />
            <Weather weather={city.weather[0].main} index={index} />
            <Description
              description={city.weather[0].description}
              index={index}
            />
            <Mintemp minTemp={city.main.temp_min} />
            <Maxtemp maxTemp={city.main.temp_max} index={index} />
            <Location
              lonLocation={city.coord.lon}
              index={index}
              latLocation={city.coord.lat}
            />
          </div>
        );
      })}
    </div>
  );
};

const Name = ({ name, index, country }) => {
  return (
    <h2>
      {name}, {country}
    </h2>
  );
};

const Weather = ({ weather, index }) => {
  return <h3>{weather}</h3>;
};

const Description = ({ description, index }) => {
  return <p>{description}</p>;
};

const Maxtemp = ({ maxTemp, index }) => {
  return <p>min temp:{maxTemp}</p>;
};

const Mintemp = ({ minTemp, index }) => {
  return <p>max temp:{minTemp}</p>;
};

const Location = ({ lonLocation, index, latLocation }) => {
  return (
    <p>
      Location : {lonLocation},{latLocation}
    </p>
  );
};

export default Cityinfo;
