import React from "react";
import { Link } from "react-router-dom";

const WeatherInfo = ({ weatherData, setWeatherData, setCityName }) => {
  const removeCity = (id) => {
    setWeatherData(weatherData.filter((data) => data.id !== id));
  };

  const CityInfo = ({ city }) => {
    return (
      <div className="city_card">
        <h3>
          {`${city.name} 
          ${city.sys.country}`}
          <button
            type="button"
            className="removeCityButton"
            onClick={() => removeCity(city.id)}
          >
            X
          </button>
        </h3>

        <p>{city.weather[0].main}</p>
        <div className="info">
          <h5>{city.weather[0].description}</h5>

          <p>{`Min Temp : ${city.main.temp_min} °C`}</p>
          <p>{` Max Temp : ${city.main.temp_max} °C`}</p>
          <p>{`Location : ${city.coord.lat} , ${city.coord.lon}`}</p>
          <Link to={`/${city.id}`}>
            <p>Get 5 days forecast for {city.name}</p>
          </Link>
          <p>{city.id}</p>
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
