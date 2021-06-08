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
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${REACT_APP_OPENWEATHERMAP_API_KEY}`
      );

      const data = await response.json()
      setIsLoading(false);
      setIsError(false);
     
      const searchedCity = {
        name: data.name,
        country: data.sys.country,
        maxTemp: data.main.temp_max,
        minTemp: data.main.temp_min,
        id: data.id,
        description: data.weather[0].description,
        weather: data.weather[0].main,
        lon: data.coord.lon,
        lat: data.coord.lat,
    };

    setWeather([searchedCity, ...weather]);

    } catch (error){
      setIsError(true);
      setIsLoading(false);
    }
   
  }
  function deleteCity(id){
    const cityToDelete = weather.filter(city => city.id !== id);
    setWeather(cityToDelete)
  }
    return (
      <div className="wrapper">
        <Button value={city} getWeather={getWeather} />
        {isLoading && <p>Loading...</p>}
        {city.length === 0 &&weather.length ===0 && <p>Please enter a city name</p>}
        {isError && city.length !== 0 ? <p>City not found</p> : (
        <WeatherDetails weatherData={weather} deleteCity={deleteCity} />)}
      </div>
    );
}

export default Weather