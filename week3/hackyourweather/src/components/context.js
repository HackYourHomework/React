import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [notification, setNotification] = useState("");
  const [citiesWeatherMap, setCitiesWeatherMap] = useState([]);
  // Forecast
  const [cityForecast, setCityForecast] = useState([]);
  const [cityName, setCityName] = useState("");

  const onDelete = (id) => {
    setCitiesWeatherMap(citiesWeatherMap.filter((city) => city.id !== id));
  };

  const getCityWeather = async (cityName) => {
    try {
      if (cityName) {
        setNotification("loading...");
        const resp = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
        );
        const data = await resp.json();
        if (!resp.ok) {
          throw new Error(data.message);
        }
        setNotification();
        if (!citiesWeatherMap.some((city) => city.id === data.id)) {
          setCitiesWeatherMap([data, ...citiesWeatherMap]);
        }
      } else {
        setNotification("empty input");
      }
    } catch (err) {
      setNotification(err.message);
      setCitiesWeatherMap([...citiesWeatherMap]);
    }
  };

  // getForecast
  const getCityForecast = async (cityId) => {
    try {
      setNotification("loading...");
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&APPID=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}&units=metric`
      );
      const data = await resp.json();
      if (!resp.ok) {
        throw new Error(data.message);
      }
      setNotification();
      setCityName(data.city.name);
      setCityForecast(data.list);
    } catch (err) {
      setNotification(err.message);
      setCityForecast();
    }
  };

  return (
    <AppContext.Provider
      value={{
        notification,
        citiesWeatherMap,
        onDelete,
        getCityWeather,
        cityForecast,
        cityName,
        getCityForecast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
