import React from "react";

const WeatherInfo = ({ weatherData }) => {
  const CityInfo = ({ city }) => {
    return (
      <div className="city_card">
        <h3>
          {`${city.name} 
          ${city.sys.country}`}
        </h3>
        <p>{city.weather[0].main}</p>
        <div className="info">
          <h5>{city.weather[0].description}</h5>

          <p>{`Min Temp : ${city.main.temp_min} °C`}</p>
          <p>{` Max Temp : ${city.main.temp_max} °C`}</p>
          <p>{`Location : ${city.coord.lat} , ${city.coord.lon}`}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      {weatherData.map((city) => (
        <CityInfo key={city.id} city={city} />
      ))}
    </>
  );
};

export default WeatherInfo;
