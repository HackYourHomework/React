import React, { useState } from "react";
import City from "./City";
import Search from "./Search";


const Weather = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&APPID=${API_KEY}&units=metric`;

  const fetchSuccessful = (data) => {
    setError(null);
    props.setCities((cities) => {
      const searchedCity = cities.some(
        (searched) => searched.name === data.name
      );
      if (searchedCity) {
        setError(new Error("City already exist..."));
        return cities;
      }
      return [data, ...cities];
    });
  }
  const fetchError =(err) => {
    setError(err);
  }
  const fetchFinally = () => {
    setIsLoading(false);
  }
  const fetchWeather = async () => {
    if (searchInput === "") {
      return fetchError(new Error("Search value cannot be empty"));
    }
      (async () => {
        try {
          setIsLoading(true);
          const res = await fetch(url);
          const data = await res.json();
          condition(res, data);
        } catch (error) {
          fetchError(error);
        } finally {
          fetchFinally();
        }
      })();
      async function condition(res, data) {
        switch (res.status) {
          case 200: {
            fetchSuccessful(data);
            break;
          }
          case 404: {
            fetchError(new Error("Not found"));
            break;
          }
          default: {
          }
        }
    }
    
  
  };
  return (
    <div className="Weather">
      <h1>Weather</h1>
      <Search
        fetchWeather={fetchWeather}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      {isLoading && <p>Loading...</p>}

      {error && <p>{error.message}</p>}

      {!isLoading && !error && props.cities.length === 0 && (
        <p>Search a city</p>
      )}

      {props.cities.length > 0 &&
        props.cities.map((city) => (
          <City
            key={city.id}
            city={city}
            cities={props.cities}
            setCities={props.setCities}

          />
        ))}
    </div>
  );
}

export default Weather;
