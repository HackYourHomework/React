import React, { useState, useEffect } from "react";
import City from "./City";
import Search from "./Search";

//import { TiWeatherPartlySunny } from "react-icons/ti";

function Main() {
  const [cityName, setCityName] = useState();
  const [cityWeather, setCityWeather] = useState([]);
  const [buttonCount, setButtonCount] = useState(false);

  const handleCityName = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonCount(!buttonCount);
  };

  const handleDelete = (id) => {
    let itemDeleted = cityWeather.filter((data) => data.id !== id);
    setCityWeather(itemDeleted);
  };

  const getWeather = async () => {
    try {
      if (cityName) {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY} `
        );
        const data = await response.json();

        if (response.ok) {
          setCityWeather((cityWeather) => {
            if (cityWeather.some((city) => city.name === data.name)) {
              return [...cityWeather];
            } else {
              return [data, ...cityWeather];
            }
          });
        } else {
          setCityWeather([...cityWeather]);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWeather();
  }, [buttonCount]);

  return (
    <div className="container">
      <h2 className="header">Weather</h2>
      <Search
        value={cityName}
        onChange={handleCityName}
        handleSubmit={handleSubmit}
      />
      {alert.show && <p className="weather-err">{alert.text}</p>}
      {cityWeather && <City props={cityWeather} handleDelete={handleDelete} />}
    </div>
  );
}

export default Main;
