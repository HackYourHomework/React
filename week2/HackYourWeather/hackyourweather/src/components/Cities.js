import React, { useState } from "react";
import City from "./City";
import Search from "./Search";

const Cities = () => {
  const [notification, setNotification] = useState(`Search for your city`);
  const [cityWeatherMap, setCityWeatherMap] = useState();

  const getCityWeatherMap = async (cityName) => {
    if (!cityName) {
      setNotification(`Invalid input....`);
    } else {
      try {
        setNotification(`Loading...`);
        const resp = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
        );
        const data = await resp.json();
        if (!resp.ok) {
          throw new Error(data.message);
        } else {
          setNotification(``);
          setCityWeatherMap(data);
        }
      } catch (err) {
        setNotification(err.message);
        setCityWeatherMap(false);
      }
    }
  };

  return (
    <div>
      <Search getCityWeatherMap={getCityWeatherMap} />
      {notification && <h1>{notification}</h1>}
      {cityWeatherMap && <City key={cityWeatherMap.id} city={cityWeatherMap} />}
    </div>
  );
};

export default Cities;
