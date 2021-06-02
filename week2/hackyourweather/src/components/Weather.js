import React, { useState } from "react";
import Button from "./Button"
import WeatherDetails from "./WeatherDetails"
 const { REACT_APP_OPENWEATHERMAP_API_KEY } = process.env;


function Weather({city}) {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  async function getWeather() {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${REACT_APP_OPENWEATHERMAP_API_KEY}`
      );
      const data = await response.json();
      setWeather(data);
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
      setIsError(false);
    }
  }
  return (
    <div className="wrapper">
    <Button getWeather={getWeather} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>ERROR</p>}
      {Object.keys(weather).length === 0 && <p>Please enter a city name</p>}
      {weather.cod === "404" ? (<p>{weather.message}</p>) : (Object.keys(weather).length !== 0 && <WeatherDetails weatherData={weather} />)}
    </div>
  );
}

export default Weather