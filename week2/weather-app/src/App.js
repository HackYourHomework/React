import React, { useState } from "react";
import Search from "./component/Search";
import City from "./component/City";
import "./App.css";

function App() {
  const [cityName, setCityName] = useState("");
  const [cityWeather, setCityWeather] = useState([]);

  const handleCityName = (e) => {
    setCityName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    getWeather();
  };

  function getWeather(cityName) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCityWeather(data);
      });
  }
  return (
    <div className="App">
      <h2>Weather</h2>
      <Search
        value={cityName}
        onChange={handleCityName}
        handleSubmit={handleSubmit}
      />
      <City props={cityWeather} />
    </div>
  );
}

export default App;
