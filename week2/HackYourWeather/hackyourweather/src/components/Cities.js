import React, { useState, useEffect } from "react";
import City from "./City";
import Search from "./Search";

const Cities = () => {
  const [search, setSearch] = useState();
  const [cityWeatherMap, setCityWeatherMap] = useState();

  useEffect(() => {
    if (search) {
      (async () => {
        try {
          const resp = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
          );
          const data = await resp.json();
          setCityWeatherMap(data);
        } catch (err) {
          console.log(err);
        }
      })();
    }
  });

  return (
    <div>
      <Search setSearch={setSearch} />
      {cityWeatherMap ? (
        <City key={cityWeatherMap.id} city={cityWeatherMap} />
      ) : (
        <h6>Get your first city!</h6>
      )}
    </div>
  );
};

export default Cities;
