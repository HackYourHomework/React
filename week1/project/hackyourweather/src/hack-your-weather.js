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
            <Name name={city.name} country={city.sys.country} />
            <Weather weather={city.weather[0].main} />
            <Description description={city.weather[0].description}/>
            <Mintemp minTemp={city.main.temp_min} />
            <Maxtemp maxTemp={city.main.temp_max}  />
            <Location
              lon={city.coord.lon}      
              lat={city.coord.lat}
            />
          </div>
        );
      })
      }
    </div>
  );
};


function Name ({ name,country }) {
  return (
    <h2>
      {name}, {country}
    </h2>
  );
};

function Weather ({ weather }) {
  return <h2>{weather}</h2>;
};

function Description ({ description }) {
  return <p>{description}</p>;
};

function Mintemp ({ minTemp }) {
  return <p>maximum temp:{minTemp}</p>;
};

function Maxtemp ({ maxTemp }) {
  return <p>minimum temp:{maxTemp}</p>;
};

function Location ({ lon,lat }){
  return (
    <p>Location : {lon},{lat}</p>
  );
};

export default City;