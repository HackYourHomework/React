import React, { useState, useEffect } from "react";
import City from "./City";
import Search from "./Search";

const Cities = () => {
  const [search, setSearch] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [cityWeatherMap, setCityWeatherMap] = useState();

  useEffect(() => {
    if (search) {
      (async () => {
        setLoading(true);
        try {
          const resp = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
          );
          const data = await resp.json();
          if (!resp.ok) {
            throw new Error(data.message);
          }
          setLoading(false);
          setError(false);
          setCityWeatherMap(data);
        } catch (err) {
          setLoading(false);
          setError(err.message);
          setCityWeatherMap(false);
        }
      })();
    }
  }, [search]);

  return (
    <div>
      <Search setSearch={setSearch} />
      {error ? (
        <h1>{error}</h1>
      ) : loading ? (
        <h1>loading ...</h1>
      ) : cityWeatherMap ? (
        <City key={cityWeatherMap.id} city={cityWeatherMap} />
      ) : (
        <h6>Search for your city</h6>
      )}
    </div>
  );
};

export default Cities;
