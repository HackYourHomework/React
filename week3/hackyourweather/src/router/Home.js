import React from "react";
import City from "../components/City";
import { useGlobalContext } from "../components/context";
import Search from "../components/Search";

const Cities = () => {
  const { notification, citiesWeatherMap, onDelete, getCityWeather } =
    useGlobalContext();

  return (
    <>
      <h1>Weather</h1>
      <Search getCityWeather={getCityWeather} />
      {notification && <h2>{notification}</h2>}
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
