import React, { useState, useEffect } from "react";
import City from "./City";
import Search from "./Search";

function Weather() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [searchBtn, setSearchBtn] = useState("");

  const API_KEY = "a8dcd37a5afddf53021778af3c388e85";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchBtn}&APPID=${API_KEY}&units=metric`;

  function fetchSuccessful(data) {
    setError(null);
    setCities((cities) => {
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
  function fetchError(err) {
    setError(err);
  }
  function fetchFinally() {
    setIsLoading(false);
  }
  
  useEffect(() => {
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
    function condition(res, data) {
      if (!res.ok) {
        throw new Error(`Enter a proper city name (error is ${res.status})`);
      }
      fetchSuccessful(data);
    }
  }, [searchBtn, url]);

  return (
    <div>
      <h1>Weather</h1>
      <Search
        setSearchBtn={setSearchBtn}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      {isLoading && <p>Loading...</p>}

      {error && <p>{error.message}</p>}

      {!isLoading && !error && cities.length === 0 && <p>Search a city</p>}

      {cities.length > 0 &&
        cities.map((city) => <City key={city.id} city={city} />)}
    </div>
  );
}

export default Weather;
