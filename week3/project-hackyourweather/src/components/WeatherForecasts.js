import React, { useState } from 'react';
import WeatherForecast from './WeatherForecast';
import cityWeather from '../city-weather.json';
import SearchInput from './SearchInput';
import { v4 as uuidv4 } from 'uuid';

const WeatherForecasts = () => {
  const [cities, setCities] = useState(cityWeather);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchCity({ inputCity }) {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
      );
      if (!response.ok) {
        throw Error;
      }

      const data = await response.json();
      setLoading(false);
      handleCopying(data, cities);
      setCities((prev) => [...prev, data]);
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  }
  function handleCopying(data, city) {
    let checkedID = city.filter((city) => city.id !== data.id);
    setCities(checkedID);
    return <div></div>;
  }
  function handleDelete({ id }) {
    let newCityList = cities.filter((city) => city.id !== id);
    setCities(newCityList);
    return <div></div>;
  }
  return (
    <div>
      {error && <h3 className="error">Something went wrong</h3>}
      <h1 style={{ textAlign: 'center' }}>Weather</h1>
      <SearchInput
        fetchCity={fetchCity}
        checkID={handleCopying}
        city={cities}
      />
      {loading && <h1 className="loading">Loading ...</h1>}
      {cities.map((item) => (
        <WeatherForecast
          city={item}
          key={uuidv4()}
          handleDelete={handleDelete}
          loading={true}
        />
      ))}
      {cities.length === 0 && <h2>NO CITY TO DISPLAY</h2>}
    </div>
  );
};

export default WeatherForecasts;
