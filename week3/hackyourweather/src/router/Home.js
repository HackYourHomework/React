import React, { useState } from "react";
import City from "../components/City";
import Search from "../components/Search";

const Cities = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [citiesWeatherMap, setCitiesWeatherMap] = useState([]);

  const onDelete = (id) => {
    setCitiesWeatherMap(citiesWeatherMap.filter((city) => city.id !== id));
  };

  const getCityWeather = async (cityName) => {
    try {
      if (cityName) {
        setLoading(true);
        const resp = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
        );
        const data = await resp.json();
        if (!resp.ok) {
          throw new Error(data.message);
        }
        setLoading(false);
        setError(false);
        if (!citiesWeatherMap.some((city) => city.id === data.id)) {
          setCitiesWeatherMap([data, ...citiesWeatherMap]);
        }
      } else {
        setError(`empty input`);
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
      setCitiesWeatherMap([...citiesWeatherMap]);
    }
  };

  return (
    <>
      <h1>Weather</h1>
      <Search getCityWeather={getCityWeather} />
      {error && <h2>{error}</h2>}
      {loading && <h2>loading ...</h2>}
      {citiesWeatherMap &&
        citiesWeatherMap.map((cityWeatherMap) => (
          <City
            key={cityWeatherMap.id}
            city={cityWeatherMap}
            onDelete={onDelete}
          />
        ))}
    </>
  );
};

export default Cities;
