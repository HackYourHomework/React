import { useState } from "react";
import Button from "./Button";
import WeatherInfo from "./WeatherInfo";

const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
console.log(API_KEY);

const Fetch = (props) => {
  // const [weatherData, setWeatherData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getCity = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&units=metric&appid=${API_KEY}`
      );

      const data = await res.json();
      console.log(data);
      if (data.cod === 200) {
        setHasError(false);
        props.setWeatherData([data, ...props.weatherData]);
        setLoading(false);
        props.setCityName("");
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
      <Button onClickEvent={getCity} disabled={!props.cityName} />
      {!hasError && loading && <p>LOADING ....</p>}
      {!hasError && props.weatherData && (
        <WeatherInfo
          weatherData={props.weatherData}
          setWeatherData={props.setWeatherData}
          cityName={props.cityName}
        />
      )}
      {hasError && (
        <p>Failed to fetch data or please enter a valid city name</p>
      )}
    </div>
  );
};

export default Fetch;
