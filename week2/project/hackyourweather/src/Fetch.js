import { useState } from "react";
import Button from "./Button";
import WeatherInfo from "./WeatherInfo";

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
console.log(API_KEY);

const Fetch = ({ cityName, setCityName }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getCity = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );

      const data = await res.json();
      if (data.cod === 200) {
        setHasError(false);
        setWeatherData([data, ...weatherData]);
        setLoading(false);
        setCityName("");
      } else {
        setHasError(true);
        setLoading(false);
      }
    } catch (err) {
      setHasError(true);
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClickEvent={getCity} disabled={!cityName} />
      {!hasError && loading && <p>LOADING ....</p>}
      {!hasError && weatherData && (
        <WeatherInfo
          weatherData={weatherData}
          setWeatherData={setWeatherData}
          cityName={{ cityName }}
        />
      )}
      {hasError && (
        <p>Failed to fetch data or please enter a valid city name</p>
      )}
    </div>
  );
};

export default Fetch;
